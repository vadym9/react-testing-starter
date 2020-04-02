import { PeopleCard } from '../../../global-models';
import { savePeople } from '../../../store/actions';

export interface ManState {

}
export interface PropsFromState {
    people: PeopleCard[];
}

export interface PropsFromDispatch {
    savePeople: typeof savePeople;
}

export interface ManProps {
    index: number;
    man: PeopleCard;

}



export type ManAllProps = ManProps & PropsFromDispatch & PropsFromState;