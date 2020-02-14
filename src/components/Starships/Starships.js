import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import classnames from 'classnames';
import {
  Container, Ships
} from './styles';
import { getStarships } from '../../store/thunk';
import Starship from '../Starship/Starship';

const mapDispatchToProps = (dispatch) => ({
  displayStarships: () => dispatch(getStarships())
});

const mapStateToProps = (state) => ({
  starships: state.sw.starships.starships
});


class ConnectedStarships extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount = () => {
    const { displayStarships } = this.props;
    displayStarships();
  }

  getSnapshotBeforeUpdate = prevProps => {
    const { starships } = this.props;

    if (starships !== undefined
      && starships !== prevProps.starships) {
      this.setState({
        loading: false
      });
    }
    return null;
  }

  render() {
    const { loading } = this.state;
    const { starships } = this.props;

    const preloaderClasses = classnames('', { 'lds-dual-ring': loading });
    return (
      <Container>
        <div className={preloaderClasses} />
        <Ships>
          {
            starships.map((ship) => (
              <Starship data={ship} key={uuidv1()} />
            ))
          }
        </Ships>
        <h1>{loading}</h1>
      </Container>
    );
  }
}

const Starships = connect(mapStateToProps, mapDispatchToProps)(ConnectedStarships);
export default Starships;
