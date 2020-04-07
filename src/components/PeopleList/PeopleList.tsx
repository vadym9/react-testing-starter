import * as React from 'react';
import { connect } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';

import { PeopleListProps } from './models/people-list-types';
import { ApplicationState } from '../../store/reducers';
import Man from '../Man/Man';

const mapStateToProps = (state: ApplicationState): PeopleListProps => ({
  people: state.swPeople.people
});

const ConnectedPeopleList: React.FunctionComponent<PeopleListProps> = ({
  people
}: PeopleListProps): JSX.Element => {
  const list: JSX.Element[] = people.map((man, index) => (
    <Man key={uuidv1()} man={man} index={index} />
  ));
  return (
    <div>
      <ul className="cards flex fw">{list}</ul>
    </div>
  );
};

const PeopleList = connect<PeopleListProps, {}, {}>(mapStateToProps)(
  ConnectedPeopleList
);
export default PeopleList;
