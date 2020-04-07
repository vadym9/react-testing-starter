import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { getAnimeEpisodes } from '../../../store/thunk';

export interface MapDispatchToProps {
  getAnimeEpisodes: typeof getAnimeEpisodes;
}

export interface MapStateToProps {
  loading: boolean;
}

export type EpisodesAllProps = MapStateToProps & MapDispatchToProps
