import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Episodes from '../Episodes/Episodes';
import People from '../People/People';
import Starships from '../Starships/Starships';

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
