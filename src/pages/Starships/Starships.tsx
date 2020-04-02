import * as React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Container, Ships } from './styles';
import { getStarships } from '../../store/thunk';
import Starship from '../../components/Starship/Starship';
import { StarshipsAllProps, StarshipsState } from './models/starships-types';
import { v1 as uuidv1 } from 'uuid';
import { Dispatch, Action, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ApplicationState } from '../../store/reducers';

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => ({
  getStarships: () => dispatch(getStarships())
});

const mapStateToProps = (state: ApplicationState) => ({
  starships: state.swStarships.starships,
  loading: state.swStarships.loading
});

class ConnectedStarships extends React.Component<
  StarshipsAllProps,
  {}
> {
  // constructor(props: StarshipsAllProps) {
  //   super(props);

  //   this.state = {
  //     loading: true
  //   };
  // }

  componentDidMount = () => {
    this.props.getStarships();
  };

  // getSnapshotBeforeUpdate = (
  //   prevProps: StarshipsAllProps
  // ): StarshipsAllProps => {
  //   const { starships } = this.props;

  //   if (starships !== undefined && starships !== prevProps.starships) {
  //     this.setState({
  //       loading: false
  //     });
  //   }
  //   return null;
  // };

  render() {
    // const { loading } = this.state;
    const { starships, loading } = this.props;

    const preloaderClasses = classnames('', { 'lds-dual-ring': loading });
    const listStarships = starships.map(ship => (
      <Starship data={ship} key={uuidv1()} />
    ));
    console.log("starships", starships);
    
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
