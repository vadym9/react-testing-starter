import { ResponseStarship } from '../../global-models';
import { Dispatch, Action } from 'redux';
import {getStarshipsSuccess, getStarshipsFail} from '../actions';

const requestStarships = () => fetch('https://swapi.co/api/starships');

export const getStarships = () => async (dispatch: Dispatch<Action>) => {
  try {
    const result = await requestStarships();
    const response: ResponseStarship = await result.json();

    dispatch(getStarshipsSuccess(response.results));
  } catch (e) {
    dispatch(getStarshipsFail());
  }
};
