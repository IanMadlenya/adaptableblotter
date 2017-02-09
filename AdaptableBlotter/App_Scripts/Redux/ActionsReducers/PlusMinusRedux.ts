/// <reference path="../../../typings/index.d.ts" />

import { PlusMinusState } from './Interface/IState';
import { IPlusMinusCondition } from '../../Core/interface/IPlusMinusStrategy';
import { Expression } from '../../Core/Expression/Expression';
import { ICellInfo } from '../../Core/Interface/IStrategy';

export const PLUSMINUS_APPLY = 'PLUSMINUS_APPLY';
export const PLUSMINUS_SET_DEFAULT_NUDGE = 'PLUSMINUS_SET_DEFAULT_NUDGE';
export const PLUSMINUS_ADD_OR_UPDATE_COLUMNS_DEFAULT_NUDGE = 'PLUSMINUS_ADD_OR_UPDATE_COLUMNS_DEFAULT_NUDGE';
export const PLUSMINUS_EDIT_COLUMNS_DEFAULT_NUDGE = 'PLUSMINUS_EDIT_COLUMNS_DEFAULT_NUDGE';
export const PLUSMINUS_DELETE_COLUMNS_DEFAULT_NUDGE = 'PLUSMINUS_DELETE_COLUMNS_DEFAULT_NUDGE';

export interface PlusMinusApplyAction extends Redux.Action {
    CellInfos: ICellInfo[],
    KeyEventString: string,
}

export interface PlusMinusSetDefaultNudgeAction extends Redux.Action {
    value: number
}


export interface PlusMinusSetColumnsDefaultNudgeAction extends Redux.Action {
    ColumnsDefaultNudge: { ColumnId: string, DefaultNudge: number }[]
}

export interface PlusMinusAddOrUpdateColumnsDefaultNudgeAction extends Redux.Action {
    Index: number,
    PlusMinusCondition: IPlusMinusCondition
}

export interface PlusMinusEditColumnsDefaultNudgeAction extends Redux.Action {
    Index: number,
    ColumnDefaultNudge: { ColumnId: string, DefaultNudge: number }
}

export interface PlusMinusDeleteColumnsDefaultNudgeAction extends Redux.Action {
    Index: number
}

export const ApplyPlusMinus = (CellInfos: ICellInfo[], KeyEventString: string): PlusMinusApplyAction => ({
    type: PLUSMINUS_APPLY,
    CellInfos,
    KeyEventString,
})

export const PlusMinusSetDefaultNudge = (value: number): PlusMinusSetDefaultNudgeAction => ({
    type: PLUSMINUS_SET_DEFAULT_NUDGE,
    value
})

export const PlusMinusAddOrUpdateColumnsDefaultNudge = (Index: number, PlusMinusCondition: IPlusMinusCondition): PlusMinusAddOrUpdateColumnsDefaultNudgeAction => ({
    type: PLUSMINUS_ADD_OR_UPDATE_COLUMNS_DEFAULT_NUDGE,
    Index,
    PlusMinusCondition
})

export const PlusMinusEditColumnsDefaultNudge = (Index: number, ColumnDefaultNudge: { ColumnId: string, DefaultNudge: number }): PlusMinusEditColumnsDefaultNudgeAction => ({
    type: PLUSMINUS_EDIT_COLUMNS_DEFAULT_NUDGE,
    Index,
    ColumnDefaultNudge
})

export const PlusMinusDeleteColumnsDefaultNudge = (Index: number): PlusMinusDeleteColumnsDefaultNudgeAction => ({
    type: PLUSMINUS_DELETE_COLUMNS_DEFAULT_NUDGE,
    Index
})

const initialPlusMinusState: PlusMinusState = {
    DefaultNudge: 1,
    PlusMinusConditions: []
}

export const PlusMinusReducer: Redux.Reducer<PlusMinusState> = (state: PlusMinusState = initialPlusMinusState, action: Redux.Action): PlusMinusState => {
    switch (action.type) {
        case PLUSMINUS_APPLY:
            //we apply logic in the middleware since it's an API call
            return Object.assign({}, state)

        case PLUSMINUS_SET_DEFAULT_NUDGE:
            return Object.assign({}, state, { DefaultNudge: (<PlusMinusSetDefaultNudgeAction>action).value })

        case PLUSMINUS_ADD_OR_UPDATE_COLUMNS_DEFAULT_NUDGE: {
            let actionTyped = (<PlusMinusAddOrUpdateColumnsDefaultNudgeAction>action)
            let newCol: IPlusMinusCondition[] = [].concat(state.PlusMinusConditions)
            if (actionTyped.Index == -1) {
                newCol.push(actionTyped.PlusMinusCondition)
            }
            else {
                newCol[actionTyped.Index] = actionTyped.PlusMinusCondition
            }
            return Object.assign({}, state, { PlusMinusConditions: newCol })
        }

        case PLUSMINUS_EDIT_COLUMNS_DEFAULT_NUDGE: {
            let newCol: IPlusMinusCondition[] = [].concat(state.PlusMinusConditions)
            let actionTyped = (<PlusMinusEditColumnsDefaultNudgeAction>action)
            let oldCondition = newCol[actionTyped.Index]
            newCol[actionTyped.Index] = Object.assign({}, oldCondition, { ColumnId: actionTyped.ColumnDefaultNudge.ColumnId, DefaultNudge: actionTyped.ColumnDefaultNudge.DefaultNudge })
            return Object.assign({}, state, { PlusMinusConditions: newCol })
        }

        case PLUSMINUS_DELETE_COLUMNS_DEFAULT_NUDGE: {
            let newCol: IPlusMinusCondition[] = [].concat(state.PlusMinusConditions)
            newCol.splice((<PlusMinusDeleteColumnsDefaultNudgeAction>action).Index, 1)
            return Object.assign({}, state, { PlusMinusConditions: newCol })
        }
        default:
            return state
    }
}