import { Reducer } from 'redux';

import { GET_PEOPLE_SUCCESS, SAVE_PEOPLE, GET_PEOPLE } from '../constants';
import { PeopleAction } from '../actions/models/sw-people-actions-types';
import { PeopleState } from './models/sw-people-reducer-types';

const initialState: PeopleState = {
  people: [],
  loading: true
};

export const peopleReducer: Reducer<PeopleState> = (state: PeopleState = initialState, action) => {
  switch ((action as PeopleAction).type) {
    case SAVE_PEOPLE:
    case GET_PEOPLE_SUCCESS:
      return {
        ...state,
        people: [...action.people],
        loading: false
      };
    case GET_PEOPLE:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
