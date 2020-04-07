import { Action } from 'redux';
import { Starship } from '../../../global-models';

export interface GetStarshipsA extends Action {
  type: string;
}

export interface GetStarshipsSuccess extends Action {
  type: string;
  starships: Starship[];
}

export interface GetStarshipsFail extends Action {
  type: string;
}

export type StarshipAction = GetStarshipsSuccess | GetStarshipsA;
