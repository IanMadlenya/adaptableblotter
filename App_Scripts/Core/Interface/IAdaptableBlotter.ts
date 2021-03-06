import { DataType, DistinctCriteriaPairValue } from '../Enums'
import {  IStrategy } from '../../Strategy/Interface/IStrategy'
import {  ICellInfo, IAdaptableStrategyCollection, ISelectedCells } from '../../Core/Interface/Interfaces'
import { IAdaptableBlotterStore } from '../../Redux/Store/Interface/IAdaptableStore'
import { IEvent } from './IEvent'
import { ICalendarService } from '../Services/Interface/ICalendarService'
import { IAuditService } from '../Services/Interface/IAuditService'
import {  IValidationService} from '../Services/Interface/IValidationService'
import { ICalculatedColumn } from '../../Strategy/Interface/ICalculatedColumnStrategy'
import { IPPStyle } from '../../Strategy/Interface/IExportStrategy'
import { AuditLogService } from '../Services/AuditLogService'
import { ICalculatedColumnExpressionService } from "../Services/Interface/ICalculatedColumnExpressionService";
import { IRawValueDisplayValuePair } from '../../View/UIInterfaces';
import { IAdaptableBlotterOptions } from './IAdaptableBlotterOptions';
import { IColumn } from './IColumn';

export interface IAdaptableBlotter {
    GridName: string
    AdaptableBlotterStore: IAdaptableBlotterStore;
    BlotterOptions: IAdaptableBlotterOptions
    Strategies: IAdaptableStrategyCollection

    // Services
    CalendarService: ICalendarService
    AuditService: IAuditService
    ValidationService: IValidationService
    AuditLogService: AuditLogService
    CalculatedColumnExpressionService: ICalculatedColumnExpressionService
    InitAuditService(): void

    // Grid Events
    onKeyDown(): IEvent<IAdaptableBlotter, JQueryKeyEventObject | KeyboardEvent>;
    onSelectedCellsChanged(): IEvent<IAdaptableBlotter, IAdaptableBlotter>;
    onRefresh(): IEvent<IAdaptableBlotter, IAdaptableBlotter>;
    onGridDataBound(): IEvent<IAdaptableBlotter, IAdaptableBlotter>; // needed to respond to grid databound which gets called every time we do an edit :()

    // General
    createMenu(): void
    getPrimaryKeyValueFromRecord(record: any): any
    hideFilterForm(): void

    // cell selection
    getSelectedCells(): ISelectedCells
    getActiveCell(): ICellInfo
    selectCells(cells: ICellInfo[]): void


    // column related
    getColumnIndex(columnName: string): number
    setColumnIntoStore(): void
    getColumnValueDisplayValuePairDistinctList(columnId: string, distinctCriteria: DistinctCriteriaPairValue): Array<IRawValueDisplayValuePair>
    getDisplayValue(id: any, columnId: string): string
    getDisplayValueFromRecord(row: any, columnId: string): string
    isColumnReadonly(columnId: string): boolean
    getRecordIsSatisfiedFunction(id: any, type: "getColumnValue" | "getDisplayColumnValue"): (columnName: string) => any
    getRecordIsSatisfiedFunctionFromRecord(record: any, type: "getColumnValue" | "getDisplayColumnValue"): (columnName: string) => any
    setNewColumnListOrder(VisibleColumnList: Array<IColumn>): void


    // editing related
    setValue(cellInfo: ICellInfo): void
    setValueBatch(batchValues: ICellInfo[]): void
    cancelEdit(): any
    gridHasCurrentEditValue(): boolean
    getCurrentCellEditValue(): any

    // Row Methods
    forAllRecordsDo(func: (record: any) => any): void;
    forAllVisibleRecordsDo(func: (record: any) => any): void;

    // Custom Sort
    setCustomSort(columnId: string, comparer: Function): void
    removeCustomSort(columnId: string): void

    //CalculatedColumn
    deleteCalculatedColumn(calculatedColumnId: string): void
    createCalculatedColumn(calculatedColumn: ICalculatedColumn): void
    getFirstRecord(): any

    // Filtering
    applyColumnFilters(): void
    //TEMPORARY : JO
    getIPPStyle(): IPPStyle

    // info
    getRowInfo(): any
    getColumnInfo(): any
}

