import { People } from '../../../global-models';

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
