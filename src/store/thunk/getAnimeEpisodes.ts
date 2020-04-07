import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { getEpisodesSuccess, getEpisodesFail, getEpisodes } from '../actions';
import { Episode } from '../../models/episodes-api-types';
import { requestEpisodes } from './API/anime-episodes-api';

export const getAnimeEpisodes = (): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
  async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(getEpisodes());
    try {
      const response: Response = await requestEpisodes();
      const json: { episodes: Episode[] } = await response.json();
      dispatch(getEpisodesSuccess(json.episodes));
    } catch (e) {
      dispatch(getEpisodesFail());
    }
  };
