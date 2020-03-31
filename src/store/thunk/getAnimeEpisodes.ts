import { Dispatch, Action } from 'redux';
import { getEpisodesSuccess, getEpisodesFail } from '../actions';
import { Episode } from '../../global-models';

const requestEpisodes = () => fetch('https://api.jikan.moe/v3/anime/1/episodes');

export const getAnimeEpisodes = () => async (dispatch: Dispatch<Action>): Promise<Episode[]> => {
  try {
    const result = await requestEpisodes();
    const json: {episodes: Episode[]}  = await result.json();
    dispatch(getEpisodesSuccess(json.episodes));
    return json.episodes;
  } catch (e) {
    dispatch(getEpisodesFail());
  }
};
