import { combineReducers } from 'redux';
import { episodesReducer } from './episodes';
import sw from './sw';

export default combineReducers({
  anime: episodesReducer,
  sw
});
