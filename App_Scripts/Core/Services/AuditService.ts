
import { IAuditService, IDataChangedEvent, IDataChangingEvent, IDataChangedInfo } from './Interface/IAuditService';
import { IEvent } from '../Interface/IEvent';
import { IAdaptableBlotter, IColumn } from '../Interface/IAdaptableBlotter';
import { EventDispatcher } from '../EventDispatcher'
import { MenuType, DataType, CellValidationMode, LeafExpressionOperator, SortOrder } from '../Enums';
import { CellValidationState } from '../../Redux/ActionsReducers/Interface/IState';
import { IRangeExpression } from '../Interface/IExpression';
import { ExpressionHelper } from '../Expression/ExpressionHelper'
import { Helper } from '../Helper'
import { ICellValidationRule } from '../Interface/ICellValidationStrategy';
import * as StrategyIds from '../StrategyIds'
import { StringExtensions } from '../../Core/Extensions';

/*
For now this is a very rough and ready Audit Service which will recieve notifications of changes in data - either via an event fired in the blotter or through other strategies.
This means that we are able to work out old and new values - though for the first pass its a bit brittle as we look at _pristineData via a method in the Blotter...
*/
export class AuditService implements IAuditService {
    private _columnDataValueList: Map<string, Map<any, IDataChangedInfo>>;

    constructor(private blotter: IAdaptableBlotter) {
        this._columnDataValueList = new Map();
    }

    //This is a bad idea as it duplicates all data but in the end that what getdirtyvalue was doing....
    //just need to refactor the whole lot. For now it's called only from aggrid and kendo
    Init(initialData: any): void {
        let colummns = this.blotter.AdaptableBlotterStore.TheStore.getState().Grid.Columns;
        for (let record of initialData) {
            for (let prop in record) {
                if (record.hasOwnProperty(prop) && colummns.find(x=>x.ColumnId == prop)) {
                    let primaryKey = record[this.blotter.BlotterOptions.primaryKey]
                    var dataChangedEvent: IDataChangedEvent = { OldValue: null, NewValue: record[prop], ColumnId: prop, IdentifierValue: primaryKey, Timestamp: Date.now(), Record: record };
                    this.InitAddDataValuesToList(dataChangedEvent);
                }
            }
        }
    }

    //slightly optimized version of the AddDataValuesToList so we don't check for data already present
    private InitAddDataValuesToList(dataChangedEvent: IDataChangedEvent) {
        this.checkListExists();

        // add it to the list if not exist for that row - at the moment there is not maximum and no streaming...
        let columnName = dataChangedEvent.ColumnId;
        let myList = this._columnDataValueList.get(columnName);
        //in case we created a new calculated column
        if (!myList) {
            myList = new Map()
            this._columnDataValueList.set(columnName, myList)
        }

        let datechangedInfo: IDataChangedInfo = { OldValue: dataChangedEvent.OldValue, NewValue: dataChangedEvent.NewValue, Timestamp: dataChangedEvent.Timestamp };
        myList.set(dataChangedEvent.IdentifierValue, datechangedInfo)
    }


    public CreateAuditEvent(identifierValue: any, newValue: any, columnId: string, record: any): void {
        var dataChangedEvent: IDataChangedEvent = { OldValue: null, NewValue: newValue, ColumnId: columnId, IdentifierValue: identifierValue, Timestamp: Date.now(), Record: record };
        this.AddDataValuesToList(dataChangedEvent);
        if (dataChangedEvent.NewValue != dataChangedEvent.OldValue) {
            this._onDataSourceChanged.Dispatch(this, dataChangedEvent);
        }
    }

    private AddDataValuesToList(dataChangedEvent: IDataChangedEvent) {
        this.checkListExists();

        // add it to the list if not exist for that row - at the moment there is not maximum and no streaming...
        let columnName = dataChangedEvent.ColumnId;
        let myList = this._columnDataValueList.get(columnName);
        //in case we created a new calculated column
        if (!myList) {
            myList = new Map()
            this._columnDataValueList.set(columnName, myList)
        }

        let localdatachangedInfo = myList.get(dataChangedEvent.IdentifierValue);
        if (localdatachangedInfo) {
            dataChangedEvent.OldValue = localdatachangedInfo.NewValue;
            localdatachangedInfo.OldValue = dataChangedEvent.OldValue
            localdatachangedInfo.NewValue = dataChangedEvent.NewValue
            localdatachangedInfo.Timestamp = dataChangedEvent.Timestamp
        }
        else { 
            let datechangedInfo: IDataChangedInfo = { OldValue: dataChangedEvent.OldValue, NewValue: dataChangedEvent.NewValue, Timestamp: dataChangedEvent.Timestamp };
            myList.set(dataChangedEvent.IdentifierValue, datechangedInfo)
        }
    }

