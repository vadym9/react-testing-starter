import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  MemoryRouter, Route, Switch
} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Episodes from './pages/Episodes/Episodes';
import People from './pages/People/People';
import Starships from './pages/Starships/Starships';
import Navigation from './components/Navigation/Navigation';
import './scss/style.scss';

import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <MemoryRouter>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/episodes" component={Episodes} />
          <Route path="/people" component={People} />
          <Route path="/starships" component={Starships} />
        </Switch>
      </main>
    </MemoryRouter>
  </Provider>,

  document.getElementById('app')
);

module.hot.accept();
