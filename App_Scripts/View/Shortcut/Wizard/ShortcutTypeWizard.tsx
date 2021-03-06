import { IShortcut } from '../../../Strategy/Interface/IShortcutStrategy';
/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import { Radio, Panel, Col } from 'react-bootstrap';
import { AdaptableWizardStep, AdaptableWizardStepProps } from './../../Wizard/Interface/IAdaptableWizard'
import { DataType } from '../../../Core/Enums';
import { AdaptableBlotterForm } from '../../Components/Forms/AdaptableBlotterForm';

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

        return <div className="adaptable_blotter_style_wizard_shortcut_type">
            <Panel header="Select Where Shortcut is Applied" bsStyle="primary">

                <AdaptableBlotterForm inline>
                    <Col xs={12} className="medium_margin_style">
                        <Radio inline value="Number" checked={this.state.DataType == DataType.Number} onChange={(e) => this.onColumTypeChanged(e)}>Numeric Columns</Radio>
                    </Col>
                    <Col xs={12} className="medium_margin_style">
                        <Radio inline value="Date" checked={this.state.DataType == DataType.Date} onChange={(e) => this.onColumTypeChanged(e)}>Date Columns</Radio>
                    </Col>
                    <Col xs={12} className="medium_margin_style">
                    </Col>
                </AdaptableBlotterForm>
            </Panel>
        </div>
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

