import * as React from "react";
import * as Redux from "redux";
import { Provider, connect } from 'react-redux';
import { Button, Form, Panel, ControlLabel, Row, Col, ButtonToolbar, ListGroup, Well, Glyphicon } from 'react-bootstrap';
import { AdaptableBlotterState } from '../../Redux/Store/Interface/IAdaptableStore'
import * as FilterRedux from '../../Redux/ActionsReducers/FilterRedux'
import * as TeamSharingRedux from '../../Redux/ActionsReducers/TeamSharingRedux'
import * as StrategyIds from '../../Core/StrategyConstants'
import { IStrategyViewPopupProps } from '../../Core/Interface/IStrategyView'
import { IColumn, IConfigEntity } from '../../Core/Interface/IAdaptableBlotter';
import { Helper } from '../../Core/Helper';
import { AdaptableWizard } from './../Wizard/AdaptableWizard'
import { IUserFilter } from '../../Core/Interface/IExpression';
import { ExpressionHelper } from '../../Core/Expression/ExpressionHelper';
import { UserFilterHelper } from '../../Core/Services/UserFilterHelper';
import { PanelWithButton } from '../Components/Panels/PanelWithButton';
import { EntityListActionButtons } from '../Components/Buttons/EntityListActionButtons';
import { ExpressionMode } from '../../Core/Enums'
import { UserFilterWizard } from './UserFilterWizard'
import { StringExtensions } from '../../Core/Extensions';
import { PanelWithRow } from '../Components/Panels/PanelWithRow';
import { ObjectFactory } from '../../Core/ObjectFactory';
import { ButtonNew } from '../Components/Buttons/ButtonNew';

interface UserFilterConfigProps extends IStrategyViewPopupProps<UserFilterConfigComponent> {
    UserFilters: IUserFilter[]
    Columns: IColumn[],
    onAddUpdateUserFilter: (userFilter: IUserFilter) => FilterRedux.UserFilterAddUpdateAction
    onShare: (entity: IConfigEntity) => TeamSharingRedux.TeamSharingShareAction
}

interface UserFilterConfigState {
    EditedUserFilter: IUserFilter
    WizardStartIndex: number
}

class UserFilterConfigComponent extends React.Component<UserFilterConfigProps, UserFilterConfigState> {

