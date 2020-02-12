import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from './Router';

import './scss/style.scss';

import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,

  document.getElementById('app')
);

module.hot.accept();
