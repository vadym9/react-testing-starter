import { requestSuccess, requestFail } from './requestResult';

const requestEpisodes = () => fetch('https://api.jikan.moe/v3/anime/1/episodes');

const getAnimeEpisodes = () => async dispatch => {
  try {
    const result = await requestEpisodes();
    const json = await result.json();
    dispatch(requestSuccess('GET_EPISODES', json.episodes));
  } catch (e) {
    dispatch(requestFail('GET_EPISODES'));
  }
};

export default getAnimeEpisodes;
