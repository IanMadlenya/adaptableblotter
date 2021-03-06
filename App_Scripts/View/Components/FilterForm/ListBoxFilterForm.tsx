import * as React from "react";
import { DistinctCriteriaPairValue, LeafExpressionOperator, DataType } from '../../../Core/Enums'
import { MenuItem,  DropdownButton, ListGroupItem, FormControl, ListGroup, ListGroupProps, FormGroup, InputGroup } from 'react-bootstrap';
import { StringExtensions } from '../../../Core/Extensions/StringExtensions';
import { ExpressionHelper } from '../../../Core/Helpers/ExpressionHelper'
import { IRange } from '../../../Core/Interface/IRange'
import * as CalendarConstants from '../../../Core/Constants/CalendarConstants';
import { IRawValueDisplayValuePair } from "../../UIInterfaces";
import { AdaptableBlotterFormControlTextClear } from "../Forms/AdaptableBlotterFormControlTextClear";
import { AdaptableBlotterForm } from "../Forms/AdaptableBlotterForm";
import { UIHelper } from "../../UIHelper";


export interface ListBoxFilterFormProps extends ListGroupProps {
    ColumnValues: Array<IRawValueDisplayValuePair>
    UserFilters: Array<IRawValueDisplayValuePair>
    UiSelectedColumnValues: Array<string>
    UiSelectedUserFilters: Array<string>
    UiSelectedRange: IRange
    onColumnValueSelectedChange: (SelectedValues: Array<any>) => void
    onUserFilterSelectedChange: (SelectedValues: Array<any>) => void
    onCustomRangeExpressionChange: (rangeExpression: IRange) => void
    ColumnValueType: DistinctCriteriaPairValue
    Operators: Array<LeafExpressionOperator>
    DataType: DataType
}

export interface ListBoxFilterFormState extends React.ClassAttributes<ListBoxFilterForm> {
    UiSelectedColumnValues: Array<string>
    UiSelectedUserFilters: Array<string>
    UiSelectedRange: IRange
    FilterValue: string
}

export class ListBoxFilterForm extends React.Component<ListBoxFilterFormProps, ListBoxFilterFormState> {
    constructor(props: ListBoxFilterFormProps) {
        super(props);

        this.state = {
            UiSelectedColumnValues: this.props.UiSelectedColumnValues,
            UiSelectedUserFilters: this.props.UiSelectedUserFilters,
            UiSelectedRange: this.props.UiSelectedRange,
            FilterValue: "",
        };
    }
    componentWillReceiveProps(nextProps: ListBoxFilterFormProps, nextContext: any) {
        this.setState({
            UiSelectedColumnValues: nextProps.UiSelectedColumnValues,
            UiSelectedUserFilters: nextProps.UiSelectedUserFilters,
            UiSelectedRange: nextProps.UiSelectedRange,
            FilterValue: this.state.FilterValue,
        });
    }

