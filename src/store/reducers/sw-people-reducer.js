import { GET_PEOPLE_SUCCESS, SAVE_PEOPLE } from '../constants';

const initialState = [];

export const peopleReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PEOPLE_SUCCESS:
      return [
        ...payload
      ]

    case SAVE_PEOPLE:
      return [
        ...payload
      ]

    default:
      return state;
  }
}
