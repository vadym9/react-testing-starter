import { PeopleCard } from '../../../models/people-api-types';

export interface PeopleState {
  people: PeopleCard[];
  loading: boolean;
}
