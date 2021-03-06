import { Reducer } from 'redux';

import { GET_STARSHIPS_SUCCESS, GET_STARSHIPS } from '../constants';
import { StarshipAction } from '../actions/models/sw-starships-types';
import { StarshipState } from './models/sw-starships-reducer-types';

const initialState: StarshipState = {
  starships: [],
  loading: false
};

export const starshipsReducer: Reducer<StarshipState> = (
  state: StarshipState = initialState,
  action
) => {
  switch ((action as StarshipAction).type) {
    case GET_STARSHIPS_SUCCESS:
      return {
        ...state,
        starships: [...action.starships],
        loading: false
      };
    case GET_STARSHIPS:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
