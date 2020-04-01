import { GET_STARSHIPS_SUCCESS } from '../constants';
import { Starship } from '../../global-models';
import { StarshipAction } from '../actions/models/sw-starships-types';
import {StarshipState} from './models/sw-starships-reducer-types';
import {Reducer} from 'redux';

const initialState: StarshipState = {
  starships: []
};

export const starshipsReducer: Reducer<StarshipState> = (state: StarshipState = initialState, action) => {
  switch ((action as StarshipAction).type) {
    case GET_STARSHIPS_SUCCESS:
      return {
        ...state,
        ...action.starships
      }
    default:
      return state;
  }
}
