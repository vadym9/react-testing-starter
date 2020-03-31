import { GET_STARSHIPS, GET_STARSHIPS_SUCCESS, GET_STARSHIPS_FAIL } from '../constants';
import { GetStarships, GetStarshipsSuccess, GetStarshipsFail } from './models/sw-starships-types';
import { Starship } from '../../global-models';

export const getStarships = (): GetStarships => ({
    type: GET_STARSHIPS
})

export const getStarshipsSuccess = (s: Starship[]): GetStarshipsSuccess => ({
    type: GET_STARSHIPS_SUCCESS,
    starships: s
})

export const getStarshipsFail = (): GetStarshipsFail => ({
    type: GET_STARSHIPS_FAIL
})