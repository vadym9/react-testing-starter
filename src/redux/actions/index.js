export const increment = (payload) => ({
  type: 'INCREMENT',
  payload
});

export const deleteCard = (payload) => ({
  type: 'DELETE_CARD',
  payload
})

const requestSuccess = (name, payload) => ({
  type: `${`${name}_SUCCESS`}`,
  payload
});

const requestFail = (name) => ({
  type: `${`${name}_FAILE`}`
});


const requestEpisodes = () => fetch('https://api.jikan.moe/v3/anime/1/episodes');
const requestPeople = () => fetch('https://swapi.co/api/people/');

export const getAnimeEpisodes = () => async (dispatch) => {
  console.log('______***Calll*****');

  try {
    const result = await requestEpisodes();
    const json = await result.json();
    dispatch(requestSuccess('GET_EPISODES', json.episodes));
  } catch (e) {
    dispatch(requestFail('GET_EPISODES'));
  }
};

export const getPeople = () => async (dispatch) => {
  try {
    const result = await requestPeople();
    const json = await result.json();
    dispatch(requestSuccess('GET_PEOPLE', json.results));
  } catch (e) {
    dispatch(requestFail('GET_PEOPLE'));
  }
};
// getEpisodes()
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((json) => {
//     dispatch(requestSuccess('GET_EPISODES',json.episodes));
//   });
