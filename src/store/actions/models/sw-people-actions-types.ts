import { Action } from 'redux';
import { PeopleCard } from '../../../models/people-api-types';

export interface SavePeople extends Action {
  type: string;
  people: PeopleCard[];
}

export interface GetPeople extends Action {
  type: string;
}

export interface GetPeopleSuccess extends Action {
  type: string;
  people: PeopleCard[];
}

export interface GetPeopleFail extends Action {
  type: string;
}

export type PeopleAction = SavePeople | GetPeopleSuccess | GetPeople
