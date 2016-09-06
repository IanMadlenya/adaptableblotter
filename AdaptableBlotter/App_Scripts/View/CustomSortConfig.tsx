import {ICustomSort} from '../Core/Interface/ICustomSortStrategy';
/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as Redux from "redux";
import { Provider, connect } from 'react-redux';
import {ControlLabel, FormGroup, Button, Form, Col, Panel, ListGroup, Row, Modal, MenuItem, SplitButton, ButtonGroup, Jumbotron} from 'react-bootstrap';

import {AdaptableBlotterState} from '../Redux/Store/Interface/IAdaptableStore'
import * as CustomSortRedux from '../Redux/ActionsReducers/CustomSortRedux'
import {CustomSortEditor} from './CustomSortEditor'
import {IStrategyViewPopupProps} from '../Core/Interface/IStrategyView'
import {IColumn} from '../Core/Interface/IAdaptableBlotter';
import {Step1,Step2,Step3,MyData,AdaptableWizard} from './Wizard/AdaptableWizard'


interface CustomSortConfigProps extends IStrategyViewPopupProps<CustomSortConfigComponent> {
    onAddCustomSort: (customSort: ICustomSort) => CustomSortRedux.CustomSortAddAction
    onDeleteCustomSort: (customSort: ICustomSort) => CustomSortRedux.CustomSortDeleteAction
    onEditCustomSort: (customSort: ICustomSort) => CustomSortRedux.CustomSortEditAction
    CustomSorts: Array<ICustomSort>
    Columns: Array<IColumn>
}

interface CustomSortConfigInternalState {
    isEditing: boolean;
    isPoc:boolean
}

class CustomSortConfigComponent extends React.Component<CustomSortConfigProps, CustomSortConfigInternalState> {
    Data = new MyData();
    constructor() {
        super();
        this.state = { isEditing: false, isPoc:false }
        
    }
    render() {
        let customSorts = this.props.CustomSorts.map((customSort: ICustomSort) => {
            let column = this.props.Columns.find(x => x.ColumnId == customSort.ColumnId);
            if (column == null) return;
            return <CustomSortConfigItem CustomSort={customSort} key={customSort.ColumnId}
                onEdit={(customSort) => this.onEditCustomSort(customSort) }
                onDelete={(customSort) => this.props.onDeleteCustomSort(customSort) }
                ColumnLabel={column.ColumnFriendlyName}></CustomSortConfigItem>
        });
        var menuColItems = this.props.Columns.map((col: IColumn) => {
            if (!this.props.CustomSorts.find(x => x.ColumnId == col.ColumnId)) {
                return <MenuItem key={col.ColumnId} onClick={() => this.CreateCustomSort(col.ColumnId) }>{col.ColumnFriendlyName}</MenuItem>
            }
        });

        let header = <Form horizontal>
            <Row>
                <Col xs={7}>Custom Sorts</Col>
                <Col xs={5}>
                    <ButtonGroup>
            <Button onClick={() => this.POCStart()}>Start Wizard POC</Button>
                        <SplitButton title="Create Custom Sort" id="Create_Custom_Sort">
                            {menuColItems}
                        </SplitButton>
                    </ButtonGroup>
                </Col>
            </Row>
        </Form>;
        let steps = [<Step1 />,<Step2 />,<Step3  />]
        return <Panel header={header} bsStyle="primary">
            {this.props.CustomSorts.length == 0 ? <Jumbotron>
                <p>Click 'Add' to create a new bespoke sort for a column of your choosing.</p>
            </Jumbotron> : null}
            <ListGroup>
                {customSorts}
            </ListGroup>
            {this.state.isEditing ?
                <Modal show={this.state.isEditing} onHide={() => this.closeEditing() }  >
                    {/*<Modal.Header closeButton>
            <Modal.Title>{}</Modal.Title>
          </Modal.Header>*/}
                    <Modal.Body style={divStyle}>
                        <CustomSortEditor CustomSort={this._editedCustomSort}
                            ColumnValues={this._columnValues}
                            onChange={(selectedValues) => this.onCustomSortChange(selectedValues) }
                            ColumnLabel={ this.props.Columns.find(x => x.ColumnId == this._editedCustomSort.ColumnId).ColumnFriendlyName}></CustomSortEditor>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.closeEditing() }>Close</Button>
                    </Modal.Footer>
                </Modal> : null}
                            {this.state.isPoc ?
                <AdaptableWizard Steps={steps} Data={this.Data} onHide={()=>this.closeWizard()} onFinish={() => this.WizardFinish()} ></AdaptableWizard> : null}
        </Panel>
    }
    private _columnValues: any[];
    private _editedCustomSort: ICustomSort;

    closeEditing() {
        if (this.props.CustomSorts.find(x => x.ColumnId == this._editedCustomSort.ColumnId)) {
            this.props.onEditCustomSort(this._editedCustomSort)
        }
        else {
            this.props.onAddCustomSort(this._editedCustomSort)
        }


        this.setState({ isEditing: false, isPoc : false }, () => { this._editedCustomSort = null; this._columnValues = []; });
    }

    closeWizard(){
        this.setState({ isEditing: false, isPoc : false });
    }
    POCStart(){
        this.setState({ isEditing: false, isPoc : true });
    }
    WizardFinish(){
        alert("Wizard Finish with :" + this.Data.toto)
    }

    private onEditCustomSort(customSort: ICustomSort) {
        //I'm unsure if we should do it like that or do the whole Redux roundtrip,.......
        this._editedCustomSort = customSort;
        this._columnValues = Array.from(new Set(this.props.AdaptableBlotter.getColumnValueString(customSort.ColumnId)));
        this.setState({ isEditing: true, isPoc : false });
    }

    CreateCustomSort(ColumnId: string) {
        this._editedCustomSort = { ColumnId: ColumnId, CustomSortItems: [] };
        this._columnValues = Array.from(new Set(this.props.AdaptableBlotter.getColumnValueString(ColumnId)));
        this.setState({ isEditing: true, isPoc : false });
    }

    onCustomSortChange(selectedValues: Array<string>) {
        this._editedCustomSort.CustomSortItems = selectedValues;
        //we don't update store at this time since it will update the sort in the grid and it takes a bit of time as we need to reinint the fucking grid......
    }
}

