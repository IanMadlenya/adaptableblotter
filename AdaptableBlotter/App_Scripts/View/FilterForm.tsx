/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as Redux from "redux";
import { Provider, connect } from 'react-redux';
import { AdaptableBlotterState } from '../Redux/Store/Interface/IAdaptableStore';
import * as ColumnFilterRedux from '../Redux/ActionsReducers/ColumnFilterRedux'
import { ColumnFilterState, UserFilterState } from '../Redux/ActionsReducers/Interface/IState';
import { IAdaptableBlotter, IColumn } from '../Core/Interface/IAdaptableBlotter';
import { PanelWithButton } from './PanelWithButton';
import { IColumnFilter, IColumnFilterContext, IColumnFilterItem } from '../Core/Interface/IColumnFilterStrategy';
import { ExpressionHelper } from '../Core/Expression/ExpressionHelper';
import { UserFilterHelper } from '../Core/Services/UserFilterHelper';
import { ColumnType, SortOrder } from '../Core/Enums';
import { Expression } from '../Core/Expression/Expression'
import { IUserFilter } from '../Core/Interface/IExpression'
import { Helper } from '../Core/Helper'
import { ListBoxFilterForm } from './ListBoxFilterForm'

interface FilterFormProps extends React.ClassAttributes<FilterFormComponent> {
    AdaptableBlotter: IAdaptableBlotter;
    CurrentColumn: IColumn;
    UserFilterState: UserFilterState;
    ColumnFilterState: ColumnFilterState;
    onDeleteColumnFilter: (columnFilter: IColumnFilter) => ColumnFilterRedux.ColumnFilterDeleteAction
    onAddEditColumnFilter: (columnFilter: IColumnFilter) => ColumnFilterRedux.ColumnFilterAddEditAction
    ColumnValueType: "displayValue" | "rawValue"
}

class FilterFormComponent extends React.Component<FilterFormProps, {}> {

    render(): any {

        // get user filter expressions appropriate for this column
        let userFilters: IUserFilter[] = this.props.UserFilterState.UserFilters.filter(u => UserFilterHelper.ShowUserFilterForColumn(u.Uid, this.props.CurrentColumn, this.props.AdaptableBlotter));
        let userFilterItems: { rawValue: any, displayValue: string }[] = userFilters.map((uf, index) => { return { rawValue: uf.Uid, displayValue: uf.FriendlyName } })

        let columnValuePairs: Array<{ rawValue: any, displayValue: string }>
        if (this.props.ColumnValueType == "rawValue") {
            // get the values for the column and then sort by raw value
            columnValuePairs = this.props.AdaptableBlotter.getColumnValueDisplayValuePairDistinctList(this.props.CurrentColumn.ColumnId, "rawValue");
            Helper.sortArrayWithProperty(SortOrder.Ascending, columnValuePairs, "rawValue")
        }
        else if (this.props.ColumnValueType == "displayValue") {
            // get the values for the column and then sort by raw value
            columnValuePairs = this.props.AdaptableBlotter.getColumnValueDisplayValuePairDistinctList(this.props.CurrentColumn.ColumnId, "displayValue");
            Helper.sortArrayWithProperty(SortOrder.Ascending, columnValuePairs, "rawValue")
        }

        let existingColumnFilter: IColumnFilter = this.props.CurrentColumn.ColumnType != ColumnType.Boolean && this.props.ColumnFilterState.ColumnFilters.find(cf => cf.ColumnId == this.props.CurrentColumn.ColumnId);
        let uiSelectedColumnValues: String[]
        if (this.props.ColumnValueType == "rawValue") {
            uiSelectedColumnValues = existingColumnFilter && existingColumnFilter.Filter.ColumnRawValuesExpressions.length > 0 ? existingColumnFilter.Filter.ColumnRawValuesExpressions[0].ColumnValues : []
        }
        else if (this.props.ColumnValueType == "displayValue") {
            uiSelectedColumnValues = existingColumnFilter && existingColumnFilter.Filter.ColumnDisplayValuesExpressions.length > 0 ? existingColumnFilter.Filter.ColumnDisplayValuesExpressions[0].ColumnValues : []
        }
        return <PanelWithButton headerText={"Filter"} style={panelStyle} className="no-padding-panel" bsStyle="info">
            <ListBoxFilterForm ColumnValues={columnValuePairs}
                UiSelectedColumnValues={uiSelectedColumnValues}
                UiSelectedUserFilters={existingColumnFilter && existingColumnFilter.Filter.UserFilters.length > 0 ? existingColumnFilter.Filter.UserFilters[0].UserFilterUids : []}
                UserFilters={userFilterItems}
                onColumnValueSelectedChange={(list) => this.onClickColumValue(list)}
                onUserFilterSelectedChange={(list) => this.onClickUserFilter(list)}
                ColumnValueType={this.props.ColumnValueType}>
            </ListBoxFilterForm>
        </PanelWithButton>
    }

