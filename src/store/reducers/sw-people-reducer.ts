import { GET_PEOPLE_SUCCESS, SAVE_PEOPLE } from '../constants';
import { PeopleCard } from '../../global-models';
import { PeopleAction } from '../actions/models/sw-people-actions-types';


const initialState: PeopleCard[] = [];

export const peopleReducer = (state = initialState, action: PeopleAction) => {
  const { type } = action;

  switch (type) {
    case SAVE_PEOPLE:
    case GET_PEOPLE_SUCCESS:
      return [
        ...action.people
      ]

    default:
      return state;
  }
}
