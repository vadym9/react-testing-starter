import { Action } from 'redux';
import { Episode } from '../../../models/episodes-api-types';

export interface GetEpisodesSuccess extends Action {
  type: string;
  episodes: Episode[];
}

export interface GetEpisodesFail extends Action {
  type: string;
}

export interface GetEpisodes extends Action{
  type: string;
}
export type EpisodesAction = GetEpisodesSuccess | GetEpisodes;
