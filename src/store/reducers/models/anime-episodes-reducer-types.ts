import { Episode } from '../../../global-models';

export interface EpisodesState {
  episodes: Episode[];
  loading: boolean;
}
