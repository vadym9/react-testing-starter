import { SAVE_PEOPLE, GET_PEOPLE_SUCCESS, GET_PEOPLE, GET_PEOPLE_FAIL } from '../constants';
import { SavePeople, GetPeople, GetPeopleSuccess, GetPeopleFail } from './models/sw-people-actions-types';
import { PeopleCard } from '../../global-models';
import {ActionCreator} from 'redux'
export const savePeople: ActionCreator<SavePeople> = (p: PeopleCard[]) => ({
  type: SAVE_PEOPLE,
  people: p
});

export const getPeopleSuccess: ActionCreator<GetPeopleSuccess> = (p: PeopleCard[]) => ({
  type: GET_PEOPLE_SUCCESS,
  people: p
});

export const getPeopleFail: ActionCreator<GetPeopleFail> = (): GetPeopleFail => ({
  type: GET_PEOPLE_FAIL
})
