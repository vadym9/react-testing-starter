import * as React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { v1 as uuidv1 } from 'uuid';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { Container, Ships } from './styles';
import { getStarships } from '../../store/thunk';
import Starship from '../../components/Starship/Starship';
import { StarshipsProps } from './models/starships-types';
import { ApplicationState } from '../../store/reducers';

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => ({
  getStarships: () => dispatch(getStarships())
});

const mapStateToProps = (state: ApplicationState) => ({
  starships: state.swStarships.starships,
  loading: state.swStarships.loading
});

class ConnectedStarships extends React.Component<StarshipsProps, {}> {
  componentDidMount = () => {
    this.props.getStarships();
  };

  render(): JSX.Element {
    const { starships, loading } = this.props;

    const preloaderClasses = classnames('', { 'lds-dual-ring': loading });
    const listStarships = starships.map((ship) => (
      <Starship data={ship} key={uuidv1()} />
    ));

    return (
      <Container>
        <div className={preloaderClasses} />
        <Ships>{listStarships}</Ships>
        <h1>{loading}</h1>
      </Container>
    );
  }
}

const Starships = connect<{}, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedStarships);
export default Starships;
