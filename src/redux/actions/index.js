export const increment = (payload) => ({
  type: 'INCREMENT',
  payload
});

export const getAnimeEpisodesSUCCESS = (payload) => ({
  type: 'GET_ANIME_EPISODES_SUCCESS',
  payload
});

const getEpisodes = () => fetch('https://api.jikan.moe/v3/anime/1/episodes');

export const getAnimeEpisodes = () => (dispatch) => getEpisodes()
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((json) => {
    dispatch(getAnimeEpisodesSUCCESS(json.episodes));
  });
