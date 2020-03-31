import { SAVE_PEOPLE, GET_PEOPLE_SUCCESS, GET_PEOPLE, GET_PEOPLE_FAIL } from '../constants';
import { SavePeople, GetPeople, GetPeopleSuccess, GetPeopleFail } from './models/sw-people-actions-types';
import { PeopleCard } from '../../global-models';

export const savePeople = (p: PeopleCard[]): SavePeople => ({
  type: SAVE_PEOPLE,
  people: p
});

export const getPeopleSuccess = (p: PeopleCard[]): GetPeopleSuccess => ({
  type: GET_PEOPLE_SUCCESS,
  people: p
});

export const getPeopleFail = (): GetPeopleFail => ({
  type: GET_PEOPLE_FAIL
})
