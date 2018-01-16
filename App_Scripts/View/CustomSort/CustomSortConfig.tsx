import { ICustomSort } from '../../Core/Interface/ICustomSortStrategy';
import * as React from "react";
import * as Redux from "redux";
import { Provider, connect } from 'react-redux';
import { Button, Form, Col, Panel, ListGroup, Row, Well } from 'react-bootstrap';
import { AdaptableBlotterState } from '../../Redux/Store/Interface/IAdaptableStore'
import * as CustomSortRedux from '../../Redux/ActionsReducers/CustomSortRedux'
import * as PopupRedux from '../../Redux/ActionsReducers/PopupRedux'
import * as TeamSharingRedux from '../../Redux/ActionsReducers/TeamSharingRedux'
import * as StrategyIds from '../../Core/StrategyIds'
import { IStrategyViewPopupProps } from '../../Core/Interface/IStrategyView'
import { IColumn, IConfigEntity } from '../../Core/Interface/IAdaptableBlotter';
import { Helper } from '../../Core/Helper';
import { ObjectFactory } from '../../Core/ObjectFactory';
import { AdaptableWizard } from './../Wizard/AdaptableWizard'
import { CustomSortConfigItem } from './CustomSortConfigItem'
import { CustomSortColumnWizard } from './CustomSortColumnWizard'
import { CustomSortValuesWizard } from './CustomSortValuesWizard'
import { PanelWithButton } from '../Components/Panels/PanelWithButton';
import { PanelWithRow } from '../Components/Panels/PanelWithRow';
import { ButtonNew } from '../Components/Buttons/ButtonNew';
import { StringExtensions } from '../../Core/Extensions'

interface CustomSortConfigProps extends IStrategyViewPopupProps<CustomSortConfigComponent> {
    onAddCustomSort: (customSort: ICustomSort) => CustomSortRedux.CustomSortAddAction
    onEditCustomSort: (customSort: ICustomSort) => CustomSortRedux.CustomSortEditAction
    CustomSorts: Array<ICustomSort>
    Columns: Array<IColumn>
    onShare: (entity: IConfigEntity) => TeamSharingRedux.TeamSharingShareAction
}

interface CustomSortConfigInternalState {
    EditedCustomSort: ICustomSort
    WizardStartIndex: number
}

class CustomSortConfigComponent extends React.Component<CustomSortConfigProps, CustomSortConfigInternalState> {
    constructor() {
        super();
        this.state = { EditedCustomSort: null, WizardStartIndex: 0 }

    }
    componentDidMount() {
        if (StringExtensions.IsNotNullOrEmpty(this.props.PopupParams)) {
            let arrayParams = this.props.PopupParams.split("|")
            if (arrayParams.length == 2 && arrayParams[0] == "New") {
                let newCustomSort = ObjectFactory.CreateEmptyCustomSort()
                newCustomSort.ColumnId = arrayParams[1]
                this.onEditCustomSort(newCustomSort)
            }
            if (arrayParams.length == 2 && arrayParams[0] == "Edit") {
                let editCustomSort = this.props.CustomSorts.find(x => x.ColumnId == arrayParams[1])
                this.onEditCustomSort(editCustomSort)
            }
        }
    }

