import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { getStarshipsSuccess, getStarshipsFail, getStarshipsA } from '../actions';
import { ResponseStarship } from './models/get-starships-types';

const requestStarships: Function = (): Promise<Response> => fetch('https://swapi.co/api/starships');

export const getStarships = (): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
  async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {

    try {
      dispatch(getStarshipsA())
      const result: Response = await requestStarships();
      const response: ResponseStarship = await result.json();

      dispatch(getStarshipsSuccess(response.results));
    } catch (e) {
      dispatch(getStarshipsFail());
    }
  };
