import { AdaptableBlotter } from './AdaptableBlotter'
import { DataSourceIndexed } from './DataSourceIndexed'
import { IAdvancedSearch } from '../../Strategy/Interface/IAdvancedSearchStrategy';
import { StringExtensions } from '../../Core/Extensions/StringExtensions'
import { ExpressionHelper } from '../../Core/Helpers/ExpressionHelper';
import { IColumnFilter } from '../../Strategy/Interface/IColumnFilterStrategy';
import { LeafExpressionOperator, QuickSearchDisplayType } from '../../Core/Enums'

//All custom pipelines should extend from pipelineBase
export let FilterAndSearchDataSource = (blotter: AdaptableBlotter) => DataSourceIndexed.extend('FilterAndSearchDataSource', {
    blotter: blotter,
    apply: function () {
        this.clearColorQuickSearch();
        let currentSearchName = blotter.AdaptableBlotterStore.TheStore.getState().AdvancedSearch.CurrentAdvancedSearch
        let columnFilters: IColumnFilter[] = blotter.AdaptableBlotterStore.TheStore.getState().ColumnFilter.ColumnFilters;
        if (StringExtensions.IsNotNullOrEmpty(currentSearchName)
            || columnFilters.length > 0
            || StringExtensions.IsNotNullOrEmpty(blotter.AdaptableBlotterStore.TheStore.getState().QuickSearch.QuickSearchText)) {
            this.buildIndex(this.filterTest);
            this.colorQuickSearch();
        } else {
            this.clearIndex();
        }
    },
    filterTest: function (r: any, rowObject: any) {
        let columns = blotter.AdaptableBlotterStore.TheStore.getState().Grid.Columns
        if(columns.length == 0)
        {
            return true;
        }

        //first we assess AdvancedSearch 
        let currentSearchName = blotter.AdaptableBlotterStore.TheStore.getState().AdvancedSearch.CurrentAdvancedSearch
        if (StringExtensions.IsNotNullOrEmpty(currentSearchName)) {
            let currentSearch: IAdvancedSearch = blotter.AdaptableBlotterStore.TheStore.getState().AdvancedSearch.AdvancedSearches.find(s => s.Name == currentSearchName);
            if (!ExpressionHelper.checkForExpressionFromRecord(currentSearch.Expression, rowObject, columns, blotter)) {
                return false;
            }
        }

        //we then assess filters
        let columnFilters: IColumnFilter[] = blotter.AdaptableBlotterStore.TheStore.getState().ColumnFilter.ColumnFilters;
        if (columnFilters.length > 0) {
            for (let columnFilter of columnFilters) {
                if (!ExpressionHelper.checkForExpressionFromRecord(columnFilter.Filter, rowObject, columns, blotter)) {
                    return false
                }
            }
        }

        //we assess quicksearch
        if (StringExtensions.IsNotNullOrEmpty(blotter.AdaptableBlotterStore.TheStore.getState().QuickSearch.QuickSearchText)) {
            let quickSearchState = blotter.AdaptableBlotterStore.TheStore.getState().QuickSearch
            let quickSearchLowerCase = quickSearchState.QuickSearchText.toLowerCase()

            let recordReturnValue = false
            for (let column of columns.filter(c => c.Visible)) {
                let displayValue = blotter.getDisplayValueFromRecord(rowObject, column.ColumnId)
                let rowId = blotter.getPrimaryKeyValueFromRecord(rowObject)
                let stringValueLowerCase = displayValue.toLowerCase()
                switch (blotter.AdaptableBlotterStore.TheStore.getState().QuickSearch.QuickSearchOperator) {
                    case LeafExpressionOperator.Contains:
                        {
                            if (stringValueLowerCase.includes(quickSearchLowerCase)) {
                                //if we need to color cell then add it to the collection otherwise we add undefined so we clear previous properties
                                if (quickSearchState.QuickSearchDisplayType == QuickSearchDisplayType.HighlightCell
                                    || quickSearchState.QuickSearchDisplayType == QuickSearchDisplayType.ShowRowAndHighlightCell) {
                                    this.quickSearchColor.push({ rowID: rowId, columnId: column.ColumnId, style: { quickSearchStyle: quickSearchState.QuickSearchStyle } })
                                }
                                //if we need to display only the rows that matched the quicksearch and no coloring then we can return
                                if (quickSearchState.QuickSearchDisplayType == QuickSearchDisplayType.ShowRow) {
                                    return true;
                                }
                                recordReturnValue = true
                            }
                        }
                        break;
                    case LeafExpressionOperator.StartsWith:
                        {
                            if (stringValueLowerCase.startsWith(quickSearchLowerCase)) {
                                //if we need to color cell then add it to the collection otherwise we add undefined so we clear previous properties
                                if (quickSearchState.QuickSearchDisplayType == QuickSearchDisplayType.HighlightCell
                                    || quickSearchState.QuickSearchDisplayType == QuickSearchDisplayType.ShowRowAndHighlightCell) {
                                    this.quickSearchColor.push({ rowID: rowId, columnId: column.ColumnId, style: { quickSearchStyle: quickSearchState.QuickSearchStyle } })
                                }
                                //if we need to display only the rows that matched the quicksearch and no coloring then we can return
                                if (quickSearchState.QuickSearchDisplayType == QuickSearchDisplayType.ShowRow) {
                                    return true;
                                }
                                recordReturnValue = true
                            }
                        }
                        break;
                }
            }
            //if we color only then we just return true....
            if (quickSearchState.QuickSearchDisplayType == QuickSearchDisplayType.HighlightCell) {
                return true;
            }
            return recordReturnValue
        }
        return true;
    },
    getRowCount: function () {
        let currentSearchName = blotter.AdaptableBlotterStore.TheStore.getState().AdvancedSearch.CurrentAdvancedSearch
        let columnFilters: IColumnFilter[] = blotter.AdaptableBlotterStore.TheStore.getState().ColumnFilter.ColumnFilters;
        if (StringExtensions.IsNotNullOrEmpty(currentSearchName)
            || columnFilters.length > 0
            || StringExtensions.IsNotNullOrEmpty(blotter.AdaptableBlotterStore.TheStore.getState().QuickSearch.QuickSearchText)) {
            return this.index.length;
        }
        else {
            return this.dataSource.getRowCount()
        }
    },
    colorQuickSearch: function () {
        for (let record of this.quickSearchColor) {
            blotter.addCellStyleHypergrid(record.rowID, record.columnId, record.style)
        }
    },
    clearColorQuickSearch: function () {
        if (this.quickSearchColor) {
            blotter.removeAllCellStyleHypergrid("QuickSearch")
        }
        this.quickSearchColor = [];
    }
});