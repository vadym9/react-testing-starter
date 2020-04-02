import { Dispatch, Action } from 'redux';
import { getEpisodes } from '../../../store/actions'
import { getAnimeEpisodes } from '../../../store/thunk';
import { Episode } from '../../../global-models'
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