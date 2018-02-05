import { IShortcut } from '../../../Strategy/Interface/IShortcutStrategy';
/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import { Radio, Panel,  Col } from 'react-bootstrap';
import { AdaptableWizardStep, AdaptableWizardStepProps } from './../../Wizard/Interface/IAdaptableWizard'
import { DataType } from '../../../Core/Enums';
import { AdaptableBlotterForm } from '../../AdaptableBlotterForm'

export interface ShortcutTypeWizardProps extends AdaptableWizardStepProps<IShortcut> {
}
export interface ShortcutTypeWizardState {
    DataType: DataType;

}

export class ShortcutTypeWizard extends React.Component<ShortcutTypeWizardProps, ShortcutTypeWizardState> implements AdaptableWizardStep {

    constructor(props: ShortcutTypeWizardProps) {
        super(props);
        this.state = {
            DataType: this.props.Data.DataType,
        }
    }

    render() {

        return <Panel header="Select Where Shortcut is Applied" bsStyle="primary">

            <AdaptableBlotterForm inline>
                <Col xs={12} style={radioMarginStyle}>
                    <Radio inline value="Number" checked={this.state.DataType == DataType.Number} onChange={(e) => this.onColumTypeChanged(e)}>Numeric Columns</Radio>
                </Col>
                <Col xs={12} style={radioMarginStyle}>
                    <Radio inline value="Date" checked={this.state.DataType == DataType.Date} onChange={(e) => this.onColumTypeChanged(e)}>Date Columns</Radio>
                </Col>
                <Col xs={12} style={radioMarginStyle}>
                </Col>
            </AdaptableBlotterForm>
        </Panel>
    }

    private onColumTypeChanged(event: React.FormEvent<any>) {
        let e = event.target as HTMLInputElement;
        if (e.value == "Number") {
            this.setState({ DataType: DataType.Number } as ShortcutTypeWizardState, () => this.props.UpdateGoBackState())
        } else {
            this.setState({ DataType: DataType.Date } as ShortcutTypeWizardState, () => this.props.UpdateGoBackState())
        }
    }

    public canNext(): boolean {
        return this.state.DataType != null
    }
    public canBack(): boolean { return true; }
    public Next(): void {
        this.props.Data.DataType = this.state.DataType;
    }
    public Back(): void { /* no implementation */ }
    public StepName = this.props.StepName
}



let radioMarginStyle = {
    margin: '5px'
}
