import { requestSuccess, requestFail } from './requestResult';

const requestPeople = () => fetch('https://swapi.co/api/people/');
const requestRandomImages = () => fetch(`https://api.unsplash.com/photos/?client_id=${process.env.ACCESS_KEY}`);

const getPeople = () => async dispatch => {
  try {
    const resultPeople = await requestPeople();
    const jsonPeople = await resultPeople.json();

    if (process.env.ACCESS_KEY !== undefined) {
      const resultImages = await requestRandomImages();
      const jsonImages = await resultImages.json();
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
  } catch (e) {
    dispatch(requestFail('GET_PEOPLE'));
  }
};

export default getPeople;
