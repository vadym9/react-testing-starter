import { getPeople } from '../../../store/thunk'
import {PeopleCard} from '../../../global-models';

export interface PeopleState {
}

export interface PeopleProps {

}

export interface PropsFromState {
    loading: boolean;
}

export interface PropsFromDispatch {
    getPeople: typeof getPeople
}

export type PeopleAllProps = PeopleProps & PropsFromState & PropsFromDispatch;