import * as React from 'react';
import { v1 as uuidv1 } from 'uuid';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';

import { ManAllProps } from './models/man-types';
import { savePeople } from '../../store/actions';
import { PeopleCard } from '../../global-models';
import { ApplicationState } from '../../store/reducers';

import noimage from '../../img/noimage.png';

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  savePeople: (people: PeopleCard) => dispatch(savePeople(people))
});

const mapStateToProps = (state: ApplicationState) => ({
  people: state.swPeople.people
});

const ConnectedMan = ({
  man,
  index,
  people,
  savePeople
}: ManAllProps): JSX.Element => {
  const onDeleteCard = (e: any) => {
    const clonedPeople = JSON.stringify(people);
    const result = JSON.parse(clonedPeople);
    result.splice(e.target.id, 1);
    savePeople(result);
  };

  const { img, name, gender, height, mass, eye_color } = man;

  return (
    <li key={uuidv1()}>
      <div className="card">
        <div className="delete flex jc-end">
          <div className="">
            <button
              type="button"
              id={index.toString()}
              onClick={onDeleteCard}
              className="btn"
            >
              Remove
            </button>
          </div>
        </div>
        <div className="avatar">
          <img alt="noimage" src={img || noimage} />
        </div>
        <div className="title">
          <h3>{name}</h3>
        </div>
        <div className="info">
          <div className="gender">
            <p>{`Gender: ${gender}`}</p>
          </div>
          <div className="height">
            <p>{`Height: ${height}`}</p>
          </div>
          <div className="mass">
            <p>{`Mass: ${mass}`}</p>
          </div>
          <div className="eye_color">
            <p>{`Eye color: ${eye_color}`}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

const Man = connect(mapStateToProps, mapDispatchToProps)(ConnectedMan);
export default Man;
