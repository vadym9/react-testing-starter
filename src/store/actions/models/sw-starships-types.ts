import { GET_STARSHIPS, GET_STARSHIPS_SUCCESS, GET_STARSHIPS_FAIL } from '../../constants';
import { Starship } from '../../../global-models';
import { Action } from 'redux';

export interface GetStarships extends Action {
    type: GET_STARSHIPS
}

export interface GetStarshipsSuccess extends Action {
    type: GET_STARSHIPS_SUCCESS;
    starships: Starship[];
}

export interface GetStarshipsFail extends Action {
    type: GET_STARSHIPS_FAIL;
}

export type StarshipAction = GetStarshipsSuccess;