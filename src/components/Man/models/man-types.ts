import { PeopleCard } from '../../../global-models';
import { savePeople } from '../../../store/actions';

export interface ManProps {
    index: number;
    man: PeopleCard;
    savePeople: typeof savePeople;
    people: PeopleCard[];
}
