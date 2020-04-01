import { GET_PEOPLE_SUCCESS, SAVE_PEOPLE } from '../constants';
import { PeopleCard, People } from '../../global-models';
import { PeopleAction } from '../actions/models/sw-people-actions-types';
import { Reducer } from 'redux';
import { PeopleState } from './models/sw-people-reducer-types';

const initialState: PeopleState = {
  people: []
};

export const peopleReducer: Reducer<PeopleState> = (state: PeopleState = initialState, action: PeopleAction) => {
  switch ((action as PeopleAction).type) {
    case SAVE_PEOPLE:
    case GET_PEOPLE_SUCCESS:
      return {
        ...state,
        people: [...action.people]
      }
    default:
      return state;
  }
}
