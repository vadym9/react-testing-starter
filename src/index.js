import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from './components/Router/Router';

import './scss/style.scss';

import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,

  document.getElementById('app')
);

module.hot.accept();
