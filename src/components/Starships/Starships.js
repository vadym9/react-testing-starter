import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import {
  Container, Ships
} from './styles';
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
      this.setState({
        loading: false
      });
    }
    return null;
  }

  componentDidUpdate = () => {
  }

  render() {
    return (
      <Container>
        <div className={this.state.loading ? 'lds-dual-ring' : ''} />
        <Ships>
          {
            this.props.starships.map((ship) => (
              <Starship data={ship} key={uuidv1()} />
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