    public getExistingDataValue(dataChangingEvent: IDataChangingEvent): any {
        this.checkListExists();

        let myList = this._columnDataValueList.get(dataChangingEvent.ColumnId);
        //in case we created a new calculated column
        if (!myList) {
            myList = new Map()
            this._columnDataValueList.set(dataChangingEvent.ColumnId, myList)
        }
        let localdatachangedInfo = myList.get(dataChangingEvent.IdentifierValue);
        if (localdatachangedInfo) {
            return localdatachangedInfo.NewValue;
        }
        return null
    }

    private checkListExists(): void {
        if (this._columnDataValueList.size == 0) {
            let columns = this.blotter.AdaptableBlotterStore.TheStore.getState().Grid.Columns;
            columns.forEach(c => {
                this._columnDataValueList.set(c.ColumnId, new Map())
            })
        }
    }
    private _onDataSourceChanged: EventDispatcher<IAuditService, IDataChangedEvent> = new EventDispatcher<IAuditService, IDataChangedEvent>();

    OnDataSourceChanged(): IEvent<IAuditService, IDataChangedEvent> {
        return this._onDataSourceChanged;
    }

    // Not sure where to put this: was in the strategy but might be better here until I can work out a way of having an event with a callback...
    public CheckCellChanging(dataChangedEvent: IDataChangingEvent): ICellValidationRule[] {
        let editingRules = this.GetCellValidationState().CellValidations.filter(v => v.ColumnId == dataChangedEvent.ColumnId);
        let failedWarningRules: ICellValidationRule[] = [];
        if (editingRules.length > 0) {
            let columns: IColumn[] = this.blotter.AdaptableBlotterStore.TheStore.getState().Grid.Columns;

            // first check the rules which have expressions
            let expressionRules: ICellValidationRule[] = editingRules.filter(r => r.HasExpression);

            if (expressionRules.length > 0) {

                // loop through all rules with an expression (checking the prevent rules first)
                // if the expression is satisfied check if validation rule passes; if it fails then return immediately (if its prevent) or put the rule in return array (if its warning).
                // if expression isnt satisfied then we can ignore the rule but it means that we need subsequently to check all the rules with no expressions
                for (let expressionRule of expressionRules) {
                    let isSatisfiedExpression: boolean = ExpressionHelper.checkForExpression(expressionRule.OtherExpression, dataChangedEvent.IdentifierValue, columns, this.blotter);
                    if (isSatisfiedExpression && !this.IsCellValidationRuleValid(expressionRule, dataChangedEvent, columns)) {
                        // if we fail then get out if its prevent and keep the rule and stop looping if its warning...
                        if (expressionRule.CellValidationMode == CellValidationMode.Prevent) {
                            this.blotter.AuditLogService.AddAdaptableBlotterFunctionLog(StrategyIds.CellValidationStrategyId,
                                "CheckCellChanging",
                                "Failed",
                                { failedRules: [expressionRule], DataChangingEvent: dataChangedEvent })
                            return [expressionRule];
                        } else {
                            failedWarningRules.push(expressionRule);
                        }
                    }

                }
            }

            // now check the rules without expressions
            let noExpressionRules: ICellValidationRule[] = editingRules.filter(r => !r.HasExpression);
            for (let noExpressionRule of noExpressionRules) {
                if (!this.IsCellValidationRuleValid(noExpressionRule, dataChangedEvent, columns)) {
                    if (noExpressionRule.CellValidationMode == CellValidationMode.Prevent) {
                        this.blotter.AuditLogService.AddAdaptableBlotterFunctionLog(StrategyIds.CellValidationStrategyId,
                            "CheckCellChanging",
                            "Failed",
                            { failedRules: [noExpressionRule], DataChangingEvent: dataChangedEvent })
                        return [noExpressionRule];
                    } else {
                        failedWarningRules.push(noExpressionRule);
                    }

                }
            }
        }
        if (failedWarningRules.length > 0) {
            this.blotter.AuditLogService.AddAdaptableBlotterFunctionLog(StrategyIds.CellValidationStrategyId,
                "CheckCellChanging",
                "Warning",
                { failedRules: failedWarningRules, DataChangingEvent: dataChangedEvent })
        }
        else {
            this.blotter.AuditLogService.AddAdaptableBlotterFunctionLog(StrategyIds.CellValidationStrategyId,
                "CheckCellChanging",
                "Ok",
                { DataChangingEvent: dataChangedEvent })
        }
        return failedWarningRules;
    }



