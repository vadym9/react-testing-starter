import React, { Component } from 'react';

class App extends Component {
  render() {
    console.log(this.props.number);
    return (
      <div>
        <p>Hi this is Home page</p>
      </div>
    );
  }
}

export default App;
