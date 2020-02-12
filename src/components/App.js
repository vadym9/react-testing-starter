import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="two-columns flex jc-center">
            <div className="column flex fd-column">
              <div className="block">
                <Link to="/"><div className="link-block left-top"><h2>Dashboard</h2></div></Link>
              </div>
              <div className="block">
                <Link to="/episodes"><div className="link-block left-bottom"><h2>Anime Episodes</h2></div></Link>
              </div>
            </div>
            <div className="circle" />
            <div className="column flex fd-column">
              <div className="block">
                <Link to="/people"><div className="link-block right-top"><h2>Star Wars People</h2></div></Link>
              </div>
              <div className="block">
                <Link to="/starships"><div className="link-block right-bottom"><h2>Starships</h2></div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