    private IsCellValidationRuleValid(cellValidationRule: ICellValidationRule, dataChangedEvent: IDataChangingEvent, columns: IColumn[]): boolean {
        // if its none then validation fails immediately
        if (cellValidationRule.RangeExpression.Operator == LeafExpressionOperator.None) {
            return false;
        }

        let columnDataType: DataType = columns.find(c => c.ColumnId == dataChangedEvent.ColumnId).DataType;
        // taken primarily from IsSatisfied in expresion - wonder if we can use that fully?
        let operand1: any;
        let operand2: any;
        let newValue: any;
        switch (columnDataType) {
            case DataType.Date:
                operand1 = Date.parse(cellValidationRule.RangeExpression.Operand1)
                if (StringExtensions.IsNotEmpty(cellValidationRule.RangeExpression.Operand2)) {
                    operand2 = Date.parse(cellValidationRule.RangeExpression.Operand2)
                }
                newValue = dataChangedEvent.NewValue.setHours(0, 0, 0, 0)
                break
            case DataType.Number:
                operand1 = Number(cellValidationRule.RangeExpression.Operand1)
                if (StringExtensions.IsNotEmpty(cellValidationRule.RangeExpression.Operand2)) {
                    operand2 = Number(cellValidationRule.RangeExpression.Operand2);
                }
                newValue = dataChangedEvent.NewValue;
                break
            case DataType.Boolean:
                newValue = dataChangedEvent.NewValue;
                break;
            case DataType.Object:
            case DataType.String:
                operand1 = cellValidationRule.RangeExpression.Operand1.toLowerCase();
                operand2 = cellValidationRule.RangeExpression.Operand2.toLowerCase();
                newValue = dataChangedEvent.NewValue.toLowerCase();
                break;
        }

        switch (cellValidationRule.RangeExpression.Operator) {
            case LeafExpressionOperator.Equals:
                return newValue == operand1;
            case LeafExpressionOperator.NotEquals:
                return newValue != operand1;
            case LeafExpressionOperator.GreaterThan:
                return newValue > operand1;
            case LeafExpressionOperator.LessThan:
                return newValue < operand1;
            case LeafExpressionOperator.PercentChange:
                let oldPercentValue: any = this.getExistingDataValue(dataChangedEvent);
                let percentChange: number = Math.abs(100 - Math.abs(newValue * 100 / oldPercentValue))
                return percentChange < Number(operand1);
            case LeafExpressionOperator.ValueChange:
                let oldChangeValue: any = this.getExistingDataValue(dataChangedEvent);
                let changeInValue: number = Math.abs(newValue - oldChangeValue);
                return changeInValue < Number(operand1);
            case LeafExpressionOperator.Between:
                return (newValue > operand1 && newValue < operand2);
            case LeafExpressionOperator.NotBetween:
                return !(newValue > operand1 && newValue < operand2);
            case LeafExpressionOperator.IsPositive:
                return (newValue > 0);
            case LeafExpressionOperator.IsNegative:
                return (newValue < 0);
            case LeafExpressionOperator.IsTrue:
                return (newValue == true);
            case LeafExpressionOperator.IsFalse:
                return (newValue == false);
        }
        return false;
    }


    private GetCellValidationState(): CellValidationState {
        return this.blotter.AdaptableBlotterStore.TheStore.getState().CellValidation;
    }


}
