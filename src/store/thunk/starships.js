import { requestSuccess, requestFail } from './requestResult';

const requestStarships = () => fetch('https://swapi.co/api/starships');

const getStarships = () => async dispatch => {
  try {
    const result = await requestStarships();
    const json = await result.json();

    dispatch(requestSuccess('GET_STARSHIPS', json.results));
  } catch (e) {
    dispatch(requestFail('GET_STARSHIPS'));
  }
};

export default getStarships;
