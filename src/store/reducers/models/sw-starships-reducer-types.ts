import { Starship } from '../../../global-models';

export interface StarshipState {
  starships: Starship[];
  loading: boolean;
}
