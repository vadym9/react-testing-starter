import { Starship } from '../../../models/starships-api-types';

export interface StarshipState {
  starships: Starship[];
  loading: boolean;
}
