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
import Starships from './components/Starships/Starships';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <header className="header">
          <div className="container">
            <ul className="items flex">
              <li>
                <Link className="btn-link" to="/">Dashboard</Link>
              </li>
              <li>
                <Link className="btn-link" to="/episodes">Anime Episodes</Link>
              </li>
              <li>
                <Link className="btn-link" to="/people">Star Wars People</Link>
              </li>
              <li>
                <Link className="btn-link" to="/starships">Starships</Link>
              </li>
            </ul>
          </div>

        </header>
        <main>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/episodes" component={Episodes} />
            <Route path="/people" exact component={People} />
            <Route path="/starships" component={Starships} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}
export default Router;
