import { SAVE_PEOPLE, GET_PEOPLE_SUCCESS, GET_PEOPLE, GET_PEOPLE_FAIL } from '../../constants';
import { PeopleCard } from '../../../global-models';
import { Action } from 'redux';

export interface SavePeople extends Action {
    type: SAVE_PEOPLE
    people: PeopleCard[]
}

export interface GetPeople extends Action {
    type: GET_PEOPLE
}

export interface GetPeopleSuccess extends Action {
    type: GET_PEOPLE_SUCCESS
    people: PeopleCard[]
}

export interface GetPeopleFail extends Action {
    type: GET_PEOPLE_FAIL
}

export type PeopleAction = SavePeople | GetPeopleSuccess