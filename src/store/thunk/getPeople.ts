import { getPeopleSuccess, getPeopleFail } from '../actions';
import { People, PeopleCard } from '../../global-models';
import { Dispatch, Action } from 'redux'
const requestPeople = () => fetch('https://swapi.co/api/people/');
const requestRandomImages = () => fetch(`https://api.unsplash.com/photos/?client_id=${process.env.ACCESS_KEY}`);

interface RequestPeople {
  count: number;
  next: string;
  results: People[]
}

interface Image{
  urls: {
    small: string
  }
}

export const getPeople = () => async (dispatch: Dispatch<Action>) => {
  try {
    const resultPeople = await requestPeople();
    const jsonPeople: RequestPeople = await resultPeople.json();

    let jsonImages:Image[];
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
        img: jsonImages[index].urls.small || ''
      };
    });

    dispatch(getPeopleSuccess(result));

  } catch (e) {
    dispatch(getPeopleFail());
  }
};
