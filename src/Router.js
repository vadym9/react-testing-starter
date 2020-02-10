import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import App from './components/App';
import Episodes from './components/Episodes/Episodes';
import People from './components/People/People';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/episodes">Episodes</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/episodes" component={Episodes} />
          <Route path="/people" exact component={People} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Router;
