const requestSuccess = (name, payload) => ({
  type: `${`${name}_SUCCESS`}`,
  payload
});

const requestFail = (name) => ({
  type: `${`${name}_FAILE`}`
});

// const accessKey = '';
const requestEpisodes = () => fetch('https://api.jikan.moe/v3/anime/1/episodes');
const requestPeople = () => fetch('https://swapi.co/api/people/');
const requestStarships = () => fetch('https://swapi.co/api/starships');
const requestRandomImages = () => fetch(`https://api.unsplash.com/photos/?client_id=${process.env.ACCESS_KEY}`);

export const getStarships = () => async (dispatch) => {
  try {
    const result = await requestStarships();
    const json = await result.json();

    dispatch(requestSuccess('GET_STARSHIPS', json.results));
  } catch (e) {
    dispatch(requestFail('GET_STARSHIPS'));
  }
};

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
    const resultPeople = await requestPeople();
    const jsonPeople = await resultPeople.json();

    if (process.env.ACESS_KEY !== undefined) {
      console.log(process.env.ACESS_KEY);

      const resultImages = await requestRandomImages();
      const jsonImages = await resultImages.json();
      // console.log("jsonImages", jsonImages);

      const result = jsonPeople.results.map((data, index) => {
        const {
          name, gender, height, mass, eye_color
        } = data;
        return {
          name,
          gender,
          height,
          mass,
          eye_color,
          img: jsonImages[index].urls.small
        };
      });
      dispatch(requestSuccess('GET_PEOPLE', result));
    } else {
      dispatch(requestSuccess('GET_PEOPLE', jsonPeople.results));
    }

    // console.log(result);
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
