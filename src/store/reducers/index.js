import { combineReducers } from 'redux';
import { episodesReducer } from './episodes-reducer';
import { peopleReducer } from './people-reducer';
import { starshipsReducer } from './starships-reducer';

export default combineReducers({
  anime: {
    episodesReducer
  },
  sw: {
    peopleReducer,
    starshipsReducer
  }


});
