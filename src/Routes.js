import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Episodes from './components/Episodes/Episodes';
import People from './components/People/People';
import Starships from './components/Starships/Starships';

const Routes = () => (
  <main>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/episodes" component={Episodes} />
      <Route path="/people" component={People} />
      <Route path="/starships" component={Starships} />
    </Switch>
  </main>
)

export default Routes;
