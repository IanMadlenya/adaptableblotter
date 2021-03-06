import { IReport } from '../../../Strategy/Interface/IExportStrategy';
import * as React from "react";
import { Panel, Col, Radio, ControlLabel } from 'react-bootstrap';
import { AdaptableWizardStep, AdaptableWizardStepProps } from './../../Wizard/Interface/IAdaptableWizard'
//import { AdaptableWizard } from './../../../Wizard/AdaptableWizard'
import { IColumn } from '../../../Core/Interface/IColumn';
import { AdaptablePopover } from '../../AdaptablePopover';
import { ReportColumnScope, PopoverType } from '../../../Core/Enums';
import { AdaptableBlotterForm } from '../../Components/Forms/AdaptableBlotterForm';
import { DualListBoxEditor } from '../../Components/ListBox/DualListBoxEditor';

export interface ReportColumnsWizardProps extends AdaptableWizardStepProps<IReport> {
    Columns: Array<IColumn>
}
export interface ReportColumnsWizardState {
    AllColumnValues: string[];
    SelectedColumnValues: string[];
    ReportColumnScope: ReportColumnScope
}

export class ReportColumnsWizard extends React.Component<ReportColumnsWizardProps, ReportColumnsWizardState> implements AdaptableWizardStep {
    constructor(props: ReportColumnsWizardProps) {
        super(props);
        this.state = {
            AllColumnValues: this.props.Columns.map(c => c.FriendlyName),
            SelectedColumnValues: this.props.Data.Columns.map(c =>
                this.props.Columns.find(col => col.ColumnId == c).FriendlyName),
            ReportColumnScope: this.props.Data.ReportColumnScope
        }
    }
    render() {
        return <div className="adaptable_blotter_style_wizard_export_reportcolumns">
            <Panel header="Select Columns for the Report" bsStyle="primary">
                <Col xs={2} className="medium_margin_style">
                    <ControlLabel>Columns:</ControlLabel>
                </Col>
                <Col xs={2} className="medium_margin_style">
                    <AdaptableBlotterForm inline>
                        <Radio value="All" checked={this.state.ReportColumnScope == ReportColumnScope.AllColumns} onChange={(e) => this.onScopeSelectChanged(e)}>{' '}{' '} All </Radio>
                        {' '} <span className="adaptableblotter_info_button" > <AdaptablePopover  headerText={"Report: All Columns"} bodyText={["All columns in the datasource will be included in the report, whether visible or not at time of export."]} popoverType={PopoverType.Info} /></span>
                    </AdaptableBlotterForm>
                </Col>
                <Col xs={3} className="medium_margin_style">
                    <AdaptableBlotterForm inline>
                        <Radio value="Visible" checked={this.state.ReportColumnScope == ReportColumnScope.VisibleColumns} onChange={(e) => this.onScopeSelectChanged(e)}>{' '}{' '} Visible </Radio>
                        {' '} <span className="adaptableblotter_info_button" > <AdaptablePopover headerText={"Report: Visible Columns"} bodyText={["Only columns that are visible at the time the Report is exported will be included in the Export."]} popoverType={PopoverType.Info} /></span>
                    </AdaptableBlotterForm>
                </Col>
                <Col xs={3} className="medium_margin_style">
                    <AdaptableBlotterForm inline>
                        <Radio value="Bespoke" checked={this.state.ReportColumnScope == ReportColumnScope.BespokeColumns} onChange={(e) => this.onScopeSelectChanged(e)}> {' '}{' '}Bespoke </Radio>
                        {' '} <span className="adaptableblotter_info_button" ><AdaptablePopover headerText={"Report: Bespoke Columns"} bodyText={["Only the columns chosen below will be exported (visible or not)."]} popoverType={PopoverType.Info} /></span>
                    </AdaptableBlotterForm>
                </Col>
            </Panel>
            {this.state.ReportColumnScope == ReportColumnScope.BespokeColumns &&
                <Panel>
                    <DualListBoxEditor AvailableValues={this.state.AllColumnValues}
                        SelectedValues={this.state.SelectedColumnValues}
                        HeaderAvailable="Columns"
                        HeaderSelected="Columns in Report"
                        onChange={(SelectedValues) => this.OnSelectedValuesChange(SelectedValues)}></DualListBoxEditor>
                </Panel>
            }
        </div>
    }



    OnSelectedValuesChange(newValues: Array<string>) {
        this.setState({ SelectedColumnValues: newValues } as ReportColumnsWizardState, () => this.props.UpdateGoBackState())
    }

    private onScopeSelectChanged(event: React.FormEvent<any>) {
        let e = event.target as HTMLInputElement;

        if (e.value == "All") {
            this.setState({ ReportColumnScope: ReportColumnScope.AllColumns, SelectedColumnValues: [] } as ReportColumnsWizardState, () => this.props.UpdateGoBackState())
        } else if (e.value == "Visible") {
            this.setState({ ReportColumnScope: ReportColumnScope.VisibleColumns, SelectedColumnValues: [] } as ReportColumnsWizardState, () => this.props.UpdateGoBackState())
        } else {
            this.setState({ ReportColumnScope: ReportColumnScope.BespokeColumns } as ReportColumnsWizardState, () => this.props.UpdateGoBackState())
        }
    }

    public canNext(): boolean {
        return (this.state.ReportColumnScope == ReportColumnScope.AllColumns ||
            this.state.ReportColumnScope == ReportColumnScope.VisibleColumns ||
            this.state.SelectedColumnValues.length > 0);
    }
    public canBack(): boolean { return true; }
    public Next(): void {
        this.props.Data.ReportColumnScope = this.state.ReportColumnScope;
        this.props.Data.Columns = this.state.SelectedColumnValues.map(c =>
            this.props.Columns.find(col => col.FriendlyName == c).ColumnId)
    }
    public Back(): void {
        //todo
    }
    public StepName = this.props.StepName
}




