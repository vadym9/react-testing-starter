import { Episode } from '../../../models/episodes-api-types';

export interface EpisodesState {
  episodes: Episode[];
  loading: boolean;
}