interface CustomSortConfigItemProps extends React.ClassAttributes<CustomSortConfigItem> {
    CustomSort: ICustomSort
    ColumnLabel: string
    onEdit: (CustomSort: ICustomSort) => void;
    onDelete: (CustomSort: ICustomSort) => void;
}
export class CustomSortConfigItem extends React.Component<CustomSortConfigItemProps, {}> {
    render(): any {
        return <li
            className="list-group-item"
            onClick={() => { } }>
            <Row>
                <Col xs={2}>{this.props.ColumnLabel}</Col>
                <Col xs={6} style={divStyle}>
                    {this.props.CustomSort.CustomSortItems.join() }
                </Col>
                <Col xs={4}>
                    <ButtonGroup>
                        <Button onClick={() => this.props.onEdit(this.props.CustomSort) }>Edit</Button>
                        <Button onClick={() => this.props.onDelete(this.props.CustomSort) }>Delete</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </li>
    }
}

function mapStateToProps(state: AdaptableBlotterState, ownProps: any) {
    return {
        CustomSorts: state.CustomSort.CustomSorts,
        AdaptableBlotter: ownProps.AdaptableBlotter,
        Columns: state.Grid.Columns
    };
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch: Redux.Dispatch<AdaptableBlotterState>) {
    return {
        onAddCustomSort: (customSort: ICustomSort) => dispatch(CustomSortRedux.AddCustomSort(customSort)),
        onDeleteCustomSort: (customSort: ICustomSort) => dispatch(CustomSortRedux.DeleteCustomSort(customSort)),
        onEditCustomSort: (customSort: ICustomSort) => dispatch(CustomSortRedux.EditCustomSort(customSort))
    };
}

export let CustomSortConfig = connect(mapStateToProps, mapDispatchToProps)(CustomSortConfigComponent);

var divStyle = {
    wordWrap: 'break-word'
};