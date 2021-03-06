import { LeafExpressionOperator, DataType } from '../Enums'

export interface IRange {
    Operator: LeafExpressionOperator;
    Operand1: string;
    Operand2: string;
    IsOperand1Column: boolean
    IsOperand2Column: boolean
}

export interface IRangeEvaluation {
     operand1: any;
     operand2: any;
     newValue: any;
     operator: LeafExpressionOperator;
     initialValue: any
}
