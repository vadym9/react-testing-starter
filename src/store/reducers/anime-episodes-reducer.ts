import { GET_EPISODES_SUCCESS } from '../constants';
import { GetEpisodes } from '../actions/models/anime-episodes-types';
import { EpisodesState } from './models/anime-episodes-reducer-types';

const initialState: EpisodesState = {
  episodes: []
}

export const episodesReducer = (state = initialState, action: GetEpisodes) => {
  const { type } = action;

  switch (type) {
    case GET_EPISODES_SUCCESS:
      return {
        ...state,
        episodes: [...action.episodes]
      };
    default:
      return state;
  }
}
