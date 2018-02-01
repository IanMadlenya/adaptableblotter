import { IRangeExpression } from './Interface/IExpression';

export class Expression {
    constructor(
        public ColumnDisplayValuesExpressions: Array<{ ColumnName: string, ColumnValues: Array<string> }>,
        public ColumnRawValuesExpressions: Array<{ ColumnName: string, ColumnValues: Array<any> }>,
        public UserFilters: Array<{ ColumnName: string, UserFilterUids: Array<string> }>,
        public RangeExpressions: Array<{ ColumnName: string, Ranges: Array<IRangeExpression> }>) {
    }
}


