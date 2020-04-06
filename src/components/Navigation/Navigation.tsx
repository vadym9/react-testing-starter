import * as React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (): JSX.Element => (
  <header className="header">
    <div className="container">
      <ul className="items flex">
        <li>
          <Link className="btn-link" to="/">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="btn-link" to="/episodes">
            Anime Episodes
          </Link>
        </li>
        <li>
          <Link className="btn-link" to="/people">
            Star Wars People
          </Link>
        </li>
        <li>
          <Link className="btn-link" to="/starships">
            Starships
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Navigation;
