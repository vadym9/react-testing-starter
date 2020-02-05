import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;

/* eslint-enable */
