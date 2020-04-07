import { Starship } from '../../../global-models';

export interface MapDispatchToProps {
  getStarships: Function;
}

export interface MapStateToProps {
  loading: boolean;
  starships: Starship[];
}

export type StarshipsAllProps = MapDispatchToProps & MapStateToProps