    render() {
        let infoBody: any[] = ["Custom Sorts enable you to create your own sort orders for columns where the default (alphabetical ascending or descending) is insufficient.", <br />, <br />,
            "Use the Wizard to specify and order the column values in the Sort.", <br />, <br />,
            "A Custom Sort can contain as many column values as required; any values not contained in the Custom Sort will be sorted alphabetically ", <strong>after</strong>, " the sort order has been applied."]


        let customSorts = this.props.CustomSorts.map((customSort: ICustomSort) => {
            let column = this.props.Columns.find(x => x.ColumnId == customSort.ColumnId);
            return <CustomSortConfigItem CustomSort={customSort} key={customSort.ColumnId}
                onEdit={(customSort) => this.onEditCustomSort(customSort)}
                TeamSharingActivated={this.props.TeamSharingActivated}
                onShare={() => this.props.onShare(customSort)}
                onDeleteConfirm={CustomSortRedux.CustomSortDelete(customSort)}
                ColumnLabel={column ? column.FriendlyName : customSort.ColumnId + Helper.MissingColumnMagicString}></CustomSortConfigItem>
        });

        let cellInfo: [string, number][] = [["Column", 3], ["Sort Order", 6], ["", 3]];
        let newButton = <ButtonNew onClick={() => this.CreateCustomSort()}
            overrideTooltip="Create Custom Sort"
            DisplayMode="Glyph+Text" />

        return <PanelWithButton headerText="Custom Sort" style={panelStyle} infoBody={infoBody}
            button={newButton} bsStyle="primary" glyphicon={"sort-by-attributes"}>
            {this.props.CustomSorts.length == 0 ?
                <Well bsSize="small">Click 'New' to create a bespoke sort order for a selected column.</Well>
                : <PanelWithRow CellInfo={cellInfo} bsStyle="info" />
            }

            <ListGroup style={divStyle}>
                {customSorts}
            </ListGroup>
            {this.state.EditedCustomSort &&
                <AdaptableWizard Steps={
                    [<CustomSortColumnWizard Columns={this.props.Columns.filter(x => !this.props.CustomSorts.find(y => y.ColumnId == x.ColumnId))} />,
                    <CustomSortValuesWizard Columns={this.props.Columns}
                        getColumnValueDisplayValuePairDistinctList={this.props.getColumnValueDisplayValuePairDistinctList} />]}
                    Data={this.state.EditedCustomSort}
                    StepStartIndex={this.state.WizardStartIndex}
                    onHide={() => this.closeWizard()}
                    onFinish={() => this.WizardFinish()} ></AdaptableWizard>
            }
        </PanelWithButton>
    }
    private wizardSteps: JSX.Element[]

    closeWizard() {
        this.props.onClearPopupParams()
        this.setState({ EditedCustomSort: null, WizardStartIndex: 0 });
    }
    WizardFinish() {
        if (this.props.CustomSorts.find(x => x.ColumnId == this.state.EditedCustomSort.ColumnId)) {
            this.props.onEditCustomSort(this.state.EditedCustomSort)
        }
        else {
            this.props.onAddCustomSort(this.state.EditedCustomSort)
        }


        this.setState({ EditedCustomSort: null, WizardStartIndex: 0 });
    }

    private onEditCustomSort(customSort: ICustomSort) {
        //so we dont mutate original object
        this.setState({ EditedCustomSort: Helper.cloneObject(customSort), WizardStartIndex: 1 });
    }

    CreateCustomSort() {
        this.setState({ EditedCustomSort: ObjectFactory.CreateEmptyCustomSort(), WizardStartIndex: 0 });
    }
}

function mapStateToProps(state: AdaptableBlotterState, ownProps: any) {
    return {
        CustomSorts: state.CustomSort.CustomSorts,
        Columns: state.Grid.Columns
    };
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch: Redux.Dispatch<AdaptableBlotterState>) {
    return {
        onAddCustomSort: (customSort: ICustomSort) => dispatch(CustomSortRedux.CustomSortAdd(customSort)),
        onEditCustomSort: (customSort: ICustomSort) => dispatch(CustomSortRedux.CustomSortEdit(customSort)),
        onClearPopupParams: () => dispatch(PopupRedux.PopupClearParam()),
        onShare: (entity: IConfigEntity) => dispatch(TeamSharingRedux.TeamSharingShare(entity, StrategyIds.CustomSortStrategyId))
    };
}

export let CustomSortConfig = connect(mapStateToProps, mapDispatchToProps)(CustomSortConfigComponent);

let divStyle: React.CSSProperties = {
    'overflowY': 'auto',
    'maxHeight': '300px'
}

let panelStyle = {
    width: '800px'
}