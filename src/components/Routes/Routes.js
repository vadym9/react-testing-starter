import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Episodes from '../../pages/Episodes/Episodes';
import People from '../../pages/People/People';
import Starships from '../../pages/Starships/Starships';

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
