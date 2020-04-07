import {
  createStore, applyMiddleware, Store
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers, ApplicationState } from './reducers';
import myMiddleware from './middleware';


const composeEnhancers = composeWithDevTools({});

const store: Store<ApplicationState> = createStore(reducers, composeEnhancers(
  applyMiddleware(thunk, myMiddleware)
));

export default store;
