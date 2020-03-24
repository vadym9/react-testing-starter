import { combineReducers } from 'redux';
import { episodesReducer } from './anime-episodes-reducer';
import { peopleReducer } from './sw-people-reducer';
import { starshipsReducer } from './sw-starships-reducer';

const sw = combineReducers({
  people: peopleReducer,
  starships: starshipsReducer
})

export default combineReducers({
  anime: episodesReducer,
  sw
});
