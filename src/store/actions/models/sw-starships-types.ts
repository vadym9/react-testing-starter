import { GET_STARSHIPS, GET_STARSHIPS_SUCCESS, GET_STARSHIPS_FAIL } from '../../constants';
import { Starship } from '../../../global-models';

export interface GetStarships {
    type: GET_STARSHIPS
}

export interface GetStarshipsSuccess{
    type: GET_STARSHIPS_SUCCESS;
    starships: Starship[];
}

export interface GetStarshipsFail{
    type: GET_STARSHIPS_FAIL;
}

export type StarshipAction =  GetStarshipsSuccess;