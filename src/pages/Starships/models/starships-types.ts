import { getStarships } from '../../../store/thunk'
import { Starship } from '../../../global-models';

export interface StarshipsProps {
    loading: boolean;
    starships: Starship[];
    getStarships: typeof getStarships;
}
