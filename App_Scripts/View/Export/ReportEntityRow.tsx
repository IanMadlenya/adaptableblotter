import { IReport } from '../../Strategy/Interface/IExportStrategy';
import * as React from "react";
import { DropdownButton, MenuItem, Col } from 'react-bootstrap';
import { EntityListActionButtons } from '../Components/Buttons/EntityListActionButtons';
import { ExportDestination } from '../../Core/Enums';
import { ReportHelper } from '../../Core/Helpers/ReportHelper';
import { OpenfinHelper } from '../../Core/Helpers/OpenfinHelper';
import { ILiveReport } from '../../Strategy/Interface/IExportStrategy';
import { iPushPullHelper } from '../../Core/Helpers/iPushPullHelper';
import { ConfigEntityRowItem } from '../Components/ConfigEntityRowItem';
import { SharedEntityExpressionRowProps } from '../Components/SharedProps/ConfigEntityRowProps';
import { IColItem } from "../UIInterfaces";
import { AdaptableBlotterForm } from '../AdaptableBlotterForm'

export interface ReportEntityRowProps extends SharedEntityExpressionRowProps<ReportEntityRow> {
    IsLast: boolean
    LiveReports: ILiveReport[]
    onExport: (exportDestination: ExportDestination) => void;
    onReportStopLive: (exportDestination: ExportDestination.OpenfinExcel | ExportDestination.iPushPull) => void,
    isDropUp: boolean;
}

export class ReportEntityRow extends React.Component<ReportEntityRowProps, {}> {
    render(): any {
        let report: IReport = this.props.ConfigEntity as IReport;
        let csvMenuItem: any = <MenuItem onClick={() => this.props.onExport(ExportDestination.CSV)} key={"csv"}>{"Export to CSV"}</MenuItem>
        let clipboardMenuItem: any = <MenuItem onClick={() => this.props.onExport(ExportDestination.Clipboard)} key={"clipboard"}> {"Export to Clipboard"}</MenuItem>
        let openfinExcelMenuItem = (this.props.LiveReports.find(x => x.Report == report.Name)) ?
            <MenuItem onClick={() => this.props.onReportStopLive(ExportDestination.OpenfinExcel)} key={"OpenfinExcel"}> {"Stop Live Openfin Excel"}</MenuItem>
            : <MenuItem onClick={() => this.props.onExport(ExportDestination.OpenfinExcel)} key={"OpenfinExcel"}> {"Start Live Openfin Excel"}</MenuItem>

        let iPushPullExcelMenuItem = (this.props.LiveReports.find(x => x.Report == report.Name && x.ExportDestination == ExportDestination.iPushPull)) ?
            <MenuItem onClick={() => this.props.onReportStopLive(ExportDestination.iPushPull)} key={"IPPExcel"}> {"Stop Sync with iPushPull"}</MenuItem>
            : <MenuItem onClick={() => this.props.onExport(ExportDestination.iPushPull)} key={"IPPExcel"}> {"Start Sync with iPushPull"}</MenuItem>

        // let hasLive = this.props.LiveReports.find(x => x.Report == report.Name && x.ExportDestination == ExportDestination.iPushPull) != null

        let colItems: IColItem[] = [].concat(this.props.ColItems);

        colItems[0].Content = report.Name
        colItems[1].Content = ReportHelper.GetReportColumnsDescription(report, this.props.Columns)
        colItems[2].Content = ReportHelper.GetReportExpressionDescription(report, this.props.Columns, this.props.UserFilters)

        let exportButton = <DropdownButton dropup={this.props.isDropUp}
            bsSize={"small"}
            bsStyle={"default"}
            title={"Export"}
            key={report.Name}
            id={report.Name}                >
            {csvMenuItem}
            {clipboardMenuItem}
            {OpenfinHelper.isRunningInOpenfin() && OpenfinHelper.isExcelOpenfinLoaded() && openfinExcelMenuItem}
            {iPushPullHelper.isIPushPullLoaded() && iPushPullExcelMenuItem}
        </DropdownButton>

        colItems[3].Content = exportButton

        let buttons: any = <EntityListActionButtons
            ConfirmDeleteAction={this.props.onDeleteConfirm}
            editClick={() => this.props.onEdit(this.props.Index, report)}
            showShare={this.props.TeamSharingActivated}
            shareClick={() => this.props.onShare()}
            ConfigEntity={report}
            EntityName="Report" />

        colItems[4].Content = buttons

        return <ConfigEntityRowItem ColItems={colItems} />
    }
}
