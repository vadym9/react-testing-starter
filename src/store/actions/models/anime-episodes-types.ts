import { GET_EPISODES_SUCCESS, GET_EPISODES_FAIL, GET_EPISODES } from '../../constants';
import { Episode } from '../../../global-models';
import { Action } from 'redux';

export interface GetEpisodesSuccess extends Action {
    type: GET_EPISODES_SUCCESS,
    episodes: Episode[]
}

export interface GetEpisodesFail extends Action {
    type: GET_EPISODES_FAIL
}

export interface GetEpisodes extends Action{
    type: GET_EPISODES
}
export type EpisodesAction = GetEpisodesSuccess;