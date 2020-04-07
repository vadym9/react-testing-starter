import { getPeople } from '../../../store/thunk'

export interface PeopleProps {
    getPeople: typeof getPeople;
}

export interface MapStateToProps{
    loading: boolean;
}

export type PeopleAllProps = MapStateToProps & PeopleProps