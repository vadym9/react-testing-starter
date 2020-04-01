import { getStarships } from '../../../store/thunk'
import {Starship} from '../../../global-models';

export interface StarshipsState {
    loading: boolean;
}

export interface PropsFromState {
    starships: Starship[]
}

export interface PropsFromDispatch {
    getStarships: typeof getStarships
}

export interface StarshipsProps {

}

export type StarshipsAllProps = StarshipsProps & PropsFromState & PropsFromDispatch