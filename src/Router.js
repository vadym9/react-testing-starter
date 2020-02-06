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
        <div className="content">
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
          <div>
            <Switch>
              <Route path="/" exact component={App} />
              <Route path="/episodes" exact component={Episodes} />
            </Switch>
          </div>
        </div>


      </BrowserRouter>
    );
  }
}
export default Router;
