import * as AdaptableBlotterStates from '../../ActionsReducers/Interface/IState';
import * as Redux from 'redux';

export interface AdaptableBlotterState {
    Popup: AdaptableBlotterStates.PopupState;
    Menu: AdaptableBlotterStates.MenuState;
    SmartEdit: AdaptableBlotterStates.SmartEditState;
    BulkUpdate: AdaptableBlotterStates.BulkUpdateState;
    CustomSort: AdaptableBlotterStates.CustomSortState;
    Shortcut: AdaptableBlotterStates.ShortcutState;
    Grid: AdaptableBlotterStates.GridState;
    PlusMinus: AdaptableBlotterStates.PlusMinusState;
    ConditionalStyle: AdaptableBlotterStates.ConditionalStyleState;
    Export: AdaptableBlotterStates.ExportState;
    FlashingCell: AdaptableBlotterStates.FlashingCellState;
    Calendars: AdaptableBlotterStates.CalendarState;
    QuickSearch: AdaptableBlotterStates.QuickSearchState;
    AdvancedSearch: AdaptableBlotterStates.AdvancedSearchState;
    ColumnFilter: AdaptableBlotterStates.ColumnFilterState;
    UserFilter: AdaptableBlotterStates.UserFilterState;
    Theme: AdaptableBlotterStates.ThemeState;
    CellValidation: AdaptableBlotterStates.CellValidationState;
    Layout: AdaptableBlotterStates.LayoutState;
    Dashboard: AdaptableBlotterStates.DashboardState;
    Entitlements: AdaptableBlotterStates.EntitlementsState;
    CalculatedColumn: AdaptableBlotterStates.CalculatedColumnState;
    UIControlConfig: AdaptableBlotterStates.UIControlConfigState;
    TeamSharing: AdaptableBlotterStates.TeamSharingState;
    FormatColumn: AdaptableBlotterStates.FormatColumnState;
}

export interface IAdaptableBlotterStore {
    TheStore: Redux.Store<AdaptableBlotterState>
    Load: PromiseLike<any>
}