    render() {

        let userFiltersItemsElements = this.props.UserFilters.map((x, y) => {
            let isActive: boolean
            isActive = this.state.UiSelectedUserFilters.indexOf(x.RawValue) >= 0;
            let display: string = x.DisplayValue;
            let value = x.RawValue;
            if (StringExtensions.IsNotEmpty(this.state.FilterValue) && display.toLocaleLowerCase().indexOf(this.state.FilterValue.toLocaleLowerCase()) < 0) {
                return null;
            }
            else {
                return <ListGroupItem key={"userFilter" + y} style={userFilterItemStyle}
                    onClick={() => this.onClickItemUserFilter(x)}
                    active={isActive}
                    value={value} >{display}</ListGroupItem>
            }
        })

        let columnValuesItemsElements = this.props.ColumnValues.map((x, y) => {
            let isActive: boolean
            let value: any
            if (this.props.ColumnValueType == DistinctCriteriaPairValue.RawValue) {
                isActive = this.state.UiSelectedColumnValues.indexOf(x.RawValue) >= 0;
                value = x.RawValue;
            }
            else if (this.props.ColumnValueType == DistinctCriteriaPairValue.DisplayValue) {
                isActive = this.state.UiSelectedColumnValues.indexOf(x.DisplayValue) >= 0;
                value = x.DisplayValue;
            }

            let display: string = x.DisplayValue;
            if (StringExtensions.IsNotEmpty(this.state.FilterValue) && display.toLocaleLowerCase().indexOf(this.state.FilterValue.toLocaleLowerCase()) < 0) {
                return null;
            }
            else {
                return <ListGroupItem key={"columnValue" + y} style={columnVItemStyle}
                    onClick={() => this.onClickItemColumnValue(x)}
                    active={isActive}
                    value={value} >{display}</ListGroupItem>
            }
        })

        let textClear = <AdaptableBlotterFormControlTextClear
            autoFocus={true}
            style={searchFilterStyle}
             type="text"
            placeholder="Search Filters"
            value={this.state.FilterValue}
            bsSize={"small"}
            OnTextChange={(x) => this.onUpdateFilterSearch(x)} />

        let rangeForm =
            <AdaptableBlotterForm horizontal>
                <FormGroup controlId={"advancedForm"}>
                    <FormControl bsSize={"small"} style={customRangeStyle} componentClass="select" placeholder="select" value={this.state.UiSelectedRange.Operator} onChange={(x) => this.onLeafExpressionOperatorChange(x)} >
                        {this.props.Operators.map((operator: LeafExpressionOperator) => {
                            return <option key={operator} value={operator.toString()}>{ExpressionHelper.OperatorToLongFriendlyString(operator, this.props.DataType)}</option>
                        })}
                    </FormControl>

                    {this.getOperand1FormControl()}
                    {this.getOperand2FormControl()}
                    <div style={separatorStyle}>{"- - - - - - - - - - - - - - - -"}</div>
                </FormGroup>
            </AdaptableBlotterForm>

       
        return <div>
            {rangeForm}
          
            {textClear}
            <ListGroup fill style={divStyle} >
                {userFiltersItemsElements}
                {columnValuesItemsElements}
            </ListGroup>
        </div>;
    }

    getOperand1FormControl(): any {
        if (this.state.UiSelectedRange.Operator != LeafExpressionOperator.Unknown) {
            return <FormControl value={String(this.state.UiSelectedRange.Operand1)} bsSize={"small"} style={customRangeStyle} type={UIHelper.getDescriptionForDataType(this.props.DataType)} placeholder={UIHelper.getPlaceHolderforDataType(this.props.DataType)} onChange={(e) => this.onOperand1Edit(e)} />
        }
    }

    getOperand2FormControl(): any {
        if (this.state.UiSelectedRange.Operator == LeafExpressionOperator.Between) {
            return <FormControl  value={String(this.state.UiSelectedRange.Operand2)} bsSize={"small"} style={customRangeStyle} type={UIHelper.getDescriptionForDataType(this.props.DataType)} placeholder={UIHelper.getPlaceHolderforDataType(this.props.DataType)} onChange={(e) => this.onOperand2Edit(e)} />
        }
    }

    
    onUpdateFilterSearch(filterSearch: string) {
        this.setState({ FilterValue: filterSearch } as ListBoxFilterFormState);
    }

    raiseOnChangeColumnValues() {
        this.props.onColumnValueSelectedChange(this.state.UiSelectedColumnValues);
    }

    raiseOnChangeUserFilter() {
        this.props.onUserFilterSelectedChange(this.state.UiSelectedUserFilters);
    }

    raiseOnChangeCustomExpression() {
        let isValidRange: boolean = false;
        if (this.state.UiSelectedRange.Operator != LeafExpressionOperator.Unknown) {
            if (this.state.UiSelectedRange.Operator != LeafExpressionOperator.Between) {
                isValidRange = (StringExtensions.IsNotNullOrEmpty(this.state.UiSelectedRange.Operand1));
            } else {
                isValidRange = (StringExtensions.IsNotNullOrEmpty(this.state.UiSelectedRange.Operand1) && StringExtensions.IsNotNullOrEmpty(this.state.UiSelectedRange.Operand2));
            }
        }
        if (isValidRange) {
            this.props.onCustomRangeExpressionChange(this.state.UiSelectedRange);
        }
    }

