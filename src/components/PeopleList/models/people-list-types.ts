import { PeopleCard } from '../../../global-models';

export interface PeopleListState {

}
export interface PropsFromState {
    people: PeopleCard[];
}

export interface PropsFromDispatch {

}

export interface PeopleListProps {
    
}



export type PeopleListAllProps = PeopleListProps & PropsFromDispatch & PropsFromState;