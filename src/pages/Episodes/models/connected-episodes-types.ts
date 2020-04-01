import { Dispatch, Action } from 'redux';
import { getEpisodes } from '../../../store/actions'
import { getAnimeEpisodes } from '../../../store/thunk';
import { Episode } from '../../../global-models'
export interface PropsFromDispatch {
  getAnimeEpisodes: typeof getAnimeEpisodes
}

export interface PropsFromState {
  episodes: Episode[]
}

export interface EpisodesProps {

}
export interface EpisodesState {
  loading: boolean;
}

export type EpisodesAllProps = EpisodesProps & PropsFromDispatch & PropsFromState