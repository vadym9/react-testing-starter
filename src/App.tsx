import * as React from 'react';
import { Provider } from 'react-redux';

import { MemoryRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Episodes from './pages/Episodes/Episodes';
import People from './pages/People/People';
import Starships from './pages/Starships/Starships';
import Navigation from './components/Navigation/Navigation';
import store from './store/store';

import './scss/style.scss';

export const App = () => (
  <Provider store={store}>
    <MemoryRouter>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" exact={true} component={Dashboard} />
          <Route path="/episodes" component={Episodes} />
          <Route path="/people" component={People} />
          <Route path="/starships" component={Starships} />
        </Switch>
      </main>
    </MemoryRouter>
  </Provider>
);
