import * as React from "react";
import { ListGroup, ListGroupItem, Panel, FormGroup, Col, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { AdaptableWizardStep, AdaptableWizardStepProps } from './../../Wizard/Interface/IAdaptableWizard'
import { AdaptableWizard } from './../../Wizard/AdaptableWizard'
import { IColumn } from '../../../Core/Interface/IAdaptableBlotter';
import { SelectionMode } from '../../../Core/Enums';
import { StringExtensions } from '../../../Core/Extensions';
import { ColumnSelector } from '../../ColumnSelector';
import { ICalculatedColumn } from "../../../Strategy/Interface/ICalculatedColumnStrategy";
import { AdaptableBlotterForm } from "../../AdaptableBlotterForm";

export interface CalculatedColumnExpressionWizardProps extends AdaptableWizardStepProps<ICalculatedColumn> {
    IsExpressionValid: (expression: string) => void
    GetErrorMessage: () => string
}
export interface CalculatedColumnExpressionWizardState {
    GetValueFunc: string
}

export class CalculatedColumnExpressionWizard extends React.Component<CalculatedColumnExpressionWizardProps, CalculatedColumnExpressionWizardState> implements AdaptableWizardStep {
    constructor(props: CalculatedColumnExpressionWizardProps) {
        super(props);
        this.state = { GetValueFunc: this.props.Data.GetValueFunc }
    }
    render(): any {
        let validationState : "error"|null = StringExtensions.IsNullOrEmpty(this.props.GetErrorMessage()) ? null : "error"
        return <Panel header="Calculated Column Expression" bsStyle="primary">
            <AdaptableBlotterForm>
                <FormGroup controlId="formInlineName" validationState={validationState}>
                    <FormControl value={this.state.GetValueFunc} componentClass="textarea" placeholder="Enter expression" onChange={(e) => this.handleExpressionChange(e)} />
                    <FormControl.Feedback />
                    <HelpBlock>{this.props.GetErrorMessage()}</HelpBlock>
                </FormGroup>
            </AdaptableBlotterForm>
        </Panel>
    }

    handleExpressionChange(event: React.FormEvent<any>) {
        let e = event.target as HTMLInputElement;
        this.props.IsExpressionValid(e.value)
        this.setState({ GetValueFunc: e.value }, () => this.props.UpdateGoBackState())
    }

    public canNext(): boolean {
        return StringExtensions.IsNotNullOrEmpty(this.state.GetValueFunc)
            && StringExtensions.IsNullOrEmpty(this.props.GetErrorMessage());
    }
    public canBack(): boolean { return true; }
    public Next(): void { this.props.Data.GetValueFunc = this.state.GetValueFunc }
    public Back(): void { }
    public StepName = "Calculated Column Expression"
}