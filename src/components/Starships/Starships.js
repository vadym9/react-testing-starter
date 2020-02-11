import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container, Ships
} from './styles/styles';
import { getStarships } from '../../redux/thunk';
import Starship from '../Starship/Starship';

const mapDispatchToProps = (dispatch) => ({
  getStarships: () => dispatch(getStarships())
});

const mapStateToProps = (state) => ({
  starships: state.starships
});


class ConnectedStarships extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true

    };
  }

  componentDidMount = () => {
    this.props.getStarships();
  }

  getSnapshotBeforeUpdate = (prevProps) => {
    if (this.props.starships !== undefined
      && this.props.starships !== prevProps.starships) {
      console.log('starships');
      this.setState({
        loading: false
      });
    }
    return null;
  }

  componentDidUpdate = () => {

  }
  // componentDidUpdate = (prevProps, prevState, snapshot) => {
  //   if (nextProps.starships !== undefined && this.props.starships !== undefined
  //     && this.props.starships !== nextProps.starships) {
  //     this.setState({
  //       loading: false
  //     })
  //   }

  //   console.log('this props', this.props);
  //   console.log('prevProps', prevProps);
  // }

  // static getDerivedStateFromProps = (nextProps, prevState) => {
  //   console.log('ff', this.props);

  //   if (this.props !== undefined && nextProps.starships !== undefined
  //     && this.props.starships !== undefined
  //     && this.props.starships !== nextProps.starships) {
  //     return {
  //       loading: false
  //     };
  //   }
  //   return null;
  // }

  render() {
    console.log('****call render');

    return (
      <Container>
        <div className={this.state.loading ? 'lds-dual-ring' : ''} />
        <Ships>
          {
            this.props.starships.map((ship) => (
              <Starship data={ship} />
            ))
          }
        </Ships>
        <h1>{this.state.loading}</h1>
      </Container>
    );
  }
}

const Starships = connect(mapStateToProps, mapDispatchToProps)(ConnectedStarships);
export default Starships;
