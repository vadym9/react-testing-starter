import * as React from 'react';
import { connect } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';

import { PeopleListProps } from './models/people-list-types';
import { ApplicationState } from '../../store/reducers';
import Man from '../Man/Man';

const mapStateToProps = (state: ApplicationState) => ({
  people: state.swPeople.people
});

const ConnectedPeopleList = ({ people }: PeopleListProps): JSX.Element => {
  const list = people.map((man, index) => (
    <Man key={uuidv1()} man={man} index={index} />
  ));
  return (
    <div>
      <ul className="cards flex fw">{list}</ul>
    </div>
  );
};

const PeopleList = connect(mapStateToProps)(ConnectedPeopleList);
export default PeopleList;
