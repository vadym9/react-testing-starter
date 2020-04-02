import { getAnimeEpisodes } from '../../../store/thunk';
export interface PropsFromDispatch {
  getAnimeEpisodes: typeof getAnimeEpisodes
}

export interface PropsFromState {
  loading: boolean;
}

export interface EpisodesProps {

}
export interface EpisodesState {

}

export type EpisodesAllProps = EpisodesProps & PropsFromDispatch & PropsFromState