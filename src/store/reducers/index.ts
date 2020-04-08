import { combineReducers, Reducer } from 'redux';

import { episodesReducer } from './anime-episodes-reducer';
import { peopleReducer } from './sw-people-reducer';
import { starshipsReducer } from './sw-starships-reducer';
import { EpisodesState } from './models/anime-episodes-reducer-types';
import { PeopleState } from './models/sw-people-reducer-types';
import { StarshipState } from './models/sw-starships-reducer-types';

export interface ApplicationState {
  anime: EpisodesState;
  swPeople: PeopleState;
  swStarships: StarshipState;
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  anime: episodesReducer,
  swPeople: peopleReducer,
  swStarships: starshipsReducer
});
