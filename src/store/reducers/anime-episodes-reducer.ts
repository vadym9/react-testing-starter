import { Reducer } from 'redux';

import { GET_EPISODES_SUCCESS, GET_EPISODES } from '../constants';
import { EpisodesAction } from '../actions/models/anime-episodes-types';
import { EpisodesState } from './models/anime-episodes-reducer-types';

const initialState: EpisodesState = {
  episodes: [],
  loading: true
};

export const episodesReducer: Reducer<EpisodesState> = (
  state: EpisodesState = initialState,
  action
) => {
  switch ((action as EpisodesAction).type) {
    case GET_EPISODES_SUCCESS:
      return {
        ...state,
        episodes: [...action.episodes],
        loading: false
      };
    case GET_EPISODES:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
