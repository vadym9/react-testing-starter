import * as React from 'react';
import { v1 as uuidv1 } from 'uuid';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import {
  ManProps,
  MapDispatchToProps,
  MapStateToProps,
  ManAllProps
} from './models/man-types';
import { savePeople } from '../../store/actions';
import { PeopleCard } from '../../global-models';
import { ApplicationState } from '../../store/reducers';
import { SavePeople } from '../../store/actions/models/sw-people-actions-types';

import noimage from '../../img/noimage.png';


const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): MapDispatchToProps => ({
  savePeopleCard: (people: PeopleCard): SavePeople => dispatch(savePeople(people))
});

const mapStateToProps = (state: ApplicationState): MapStateToProps => ({
  people: state.swPeople.people
});

const ConnectedMan: React.FunctionComponent<ManAllProps> = ({
  man,
  index,
  people,
  savePeopleCard
}: ManAllProps): JSX.Element => {
  const onDeleteCard: React.MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent
  ): void => {
    const element: { id: string } = e.target as HTMLButtonElement;
    const clonedPeople: string = JSON.stringify(people);
    const result: PeopleCard[] = JSON.parse(clonedPeople);
    result.splice(parseInt(element.id, 10), 1);
    savePeopleCard(result);
  };

  const {
    img, name, gender, height, mass, eye_color
  }: PeopleCard = man;

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

const Man = connect<MapStateToProps, MapDispatchToProps, ManProps>(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedMan);
export default Man;
