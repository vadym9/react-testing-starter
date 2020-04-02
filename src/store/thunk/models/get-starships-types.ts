import { Starship } from '../../../global-models';

export interface ResponseStarship {
    count: number;
    next: string;
    previous: string;
    results: Starship[]
}