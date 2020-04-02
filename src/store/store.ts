import { createStore, compose, applyMiddleware, MiddlewareAPI,StoreEnhancer, Store } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import myMiddleware from './middleware';
import { ApplicationState } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({});

const store: Store<ApplicationState> = createStore(reducers, composeEnhancers(
  applyMiddleware(thunk, myMiddleware)
));

export default store;
