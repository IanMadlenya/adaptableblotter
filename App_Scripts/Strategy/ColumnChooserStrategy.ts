import { MenuItemDoReduxAction } from '../Core/MenuItem'
import { AdaptableStrategyBase } from './AdaptableStrategyBase'
import * as StrategyIds from '../Core/Constants/StrategyIds'
import * as StrategyNames from '../Core/Constants/StrategyNames'
import * as StrategyGlyphs from '../Core/Constants/StrategyGlyphs'
import * as ScreenPopups from '../Core/Constants/ScreenPopups'
import { IAdaptableBlotter } from '../Core/Interface/IAdaptableBlotter'
import { IColumnChooserStrategy } from '../Strategy/Interface/IColumnChooserStrategy'
import * as MenuRedux from '../Redux/ActionsReducers/MenuRedux'
import * as GridRedux from '../Redux/ActionsReducers/GridRedux'

export class ColumnChooserStrategy extends AdaptableStrategyBase implements IColumnChooserStrategy {
    constructor(blotter: IAdaptableBlotter) {
        super(StrategyIds.ColumnChooserStrategyId, blotter)
        }

    protected addPopupMenuItem() {
        this.createMenuItemShowPopup(StrategyNames.ColumnChooserStrategyName, ScreenPopups.ColumnChooserPopup, StrategyGlyphs.ColumnChooserGlyph);
    }

    protected addColumnMenuItem(columnId: string): void {
        if (!this.isReadOnlyStrategy()) {
            this.createMenuItemReduxAction(
                "Hide Column",
                StrategyGlyphs.ColumnChooserGlyph,
                GridRedux.GridHideColumn(columnId))
        }
    }
}
