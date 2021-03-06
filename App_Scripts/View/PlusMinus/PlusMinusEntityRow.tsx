import { IPlusMinusCondition } from '../../Strategy/Interface/IPlusMinusStrategy';
import * as React from "react";
import { FormControl } from 'react-bootstrap';
import { EntityListActionButtons } from '../Components/Buttons/EntityListActionButtons';
import { AdaptableObjectRow } from '../Components/AdaptableObjectRow';
import { IColumn } from '../../Core/Interface/IColumn';
import { SharedEntityExpressionRowProps } from '../Components/SharedProps/ConfigEntityRowProps';
import { Helper } from '../../Core/Helpers/Helper';
import * as GeneralConstants from '../../Core/Constants/GeneralConstants';
import { ExpressionHelper } from '../../Core/Helpers/ExpressionHelper';
import { IColItem } from "../UIInterfaces";

export interface PlusMinusEntityRowProps extends SharedEntityExpressionRowProps<PlusMinusEntityRow> {
    Column: IColumn
    onColumnDefaultNudgeValueChange: (index: number, event: React.FormEvent<any>) => void;
}

export class PlusMinusEntityRow extends React.Component<PlusMinusEntityRowProps, {}> {
    render(): any {
        let x: IPlusMinusCondition = this.props.AdaptableBlotterObject as IPlusMinusCondition
        let colItems: IColItem[] = [].concat(this.props.ColItems);

        colItems[0].Content = this.props.Column ? this.props.Column.FriendlyName : x.ColumnId + GeneralConstants.MISSING_COLUMN
        colItems[1].Content = <FormControl value={x.NudgeValue.toString()} type="number" placeholder="Enter a Number" onChange={(e) => this.props.onColumnDefaultNudgeValueChange(this.props.Index, e)} />
        colItems[2].Content = this.wrapExpressionDescription(x)

        let buttons: any = <EntityListActionButtons
            ConfirmDeleteAction={this.props.onDeleteConfirm}
            editClick={() => this.props.onEdit(this.props.Index, x)}
            shareClick={() => this.props.onShare()}
            showShare={this.props.TeamSharingActivated}
            overrideDisableEdit={false}
            ConfigEntity={x}
            EntityName="P">
        </EntityListActionButtons>
        colItems[3].Content = buttons

        return <AdaptableObjectRow ColItems={colItems} />

    }


    private wrapExpressionDescription(plusMinusCondition: IPlusMinusCondition): string {
        return (plusMinusCondition.IsDefaultNudge) ? "[Default Column Nudge Value]" : ExpressionHelper.ConvertExpressionToString(plusMinusCondition.Expression, this.props.Columns, this.props.UserFilters);
    }
}

