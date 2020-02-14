import { GET_STARSHIPS_SUCCESS } from '../../constants';

const initialState = {
  starships: []
}

export const starshipsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_STARSHIPS_SUCCESS:
      return {
        ...state,
        starships: [...payload]
      };
    default:
      return state;
  }
}
