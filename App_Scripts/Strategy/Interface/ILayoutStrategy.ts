import { IStrategy } from './IStrategy';
import { IAdaptableBlotterObject } from '../../Core/Interface/Interfaces';

export interface ILayoutStrategy extends IStrategy {
    CurrentLayout: string;
}


export interface ILayout extends IAdaptableBlotterObject{
    Name: string;
    Columns: string[];
}