    constructor() {
        super();
        this.state = { EditedUserFilter: null, WizardStartIndex: 0 }
    }
    componentDidMount() {
        if (StringExtensions.IsNotNullOrEmpty(this.props.PopupParams)) {
            let arrayParams = this.props.PopupParams.split("|")
            if (arrayParams.length == 2 && arrayParams[0] == "New") {
                let userFilter: IUserFilter = ObjectFactory.CreateEmptyUserFilter();
                userFilter.ColumnId = arrayParams[1]
                this.onEditUserFilter(userFilter)
            }
        }
    }
    render() {
        let infoBody: any[] = ["User Filters are Column Queries that can be named and re-used.", <br />, <br />,
            "Once created, User Filters are available in the column's filter dropdown as if a single colum value.", <br />, <br />,
            "Additionally they are available when creating other Queries (e.g. for Advanced Search)", <br />, <br />,
            "A User Filter Query can contain only one Column Condition; but that condition may contain as many column values, filter or ranges as required."]

        let selectedColumnId: string = "";
        if (this.state.EditedUserFilter != null) {
            let editedColumn: string = this.state.EditedUserFilter.ColumnId;
            if (StringExtensions.IsNotNullOrEmpty(editedColumn)) {
                selectedColumnId = editedColumn;
            }
            else if (StringExtensions.IsNotNullOrEmpty(this.props.PopupParams)) {
                let arrayParams = this.props.PopupParams.split("|")
                if (arrayParams.length == 2) {
                    selectedColumnId = arrayParams[1];
                }
            }
        }

        let cellInfo: [string, number][] = [["Name", 3], ["Description", 6], ["", 3]];

        let UserFilterItems = this.props.UserFilters.filter(f => !UserFilterHelper.IsSystemUserFilter(f)).map((x) => {
            let expressionString = ExpressionHelper.ConvertExpressionToString(x.Expression, this.props.Columns, this.props.UserFilters)
            return <li
                className="list-group-item" key={x.Uid}>
                <Row >
                    <Col xs={3}>
                        {x.FriendlyName}
                    </Col>
                    <Col xs={6}>
                        {expressionString}
                    </Col>
                    <Col xs={3}>
                        <EntityListActionButtons
                            ConfirmDeleteAction={FilterRedux.UserFilterDelete(x)}
                            showShare={this.props.TeamSharingActivated}
                            shareClick={() => this.props.onShare(x)}
                            overrideDisableEdit={expressionString.includes(Helper.MissingColumnMagicString)}
                            editClick={() => this.onEditUserFilter(x)}
                            ConfigEntity={x}
                            EntityName="User Filter">
                        </EntityListActionButtons>
                    </Col>
                </Row>
            </li>
        })

        let newButton = <ButtonNew onClick={() => this.onCreateUserFilter()}
            overrideTooltip="Create User Filter"
            DisplayMode="Glyph+Text" />

        return <PanelWithButton headerText="User Filters" bsStyle="primary" style={panelStyle} infoBody={infoBody}
            button={newButton} glyphicon={"filter"}>
            {UserFilterItems.length > 0 &&
                <div>
                    <PanelWithRow CellInfo={cellInfo} bsStyle="info" />
                    <ListGroup style={listGroupStyle}>
                        {UserFilterItems}
                    </ListGroup>
                </div>
            }

            {UserFilterItems.length == 0 &&
                <Well bsSize="small">Click 'New' to start creating user filters.<p />
                    Once created, user filters are accessible both when filtering columns and creating queries (e.g. Advanced Search, Plus / Minus, Conditional Style etc.).</Well>
            }

            {this.state.EditedUserFilter != null &&
                <UserFilterWizard
                    EditedUserFilter={this.state.EditedUserFilter}
                    Columns={this.props.Columns}
                    UserFilters={this.props.UserFilters}
                    WizardStartIndex={this.state.WizardStartIndex}
                    SelectedColumnId={selectedColumnId}
                    getColumnValueDisplayValuePairDistinctList={this.props.getColumnValueDisplayValuePairDistinctList}
                    closeWizard={() => this.closeWizard()}
                    WizardFinish={() => this.WizardFinish()}
                />
            }
        </PanelWithButton>
    }

    onCreateUserFilter() {
        this.setState({ EditedUserFilter: ObjectFactory.CreateEmptyUserFilter(), WizardStartIndex: 0 });
    }

    onEditUserFilter(userFilter: IUserFilter) {
        //we clone the condition as we do not want to mutate the redux state here....
        this.setState({ EditedUserFilter: Helper.cloneObject(userFilter), WizardStartIndex: 1 });
    }

    closeWizard() {
        this.props.onClearPopupParams()
        this.setState({ EditedUserFilter: null, WizardStartIndex: 0 });
    }

    WizardFinish() {
        this.props.onAddUpdateUserFilter(this.state.EditedUserFilter);
        this.setState({ EditedUserFilter: null, WizardStartIndex: 0 });
    }

}

function mapStateToProps(state: AdaptableBlotterState, ownProps: any) {
    return {
        UserFilters: state.Filter.UserFilters,
        Columns: state.Grid.Columns,
    };
}

function mapDispatchToProps(dispatch: Redux.Dispatch<AdaptableBlotterState>) {
    return {
        onAddUpdateUserFilter: (userFilter: IUserFilter) => dispatch(FilterRedux.UserFilterAddUpdate(userFilter)),
        onShare: (entity: IConfigEntity) => dispatch(TeamSharingRedux.TeamSharingShare(entity, StrategyIds.FilterStrategyId))
    };
}

export let UserFilterConfig = connect(mapStateToProps, mapDispatchToProps)(UserFilterConfigComponent);

let listGroupStyle: React.CSSProperties = {
    overflowY: 'auto',
    minHeight: '100px',
    maxHeight: '300px'
};

let panelStyle = {
    width: '800px'
}