    onClickItemColumnValue(item: IRawValueDisplayValuePair) {
        let index: number
        if (this.props.ColumnValueType == DistinctCriteriaPairValue.RawValue) {
            index = this.state.UiSelectedColumnValues.indexOf(item.RawValue);
        }
        else if (this.props.ColumnValueType == DistinctCriteriaPairValue.DisplayValue) {
            index = this.state.UiSelectedColumnValues.indexOf(item.DisplayValue);
        }

        if (index >= 0) {
            let newArray = [...this.state.UiSelectedColumnValues];
            newArray.splice(index, 1);
            this.setState({ UiSelectedColumnValues: newArray } as ListBoxFilterFormState, () => this.raiseOnChangeColumnValues())
        }
        else {
            let newArray = [...this.state.UiSelectedColumnValues];
            if (this.props.ColumnValueType == DistinctCriteriaPairValue.RawValue) {
                newArray.push(item.RawValue)
            }
            else if (this.props.ColumnValueType == DistinctCriteriaPairValue.DisplayValue) {
                newArray.push(item.DisplayValue)
            }
            this.setState({ UiSelectedColumnValues: newArray } as ListBoxFilterFormState, () => this.raiseOnChangeColumnValues())
        }
    }

    onClickItemUserFilter(item: IRawValueDisplayValuePair) {
        let index = this.state.UiSelectedUserFilters.indexOf(item.RawValue);
        if (index >= 0) {
            let newArray = [...this.state.UiSelectedUserFilters];
            newArray.splice(index, 1);
            this.setState({ UiSelectedUserFilters: newArray } as ListBoxFilterFormState, () => this.raiseOnChangeUserFilter())
        }
        else {
            let newArray = [...this.state.UiSelectedUserFilters];
            newArray.push(item.RawValue)
            this.setState({ UiSelectedUserFilters: newArray } as ListBoxFilterFormState, () => this.raiseOnChangeUserFilter())
        }
    }

    private onLeafExpressionOperatorChange(event: React.FormEvent<any>) {
        let e = event.target as HTMLInputElement;
        let newRange: IRange = {IsOperand1Column: false, IsOperand2Column:false, Operator: e.value as LeafExpressionOperator, Operand1: this.state.UiSelectedRange.Operand1, Operand2: this.state.UiSelectedRange.Operand2 }
        this.setState({ UiSelectedRange: newRange } as ListBoxFilterFormState, () => this.raiseOnChangeCustomExpression())
    }

    private onOperand1Edit(event: React.FormEvent<any>) {
        let e = event.target as HTMLInputElement;
        let newRange: IRange = {IsOperand1Column: false, IsOperand2Column: false, Operator: this.state.UiSelectedRange.Operator, Operand1: e.value, Operand2: this.state.UiSelectedRange.Operand2 }
        this.setState({ UiSelectedRange: newRange } as ListBoxFilterFormState, () => this.raiseOnChangeCustomExpression())
    }

    private onOperand2Edit(event: React.FormEvent<any>) {
        let e = event.target as HTMLInputElement;
        let newRange: IRange = {IsOperand1Column: false, IsOperand2Column: false, Operator: this.state.UiSelectedRange.Operator, Operand1: this.state.UiSelectedRange.Operand1, Operand2: e.value }
        this.setState({ UiSelectedRange: newRange } as ListBoxFilterFormState, () => this.raiseOnChangeCustomExpression())
    }


}

let divStyle: React.CSSProperties = {
    'overflowY': 'auto',
    'overflowX': 'hidden',
    'height': '335px',
    'marginBottom': '0'
}

let userFilterItemStyle: React.CSSProperties = {
    //'width': '87%',export 
    'fontStyle': 'italic',
    'fontSize': 'small',
    'padding': '5px',
    'margin': 0
}

let columnVItemStyle = {
    //'width': '87%',
    'fontSize': 'small',
    'padding': '5px',
    'margin': 0
}

let dropDownNumbDateStyle = {
    'width': '92px'
}

let radioButtonStyle: React.CSSProperties = {
    //'width': '87%',export 
    'fontSize': 'small',
    'padding': '0px',
    'marginLeft': '2px'
}

let customRangeStyle = {
    'marginTop': '10px',
    'marginLeft': '15px',
    'width': '222px'
}
let searchFilterStyle = {
    'marginTop': '0px',
    'marginLeft': '0px',
    'width': '222px'
}

let separatorStyle = {
    'marginTop': '10px',
    'marginBottom': '0px',
    'marginLeft': '15px',
    'width': '222px',
    'textAlign': 'center'
}

