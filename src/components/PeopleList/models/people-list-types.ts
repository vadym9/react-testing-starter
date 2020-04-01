import {PeopleCard} from '../../../global-models';

export interface PeopleListState{

}
export interface PropsFromState{

}

export interface PropsFromDispatch{

}

export interface PeopleListProps{
    people: PeopleCard[],
}



export type PeopleListAllProps = PeopleListProps & PropsFromDispatch & PropsFromState;