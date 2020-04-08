import { ActionCreator } from 'redux';

import { GET_STARSHIPS, GET_STARSHIPS_SUCCESS, GET_STARSHIPS_FAIL } from '../constants';
import { GetStarshipsA, GetStarshipsSuccess, GetStarshipsFail } from './models/sw-starships-types';
import { Starship } from '../../models/starships-api-types';


export const getStarshipsA: ActionCreator<GetStarshipsA> = () => ({
  type: GET_STARSHIPS
});

export const getStarshipsSuccess: ActionCreator<GetStarshipsSuccess> = (s: Starship[]) => ({
  type: GET_STARSHIPS_SUCCESS,
  starships: s
});

export const getStarshipsFail: ActionCreator<GetStarshipsFail> = () => ({
  type: GET_STARSHIPS_FAIL
});
