import { GET_PEOPLE_SUCCESS, SAVE_PEOPLE } from '../../constants';

const initialState = {
  people: []
}

export const peopleReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PEOPLE_SUCCESS:
      return {
        ...state,
        people: [...payload]
      };

    case SAVE_PEOPLE:
      return {
        ...state,
        people: [...payload]
      }

    default:
      return state;
  }
}