    onClickColumValue(columnValues: string[]) {
        let existingColumnFilter: IColumnFilter = this.props.ColumnFilterState.ColumnFilters.find(cf => cf.ColumnId == this.props.CurrentColumn.ColumnId);
        let userFilterUids = existingColumnFilter && existingColumnFilter.Filter.UserFilters.length > 0 ?
            existingColumnFilter.Filter.UserFilters[0].UserFilterUids : []

        let expression: Expression 
        if (this.props.ColumnValueType == "rawValue") {
            expression = ExpressionHelper.CreateSingleColumnExpression(this.props.CurrentColumn.ColumnId, [], columnValues, userFilterUids, [])
        }
        else if (this.props.ColumnValueType == "displayValue") {
            expression = ExpressionHelper.CreateSingleColumnExpression(this.props.CurrentColumn.ColumnId, columnValues, [], userFilterUids, [])
        }
        let columnFilter: IColumnFilter = { ColumnId: this.props.CurrentColumn.ColumnId, Filter: expression };
        //delete if empty
        if (columnValues.length == 0 && userFilterUids.length == 0) {
            this.props.onDeleteColumnFilter(columnFilter);
            return
        } else {
            this.props.onAddEditColumnFilter(columnFilter);
        }
    }

    onClickUserFilter(userFilterUids: string[]) {

        let existingColumnFilter: IColumnFilter = this.props.ColumnFilterState.ColumnFilters.find(cf => cf.ColumnId == this.props.CurrentColumn.ColumnId);

        if (userFilterUids.find(s => s == "All")) {
            existingColumnFilter = null;
            userFilterUids = [];
        }
        let columnValues = existingColumnFilter && existingColumnFilter.Filter.ColumnDisplayValuesExpressions.length > 0 ?
            existingColumnFilter.Filter.ColumnDisplayValuesExpressions[0].ColumnValues : []

        let expression: Expression 
        if (this.props.ColumnValueType == "rawValue") {
            expression = ExpressionHelper.CreateSingleColumnExpression(this.props.CurrentColumn.ColumnId, [], columnValues, userFilterUids, [])
        }
        else if (this.props.ColumnValueType == "displayValue") {
            expression = ExpressionHelper.CreateSingleColumnExpression(this.props.CurrentColumn.ColumnId, columnValues, [], userFilterUids, [])
        }
        let columnFilter: IColumnFilter = { ColumnId: this.props.CurrentColumn.ColumnId, Filter: expression };
        //delete if empty
        if (columnValues.length == 0 && userFilterUids.length == 0) {
            this.props.onDeleteColumnFilter(columnFilter);
            return
        } else {
            this.props.onAddEditColumnFilter(columnFilter);
        }
    }
}

function mapStateToProps(state: AdaptableBlotterState, ownProps: any) {
    return {
        AdaptableBlotter: ownProps.Blotter,
        CurrentColumn: ownProps.CurrentColumn,
        ColumnFilterState: state.ColumnFilter,
        UserFilterState: state.UserFilter
    };
}

function mapDispatchToProps(dispatch: Redux.Dispatch<AdaptableBlotterState>) {
    return {
        onDeleteColumnFilter: (columnFilter: IColumnFilter) => dispatch(ColumnFilterRedux.DeleteColumnFilter(columnFilter)),
        onAddEditColumnFilter: (columnFilter: IColumnFilter) => dispatch(ColumnFilterRedux.AddEditColumnFilter(columnFilter))
    };
}

export let FilterForm = connect(mapStateToProps, mapDispatchToProps)(FilterFormComponent);

export const FilterFormReact = (FilterContext: IColumnFilterContext) => <Provider store={FilterContext.Blotter.AdaptableBlotterStore.TheStore}>
    <FilterForm Blotter={FilterContext.Blotter} CurrentColumn={FilterContext.Column} ColumnValueType={FilterContext.ColumnValueType} />
</Provider>;

let panelStyle = {
    width: '130px'
}
