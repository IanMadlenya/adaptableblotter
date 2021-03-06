import { ICalculatedColumn } from '../../../Strategy/Interface/ICalculatedColumnStrategy';
import * as React from "react";
import { IColumn } from '../../../Core/Interface/IColumn';
import { AdaptableWizard } from './../../Wizard/AdaptableWizard'
import { CalculatedColumnExpressionWizard } from './CalculatedColumnExpressionWizard'
import { CalculatedColumnSettingsWizard } from './CalculatedColumnSettingsWizard'
import * as StrategyNames from '../../../Core/Constants/StrategyNames'

export interface CalculatedColumnWizardProps extends React.ClassAttributes<CalculatedColumnWizard> {
    EditedCalculatedColumn: ICalculatedColumn
    Columns: Array<IColumn>
    IsExpressionValid: (expression: string) => void
    GetErrorMessage: () => string
    WizardStartIndex: number
    closeWizard: () => void
    onFinishWizard: () => void
}

export class CalculatedColumnWizard extends React.Component<CalculatedColumnWizardProps, {}> {

    render() {
        let stepNames: string[] = ["Create Column", "Write Expression"]
        return <div className="adaptable_blotter_style_wizard_calculatedcolumn">
            <AdaptableWizard
                FriendlyName={StrategyNames.CalculatedColumnStrategyName}
                StepNames={stepNames}
                Steps={[
                    <CalculatedColumnSettingsWizard StepName={stepNames[0]} Columns={this.props.Columns} />,
                    <CalculatedColumnExpressionWizard StepName={stepNames[1]}
                        GetErrorMessage={this.props.GetErrorMessage}
                        IsExpressionValid={this.props.IsExpressionValid} />,
                ]}
                Data={this.props.EditedCalculatedColumn}
                StepStartIndex={this.props.WizardStartIndex}
                onHide={() => this.props.closeWizard()}
                onFinish={() => this.props.onFinishWizard()} />
        </div>
    }

}

