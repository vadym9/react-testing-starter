import * as React from 'react';
import { connect } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import classnames from 'classnames';
import { savePeople } from '../../store/actions';
import { getPeople } from '../../store/thunk';
import noimage from '../../img/noimage.png';
import { PeopleAllProps, PeopleState } from './models/people-types';
import { Action } from 'redux';
import { ApplicationState } from '../../store/reducers';
import { PeopleCard } from '../../global-models';
import { ThunkDispatch } from 'redux-thunk';
import PeopleList from '../../components/PeopleList/PeopleList';

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>) => ({
  getPeople: () => dispatch(getPeople()),
  saveProple: (people: PeopleCard) => dispatch(savePeople(people))
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

  onDeleteCard = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { people, savePeople } = this.props;
    
    const clonedPeople = JSON.stringify(people);
    const result = JSON.parse(clonedPeople);
    result.splice(e.target.id, 1);
    savePeople(result);
  };

  render() {
    const { people } = this.props;
    const { loading } = this.state;

    const preloaderClasses = classnames('', { 'lds-dual-ring': loading });

    const peopleList = 
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

const People = connect(mapStateToProps, mapDispatchToProps)(ConnectedPeople);
export default People;
