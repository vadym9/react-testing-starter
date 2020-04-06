import { getAnimeEpisodes } from '../../../store/thunk';

export interface EpisodesProps {
  loading: boolean;
  getAnimeEpisodes: typeof getAnimeEpisodes
}
