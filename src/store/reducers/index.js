import {
  GET_EPISODES_SUCCESS, GET_PEOPLE_SUCCESS, SAVE_PEOPLE, GET_STARSHIPS_SUCCESS
} from '../action-types';

const initialState = {
  name: '',
  episodes: [],
  people: [],
  starships: []
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_EPISODES_SUCCESS:
      return {
        ...state,
        episodes: [...payload]
      };
    case GET_PEOPLE_SUCCESS:
      return {
        ...state,
        people: [...payload]
      };
    case SAVE_PEOPLE:
      return {
        ...state,
        people: [...payload]
      };
    case GET_STARSHIPS_SUCCESS:
      return {
        ...state,
        starships: [...payload]
      };
    default:
      return state;
  }
};

export default rootReducer;
