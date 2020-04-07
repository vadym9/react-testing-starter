import { PeopleCard } from '../../../global-models';
import { savePeople } from '../../../store/actions';


export interface MapDispatchToProps {
    savePeople: typeof savePeople;
}

export interface MapStateToProps {
    people: PeopleCard[];
}

export interface ManProps {
    index: number;
    man: PeopleCard;
}

export type ManAllProps = ManProps & MapStateToProps & MapDispatchToProps