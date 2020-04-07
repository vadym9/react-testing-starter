import { Starship } from '../../../models/starships-api-types';

export interface ResponseStarship {
  count: number;
  next: string;
  previous: string;
  results: Starship[];
}
