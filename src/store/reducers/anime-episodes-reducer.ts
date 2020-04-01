import { GET_EPISODES_SUCCESS } from '../constants';
import { GetEpisodes } from '../actions/models/anime-episodes-types';
import { EpisodesState } from './models/anime-episodes-reducer-types';
import { Reducer } from 'redux';

const initialState: EpisodesState = {
  episodes: []
}

export const episodesReducer: Reducer<EpisodesState> = (state: EpisodesState = initialState, action) => {
  switch ((action as GetEpisodes).type) {
    case GET_EPISODES_SUCCESS:
      return {
        ...state,
        episodes: [...action.episodes]
      };
    default:
      return state;
  }
}
