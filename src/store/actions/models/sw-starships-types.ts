import { Starship } from '../../../global-models';
import { Action } from 'redux';

export interface GetStarships extends Action {
    type: string
}

export interface GetStarshipsSuccess extends Action {
    type: string;
    starships: Starship[];
}

export interface GetStarshipsFail extends Action {
    type: string;
}

export type StarshipAction = GetStarshipsSuccess | GetStarships;