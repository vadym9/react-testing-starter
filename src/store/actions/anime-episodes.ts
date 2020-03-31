import { GET_EPISODES_SUCCESS, GET_EPISODES_FAIL } from '../constants';
import { Episode } from '../../global-models';
import { GetEpisodesSuccess, GetEpisodesFail } from './models/anime-episodes-types';

export const getEpisodesSuccess = (e: Episode[]): GetEpisodesSuccess => ({
    type: GET_EPISODES_SUCCESS,
    episodes: e
});

export const getEpisodesFail = (): GetEpisodesFail => ({
    type: GET_EPISODES_FAIL
})