import { requestSuccess, requestFail } from './helper/requestResult';

const requestStarships = () => fetch('https://swapi.co/api/starships');

export const getStarships = () => async dispatch => {
  try {
    const result = await requestStarships();
    const json = await result.json();

    dispatch(requestSuccess('GET_STARSHIPS', json.results));
  } catch (e) {
    dispatch(requestFail('GET_STARSHIPS'));
  }
};
