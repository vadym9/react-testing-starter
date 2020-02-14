import { GET_EPISODES_SUCCESS } from '../../constants';

const initialState = {
  episodes: []
}

export const episodesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_EPISODES_SUCCESS:
      return {
        ...state,
        episodes: [...payload]
      };
    default:
      return state;
  }
}
