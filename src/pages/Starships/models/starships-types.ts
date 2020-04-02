import { getStarships } from '../../../store/thunk'
import {Starship} from '../../../global-models';

export interface StarshipsState {
    
}

export interface PropsFromState {
    starships: Starship[]
}

export interface PropsFromDispatch {
    getStarships: typeof getStarships
}

export interface StarshipsProps {
    loading: boolean
}

export type StarshipsAllProps = StarshipsProps & PropsFromState & PropsFromDispatch