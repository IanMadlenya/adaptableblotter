import { FlashingCellsStrategy } from './FlashingCellsStrategy'
import { IFlashingCellsStrategy, IFlashingColumn } from '../Strategy/Interface/IFlashingCellsStrategy'
import { IDataChangedEvent } from '../Core/Services/Interface/IAuditService'
import { AdaptableBlotter } from '../Vendors/Kendo/AdaptableBlotter';
import * as StyleConstants from '../Core/Constants/StyleConstants'

export class FlashingCellsKendoStrategy extends FlashingCellsStrategy implements IFlashingCellsStrategy {
    constructor(blotter: AdaptableBlotter) {
        super(blotter)
    }

    protected FlashCell(dataChangedEvent: IDataChangedEvent, flashingColumn: IFlashingColumn, index: number): void {
        let theBlotter = this.blotter as AdaptableBlotter
        if (dataChangedEvent.OldValue == null) { return; }
        var oldvalueNumber: Number = Number(dataChangedEvent.OldValue);
        var newValueNumber: Number = Number(dataChangedEvent.NewValue);

        var cellStyle: string = (oldvalueNumber > newValueNumber) ? StyleConstants.FLASH_DOWN_STYLE : StyleConstants.FLASH_UP_STYLE
        let columnIndex = this.blotter.getColumnIndex(dataChangedEvent.ColumnId);
        //Jo : we know that this function is wrong as it's not cumulative
        theBlotter.addCellStyle(dataChangedEvent.IdentifierValue, columnIndex, cellStyle + index, flashingColumn.FlashingCellDuration)
    }
}