import { getAnimeEpisodes } from '../../../store/thunk';
import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux';
export interface MapDispatchToProps {
  getAnimeEpisodes: typeof getAnimeEpisodes
}

export interface MapStateToProps {
  loading: boolean;
}

export type EpisodesAllProps = MapStateToProps & MapDispatchToProps