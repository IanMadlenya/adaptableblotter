import * as React from "react";
/// <reference path="../../typings/.d.ts" />
import { IStyle } from '../../Core/Interface/IStyle';
import { EnumExtensions } from '../../Core/Extensions/EnumExtensions';
import { FontWeight, FontStyle, CellValidationMode, PopoverType } from '../../Core/Enums';
import { AdaptablePopover } from "../AdaptablePopover";
import { IPreviewResult, IPreviewInfo } from "../../Core/Interface/IPreviewResult";
import { Glyphicon, Panel, Table } from "react-bootstrap";
import { ICellValidationRule } from "../../Strategy/Interface/ICellValidationStrategy";
import { ExpressionHelper } from "../../Core/Helpers/ExpressionHelper";
import { IColumn } from "../../Core/Interface/IColumn";
import { IUserFilter } from "../../Strategy/Interface/IUserFilterStrategy";
import { StringExtensions } from "../../Core/Extensions/StringExtensions";

export interface PreviewResultsPanelProps extends React.ClassAttributes<PreviewResultsPanel> {
    UpdateValue: string;
    PreviewInfo: IPreviewInfo;
    Columns: IColumn[];
    UserFilters: IUserFilter[];
    SelectedColumn: IColumn;
    ShowPanel: boolean
}

export class PreviewResultsPanel extends React.Component<PreviewResultsPanelProps, {}> {
    render(): any {
        let previewHeader: string = this.props.PreviewInfo != null ? "Preview Results: " + (this.props.SelectedColumn ? this.props.SelectedColumn.FriendlyName : "") : "";


        var previewItems = this.props.PreviewInfo.PreviewResults.map((previewResult: IPreviewResult) => {

            return <tr key={previewResult.Id}>
                <td>{previewResult.InitialValue}</td>
                <td>{previewResult.ComputedValue}</td>
                {previewResult.ValidationRules.length > 0 ?
                    <td>
                        {this.props.PreviewInfo.PreviewValidationSummary.HasValidationPrevent == true &&
                            <AdaptablePopover headerText={"Validation Error"} bodyText={[this.getValidationErrorMessage(previewResult.ValidationRules)]} popoverType={PopoverType.Error} />
                        }
                        {this.props.PreviewInfo.PreviewValidationSummary.HasValidationWarning == true &&
                            <AdaptablePopover headerText={"Validation Error"} bodyText={[this.getValidationErrorMessage(previewResult.ValidationRules)]} popoverType={PopoverType.Warning} />
                        }
                    </td>
                    :
                    <td> <Glyphicon glyph="ok" /> </td>
                }
            </tr>
        });
        var header = <thead>
            <tr>
                <th>Initial Value</th>
                <th>New Value</th>
                <th>Is Valid Edit</th>
            </tr>
        </thead>

        return <div className="adaptable_blotter_style_previewresults">
            {this.props.ShowPanel &&
                <Panel header={previewHeader} bsStyle="info" className="preview_panel">
                    <Table >
                        {header}
                        <tbody>
                            {previewItems}
                        </tbody>
                    </Table>
                </Panel>
            }
        </div>
    }

    private getValidationErrorMessage(CellValidations: ICellValidationRule[]): string {
        let returnString: string[] = []
        for (let CellValidation of CellValidations) {
            let expressionDescription: string = (CellValidation.HasExpression) ?
                " when " + ExpressionHelper.ConvertExpressionToString(CellValidation.OtherExpression, this.props.Columns, this.props.UserFilters) :
                "";
            returnString.push(CellValidation.Description + expressionDescription)
        }
        return returnString.join("\n");
    }

}


