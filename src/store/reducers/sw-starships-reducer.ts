import { GET_STARSHIPS_SUCCESS } from '../constants';
import { Starship } from '../../global-models';
import { StarshipAction } from '../actions/models/sw-starships-types';

const initialState: Starship[] = [];

export const starshipsReducer = (state = initialState, action: StarshipAction) => {
  const { type } = action;

  switch (type) {
    case GET_STARSHIPS_SUCCESS:
      return [
        ...action.starships
      ]
    default:
      return state;
  }
}
