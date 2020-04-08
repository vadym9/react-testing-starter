import { People } from '../../../models/people-api-types';

export interface RequestPeople {
  count: number;
  next: string;
  results: People[];
}

export interface Image {
  urls: {
    small: string;
  };
}
