import { requestSuccess, requestFail } from './helper/requestResult';

const requestEpisodes = () => fetch('https://api.jikan.moe/v3/anime/1/episodes');

export const getAnimeEpisodes = () => async dispatch => {
  try {
    const result = await requestEpisodes();
    const json = await result.json();
    dispatch(requestSuccess('GET_EPISODES', json.episodes));
  } catch (e) {
    dispatch(requestFail('GET_EPISODES'));
  }
};
