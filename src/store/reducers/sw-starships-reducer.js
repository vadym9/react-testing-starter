import { GET_STARSHIPS_SUCCESS } from '../constants';

const initialState = [];

export const starshipsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_STARSHIPS_SUCCESS:
      return [
        ...payload
      ]
    default:
      return state;
  }
}
