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
        <header className="header">
          <ul className="items flex">
            <li>
              <Link className="link" to="/">Dashboard</Link>
            </li>
            <li>
              <Link className="link" to="/episodes">Episodes</Link>
            </li>
            <li>
              <Link className="link" to="/people">People</Link>
            </li>
          </ul>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/episodes" component={Episodes} />
            <Route path="/people" exact component={People} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}
export default Router;
