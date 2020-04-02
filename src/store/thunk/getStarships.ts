import { ResponseStarship } from '../../global-models';
import { Dispatch, AnyAction } from 'redux';
import { getStarshipsSuccess, getStarshipsFail, getStarshipsA } from '../actions';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

const requestStarships = () => fetch('https://swapi.co/api/starships');

export const getStarships = (): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
  async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {

    try {
      dispatch(getStarshipsA())
      const result = await requestStarships();
      const response: ResponseStarship = await result.json();

      dispatch(getStarshipsSuccess(response.results));
    } catch (e) {
      dispatch(getStarshipsFail());
    }
  };
