import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from '../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  increment: (number) => dispatch(increment(number))
});

const mapStateToProps = (state) => ({
  number: state.number
})

class ConnectedApp extends Component {
  onClick = () => {
    console.log('call on click');

    this.props.increment(this.props.number);
  }
  // onClick() {
  //   console.log('on clicfffk1133331');
  // }

  render() {
    console.log(this.props.number);
    return (
      <div>
        <h1>{this.props.number}</h1>

        <div><p /></div>
        <button type="button" onClick={this.onClick}>Increment</button>
      </div>
    );
  }
}


const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);
export default App;
