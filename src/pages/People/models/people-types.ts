import { savePeople } from '../../../store/actions';
import { getPeople } from '../../../store/thunk'
import {PeopleCard} from '../../../global-models';

export interface PeopleState {
    loading: boolean
}

export interface PeopleProps {

}

export interface PropsFromState {
    people: PeopleCard[]
}

export interface PropsFromDispatch {
    getPeople: typeof getPeople
}

export type PeopleAllProps = PeopleProps & PropsFromState & PropsFromDispatch;