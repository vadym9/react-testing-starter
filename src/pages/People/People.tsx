import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { getPeople } from '../../store/thunk';
import {
  MapDispatchToProps,
  PeopleAllProps,
  MapStateToProps
} from './models/people-types';
import { ApplicationState } from '../../store/reducers';
import PeopleList from '../../components/PeopleList/PeopleList';

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>): MapDispatchToProps => ({
  getPeople: (): Promise<void> => dispatch(getPeople())
});

const mapStateToProps = (state: ApplicationState): MapStateToProps => ({
  loading: state.swPeople.loading
});

class ConnectedPeople extends Component<PeopleAllProps, {}> {
  componentDidMount = (): void => {
    this.props.getPeople();
  };

  render(): JSX.Element {
    const { loading } = this.props;
    const preloaderClasses: string = classnames('', {
      'lds-dual-ring': loading
    });
    return (
      <div className="people">
        <div className="container">
          <div className={preloaderClasses} />
          <PeopleList />
        </div>
      </div>
    );
  }
}

const People = connect<MapStateToProps, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedPeople);
export default People;
