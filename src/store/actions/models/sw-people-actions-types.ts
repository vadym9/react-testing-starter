import { SAVE_PEOPLE, GET_PEOPLE_SUCCESS, GET_PEOPLE, GET_PEOPLE_FAIL } from '../../constants';
import { PeopleCard } from '../../../global-models';

export interface SavePeople {
    type: SAVE_PEOPLE
    people: PeopleCard[]
}

export interface GetPeople {
    type: GET_PEOPLE
}

export interface GetPeopleSuccess {
    type: GET_PEOPLE_SUCCESS
    people: PeopleCard[]
}

export interface GetPeopleFail {
    type: GET_PEOPLE_FAIL
}

export type PeopleAction = SavePeople | GetPeopleSuccess