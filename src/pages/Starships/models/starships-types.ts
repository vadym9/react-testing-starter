import { getStarships } from '../../../store/thunk';
import { Starship } from '../../../global-models';

export interface MapDispatchToProps {
  getStarships: typeof getStarships;
}

export interface MapStateToProps {
  loading: boolean;
  starships: Starship[];
}

export type StarshipsAllProps = MapDispatchToProps & MapStateToProps
