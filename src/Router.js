import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import App from './components/App';
import Episodes from './components/Episodes/Episodes';

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
          </ul>
        </div>

        <Switch>
          {/* <Route path="/" exact component={App} /> */}
          <Route path="/" exact component={Episodes} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Router;
