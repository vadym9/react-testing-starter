import { combineReducers } from 'redux';
import { peopleReducer } from './people-reducer';
import { starshipsReducer } from './starships-reducer';

export default combineReducers({
  people: peopleReducer,
  starships: starshipsReducer
})
