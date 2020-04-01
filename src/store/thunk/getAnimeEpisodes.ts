import { Dispatch, Action, ActionCreator, AnyAction } from 'redux';
import { getEpisodesSuccess, getEpisodesFail } from '../actions';
import { Episode } from '../../global-models';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

const requestEpisodes = () => fetch('https://api.jikan.moe/v3/anime/1/episodes');

export const getAnimeEpisodes = (): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
  async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      const result = await requestEpisodes();
      const json: { episodes: Episode[] } = await result.json();
      dispatch(getEpisodesSuccess(json.episodes));
    } catch (e) {
      dispatch(getEpisodesFail());
    }
  };
