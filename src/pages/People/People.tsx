import * as React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { getPeople } from '../../store/thunk';
import { PeopleAllProps } from './models/people-types';
import { ApplicationState } from '../../store/reducers';
import PeopleList from '../../components/PeopleList/PeopleList';

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>) => ({
  getPeople: () => dispatch(getPeople())
});

const mapStateToProps = (state: ApplicationState) => ({
  loading: state.swPeople.loading
});

class ConnectedPeople extends React.Component<PeopleAllProps, {}> {
  componentDidMount = () => {
    this.props.getPeople();
  };

  render() {
    const { loading } = this.props;
    const preloaderClasses = classnames('', { 'lds-dual-ring': loading });
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

const People = connect<{}, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedPeople);
export default People;
