import { IShortcut } from '../../../Strategy/Interface/IShortcutStrategy';
import * as React from "react";
import { AdaptableWizard } from './../../Wizard/AdaptableWizard'
import { ShortcutSettingsWizard } from './ShortcutSettingsWizard'
import { ShortcutTypeWizard } from './ShortcutTypeWizard'
import * as StrategyNames from '../../../Core/Constants/StrategyNames'

export interface ShortcutWizardProps extends React.ClassAttributes<ShortcutWizard> {
    EditedShortcut: IShortcut
    NumericKeysAvailable: Array<string>
    DateKeysAvailable: Array<string>
    WizardStartIndex: number
    closeWizard: () => void
    onFinishWizard: () => void
}

export class ShortcutWizard extends React.Component<ShortcutWizardProps, {}> {

    render() {
        let stepNames: string[] = ["Column Type", "Settings"]

        return <div className="adaptable_blotter_style_wizard_shortcut">
            <AdaptableWizard
                FriendlyName={StrategyNames.ShortcutStrategyName}
                StepNames={stepNames}
                Steps={[
                    <ShortcutTypeWizard StepName={stepNames[0]} />,
                    <ShortcutSettingsWizard StepName={stepNames[1]} NumericKeysAvailable={this.props.NumericKeysAvailable} DateKeysAvailable={this.props.DateKeysAvailable} />,
                ]}
                Data={this.props.EditedShortcut}
                StepStartIndex={this.props.WizardStartIndex}
                onHide={() => this.props.closeWizard()}
                onFinish={() => this.props.onFinishWizard()} />
        </div>
    }

}
