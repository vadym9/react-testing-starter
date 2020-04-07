import { AnyAction } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { getPeopleSuccess, getPeopleFail, getPeopleA } from '../actions';
import { PeopleCard } from '../../global-models';
import { Image, RequestPeople } from './models/get-people-types';

const requestPeople: Function = (): Promise<Response> => fetch('https://swapi.co/api/people/');
const requestRandomImages: Function = (): Promise<Response> => fetch(`https://api.unsplash.com/photos/?client_id=${process.env.ACCESS_KEY}`);



export const getPeople = (): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
  async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(getPeopleA())
    try {
      const response: Response = await requestPeople();
      const jsonPeople: RequestPeople = await response.json();

      let jsonImages: Image[];
      if (process.env.ACCESS_KEY) {
        const resultImages = await requestRandomImages();
        jsonImages = await resultImages.json();
      }

      const result: PeopleCard[] = jsonPeople.results.map((data, index) => {
        const {
          name, gender, height, mass, eye_color
        } = data;
        return {
          name,
          gender,
          height,
          mass,
          eye_color,
          img: (jsonImages && jsonImages[index].urls.small) || ''
        };
      });
      dispatch(getPeopleSuccess(result));
    } catch (e) {
      dispatch(getPeopleFail());
    }
  };
