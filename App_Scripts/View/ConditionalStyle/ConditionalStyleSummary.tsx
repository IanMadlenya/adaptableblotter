import { IConditionalStyleCondition } from '../../Strategy/Interface/IConditionalStyleStrategy';
import * as React from "react";
import * as Redux from "redux";
import { StrategySummaryProps } from '../Components/SharedProps/StrategySummaryProps'
import { EditableConfigEntityState } from '../Components/SharedProps/EditableConfigEntityState';
import { connect } from 'react-redux';
import { Helper } from '../../Core/Helpers/Helper';
import { ConditionalStyleWizard } from './Wizard/ConditionalStyleWizard'
import * as ConditionalStyleRedux from '../../Redux/ActionsReducers/ConditionalStyleRedux'
import * as PopupRedux from '../../Redux/ActionsReducers/PopupRedux'
import { ObjectFactory } from '../../Core/ObjectFactory';
import * as StrategyIds from '../../Core/Constants/StrategyIds'
import * as StrategyNames from '../../Core/Constants/StrategyNames'
import { ConditionalStyleScope } from '../../Core/Enums'
import { AdaptableBlotterState } from '../../Redux/Store/Interface/IAdaptableStore'
import { ExpressionHelper } from '../../Core/Helpers/ExpressionHelper';
import { StyleVisualItem } from '../Components/StyleVisualItem'
import { StrategyHeader } from '../Components/StrategySummary/StrategyHeader'
import { StrategyDetail } from '../Components/StrategySummary/StrategyDetail'
import * as TeamSharingRedux from '../../Redux/ActionsReducers/TeamSharingRedux'
import { UIHelper } from '../UIHelper';
import { IAdaptableBlotterObject } from '../../Core/Interface/Interfaces';


export interface ConditionalStyleSummaryProps extends StrategySummaryProps<ConditionalStyleSummaryComponent> {
    ConditionalStyles: IConditionalStyleCondition[]
    PredefinedColorChoices: string[]
    onAddUpdateConditionalStyle: (index: number, conditionalStyle: IConditionalStyleCondition) => ConditionalStyleRedux.ConditionalStyleAddUpdateAction

}

export class ConditionalStyleSummaryComponent extends React.Component<ConditionalStyleSummaryProps, EditableConfigEntityState> {

    constructor() {
        super();
        this.state = UIHelper.EmptyConfigState();

    }
    render(): any {
        let strategySummaries: any = []

        // title row
        let titleRow = <StrategyHeader
            key={StrategyNames.ConditionalStyleStrategyName}
            StrategyId={StrategyIds.ConditionalStyleStrategyId}
            StrategySummary={Helper.ReturnItemCount(this.props.ConditionalStyles.filter(item => item.ColumnId == this.props.SummarisedColumn.ColumnId && item.ConditionalStyleScope == ConditionalStyleScope.Column), StrategyNames.ConditionalStyleStrategyName)}
            onNew={() => this.onNew()}
            NewButtonTooltip={StrategyNames.ConditionalStyleStrategyName}
        />
        strategySummaries.push(titleRow);

        // existing items
        this.props.ConditionalStyles.map((item, index) => {
            if (item.ColumnId == this.props.SummarisedColumn.ColumnId && item.ConditionalStyleScope == ConditionalStyleScope.Column) {
                let detailRow =
                    <StrategyDetail
                        key={"CS" + index}
                        Item1={<StyleVisualItem Style={item.Style} />}
                        Item2={ExpressionHelper.ConvertExpressionToString(item.Expression, this.props.Columns, this.props.UserFilters)}
                        ConfigEnity={item}
                        EntityName={StrategyNames.ConditionalStyleStrategyName}
                        showShare={this.props.TeamSharingActivated}
                        onEdit={() => this.onEdit(index, item)}
                        onShare={() => this.props.onShare(item)}
                        onDelete={ConditionalStyleRedux.ConditionalStyleDelete(index, item)}
                    />
                strategySummaries.push(detailRow);
            }
        })


        return <div className={this.props.IsReadOnly ? "adaptable_blotter_readonly" : ""}>
            {strategySummaries}

            {this.state.EditedAdaptableBlotterObject &&
                <ConditionalStyleWizard
                    EditedConditionalStyleCondition={this.state.EditedAdaptableBlotterObject as IConditionalStyleCondition}
                    Columns={this.props.Columns}
                    UserFilters={this.props.UserFilters}
                    PredefinedColorChoices={this.props.PredefinedColorChoices}
                    getColumnValueDisplayValuePairDistinctList={this.props.getColumnValueDisplayValuePairDistinctList}
                    WizardStartIndex={this.state.WizardStartIndex}
                    closeWizard={() => this.onCloseWizard()}
                    onFinishWizard={() => this.onFinishWizard()}
                />
            }
        </div>
    }

    onNew() {
        let configEntity: IConditionalStyleCondition = ObjectFactory.CreateEmptyConditionalStyle()
        configEntity.ColumnId = this.props.SummarisedColumn.ColumnId;
        configEntity.ConditionalStyleScope = ConditionalStyleScope.Column;
        this.setState({ EditedAdaptableBlotterObject: configEntity, WizardStartIndex: 1, EditedAdaptableBlotterObjectIndex: -1 });
    }

    onEdit(index: number, ConditionalStyle: IConditionalStyleCondition) {
        this.setState({ EditedAdaptableBlotterObject: Helper.cloneObject(ConditionalStyle), WizardStartIndex: 1, EditedAdaptableBlotterObjectIndex: index });
    }

    onCloseWizard() {
        this.setState({ EditedAdaptableBlotterObject: null, WizardStartIndex: 0, EditedAdaptableBlotterObjectIndex: -1, });
    }

    onFinishWizard() {
        this.props.onAddUpdateConditionalStyle(this.state.EditedAdaptableBlotterObjectIndex, this.state.EditedAdaptableBlotterObject as IConditionalStyleCondition);
        this.setState({ EditedAdaptableBlotterObject: null, WizardStartIndex: 0, EditedAdaptableBlotterObjectIndex: -1, });
    }
}

function mapStateToProps(state: AdaptableBlotterState, ownProps: any) {
    return {
        Columns: state.Grid.Columns,
        ConditionalStyles: state.ConditionalStyle.ConditionalStyleConditions,
        UserFilters: state.UserFilter.UserFilters,
        PredefinedColorChoices: state.UIControlConfig.PredefinedColorChoices
    };
}

function mapDispatchToProps(dispatch: Redux.Dispatch<AdaptableBlotterState>) {
    return {
        onAddUpdateConditionalStyle: (index: number, conditionalStyle: IConditionalStyleCondition) => dispatch(ConditionalStyleRedux.ConditionalStyleAddUpdate(index, conditionalStyle)),
        onShare: (entity: IAdaptableBlotterObject) => dispatch(TeamSharingRedux.TeamSharingShare(entity, StrategyIds.ConditionalStyleStrategyId))
    };
}

export let ConditionalStyleSummary = connect(mapStateToProps, mapDispatchToProps)(ConditionalStyleSummaryComponent);

