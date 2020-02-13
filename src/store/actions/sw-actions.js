import { SAVE_PEOPLE } from '../action-types';

const savePeople = payload => ({
  type: SAVE_PEOPLE,
  payload
});

export default savePeople;
