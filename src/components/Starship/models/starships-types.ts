import { Starship } from '../../../models/starships-api-types';

export interface StarshipProps {
  data: Starship;
}

export interface StarshipState {
  hidden: boolean;
}
