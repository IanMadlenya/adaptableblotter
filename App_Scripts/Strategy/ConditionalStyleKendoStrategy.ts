import { ConditionalStyleStrategy } from './ConditionalStyleStrategy';
import { IConditionalStyleStrategy } from '../Strategy/Interface/IConditionalStyleStrategy';
import { ConditionalStyleScope } from '../Core/Enums';
import { IDataChangedEvent } from '../Core/Services/Interface/IAuditService'
import { ExpressionHelper } from '../Core/Helpers/ExpressionHelper';
import { Helper } from '../Core/Helpers/Helper';
import { AdaptableBlotter } from '../Vendors/Kendo/AdaptableBlotter';
import * as StyleConstants from '../Core/Constants/StyleConstants'

export class ConditionalStyleKendoStrategy extends ConditionalStyleStrategy implements IConditionalStyleStrategy {
    constructor(blotter: AdaptableBlotter) {
        super(blotter)
    }

    // Called when a single piece of data changes, ie. usually the result of an inline edit
    protected handleDataSourceChanged(dataChangedEvent: IDataChangedEvent): void {
        let theBlotter = this.blotter as AdaptableBlotter
        let columns = this.blotter.AdaptableBlotterStore.TheStore.getState().Grid.Columns;
        this.ConditionalStyleState.ConditionalStyleConditions.forEach((c, index) => {
            let columnIndex: number = this.blotter.getColumnIndex(c.ColumnId);

            if (ExpressionHelper.checkForExpression(c.Expression, dataChangedEvent.IdentifierValue, columns, this.blotter)) {
                if (c.ConditionalStyleScope == ConditionalStyleScope.Row) {
                    theBlotter.addRowStyle(dataChangedEvent.IdentifierValue, StyleConstants.CONDITIONAL_STYLE_STYLE + index)
                }
                else if (c.ConditionalStyleScope == ConditionalStyleScope.Column) {
                    theBlotter.addCellStyle(dataChangedEvent.IdentifierValue, columnIndex, StyleConstants.CONDITIONAL_STYLE_STYLE + index)
                }
            }
            else {
                if (c.ConditionalStyleScope == ConditionalStyleScope.Row) {
                    theBlotter.removeRowStyle(dataChangedEvent.IdentifierValue, StyleConstants.CONDITIONAL_STYLE_STYLE + index)
                }
                else if (c.ConditionalStyleScope == ConditionalStyleScope.Column) {
                    theBlotter.removeCellStyle(dataChangedEvent.IdentifierValue, columnIndex, StyleConstants.CONDITIONAL_STYLE_STYLE + index)
                }
            }
        })
    }

    protected InitStyles(): void {
        let theBlotter = this.blotter as AdaptableBlotter
        theBlotter.removeAllCellStylesWithRegex(new RegExp("^" + StyleConstants.CONDITIONAL_STYLE_STYLE));
        theBlotter.removeAllRowStylesWithRegex(new RegExp("^" + StyleConstants.CONDITIONAL_STYLE_STYLE));

        let columns = this.blotter.AdaptableBlotterStore.TheStore.getState().Grid.Columns;
        // adding this check as things can get mixed up during 'clean user data'
        if (columns.length > 0 && this.ConditionalStyleState.ConditionalStyleConditions.length > 0) {

            let rowConditionalStyles = this.ConditionalStyleState.ConditionalStyleConditions
                .filter(x => x.ConditionalStyleScope == ConditionalStyleScope.Row)

            //we add the Index of the column to the list so we do not need to reevaluate every row
            let columnConditionalStyles = this.ConditionalStyleState.ConditionalStyleConditions
                .filter(x => x.ConditionalStyleScope == ConditionalStyleScope.Column)
                .map(cs => Object.assign({}, cs, { columnIndex: this.blotter.getColumnIndex(cs.ColumnId), collectionIndex: this.ConditionalStyleState.ConditionalStyleConditions.indexOf(cs) }))

            let columnConditionalStylesGroupedByColumn = Helper.groupBy(columnConditionalStyles, "ColumnId")

            this.blotter.forAllRecordsDo((row: any) => {
                let primaryKey = this.blotter.getPrimaryKeyValueFromRecord(row)
                //here we use the operator "in" on purpose as the GroupBy function that I wrote creates
                //an object with properties that have the name of the groupbykey
                for (let column in columnConditionalStylesGroupedByColumn) {
                    //we just need to find one that match....
                    for (let columnCS of columnConditionalStylesGroupedByColumn[column]) {
                        if (ExpressionHelper.checkForExpressionFromRecord(columnCS.Expression, row, columns, this.blotter)) {
                            theBlotter.addCellStyle(primaryKey, columnCS.columnIndex, StyleConstants.CONDITIONAL_STYLE_STYLE + columnCS.collectionIndex)
                            break
                        }
                    }
                }
                //we just need to find one that match....
                for (let rowCS of rowConditionalStyles) {
                    if (ExpressionHelper.checkForExpressionFromRecord(rowCS.Expression, row, columns, this.blotter)) {
                        theBlotter.addRowStyle(primaryKey, StyleConstants.CONDITIONAL_STYLE_STYLE + this.ConditionalStyleState.ConditionalStyleConditions.indexOf(rowCS))
                        break
                    }
                }
            })
        }
    }
}


