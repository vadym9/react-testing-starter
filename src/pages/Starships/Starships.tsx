import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { v1 as uuidv1 } from 'uuid';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { Container, Ships } from './styles';
import { getStarships } from '../../store/thunk';
import Starship from '../../components/Starship/Starship';
import { StarshipsAllProps, MapStateToProps, MapDispatchToProps } from './models/starships-types';
import { ApplicationState } from '../../store/reducers';

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
): MapDispatchToProps => ({
  getStarships: (): Promise<void> => dispatch(getStarships())
});

const mapStateToProps = (state: ApplicationState): MapStateToProps => ({
  starships: state.swStarships.starships,
  loading: state.swStarships.loading
});

class ConnectedStarships extends React.Component<StarshipsAllProps, {}> {
  componentDidMount = (): void => {
    this.props.getStarships();
  };

  render(): JSX.Element {
    const { starships, loading } = this.props;

    const preloaderClasses: string = classnames('', { 'lds-dual-ring': loading });
    const listStarships: JSX.Element[] = starships.map((ship) => (
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

const Starships = connect<MapStateToProps, MapDispatchToProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedStarships);
export default Starships;
