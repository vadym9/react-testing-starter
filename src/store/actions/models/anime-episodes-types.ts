import { GET_EPISODES_SUCCESS, GET_EPISODES_FAIL } from '../../constants';
import { Episode } from '../../../global-models';

export interface GetEpisodesSuccess {
    type: GET_EPISODES_SUCCESS,
    episodes: Episode[]
}

export interface GetEpisodesFail{
    type: GET_EPISODES_FAIL
}

export type GetEpisodes = GetEpisodesSuccess;