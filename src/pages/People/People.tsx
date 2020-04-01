import * as React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { savePeople } from '../../store/actions';
import { getPeople } from '../../store/thunk';

import { PeopleAllProps, PeopleState } from './models/people-types';
import { Action } from 'redux';
import { ApplicationState } from '../../store/reducers';
import { ThunkDispatch } from 'redux-thunk';
import PeopleList from '../../components/PeopleList/PeopleList';


const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>) => ({
  getPeople: () => dispatch(getPeople())
});

const mapStateToProps = (state: ApplicationState) => ({
  people: state.swPeople.people
});

class ConnectedPeople extends React.Component<PeopleAllProps, PeopleState> {
  constructor(props: PeopleAllProps) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount = () => {
    this.props.getPeople();
  };

  getSnapshotBeforeUpdate = (
    prevProps: PeopleAllProps
  ): PeopleAllProps | null => {
    const { people } = this.props;

    if (people !== undefined && people !== prevProps.people) {
      this.setState({
        loading: false
      });
    }
    return null;
  };

  render() {
    const { loading } = this.state;
    const { people } = this.props;
    const preloaderClasses = classnames('', { 'lds-dual-ring': loading });
    return (
      <div className="people">
        <div className="container">
          <div className={preloaderClasses} />
          <PeopleList people={people} />
        </div>
      </div>
    );
  }
}

const People = connect<{},{},{}>(mapStateToProps, mapDispatchToProps)(ConnectedPeople);
export default People;
