import { PeopleCard } from '../../../global-models';

export interface MapDispatchToProps {
  savePeopleCard: Function;
}

export interface MapStateToProps {
  people: PeopleCard[];
}

export interface ManProps {
  index: number;
  man: PeopleCard;
}

export type ManAllProps = ManProps & MapStateToProps & MapDispatchToProps
