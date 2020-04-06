import { getPeople } from '../../../store/thunk'

export interface PeopleProps {
    loading: boolean;
    getPeople: typeof getPeople;
}
