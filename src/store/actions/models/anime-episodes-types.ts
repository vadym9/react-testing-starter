import { Episode } from '../../../global-models';
import { Action } from 'redux';

export interface GetEpisodesSuccess extends Action {
    type: string,
    episodes: Episode[]
}

export interface GetEpisodesFail extends Action {
    type: string
}

export interface GetEpisodes extends Action{
    type: string
}
export type EpisodesAction = GetEpisodesSuccess | GetEpisodes;