import * as React from 'react';
import { PeopleListAllProps } from './models/people-list-types';
import { ApplicationState } from '../../store/reducers';
import { connect } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import Man from '../Man/Man';

const PeopleList = ({ people }: PeopleListAllProps) => {
  const list = people.map((man, index) => (
    <Man key={uuidv1()} man={man} index={index} />
  ));
  return (
    <div>
      <ul className="cards flex fw">{list}</ul>
    </div>
  );
};

export default PeopleList;
