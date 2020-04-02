import { ActionCreator } from 'redux';

import { GET_EPISODES_SUCCESS, GET_EPISODES_FAIL, GET_EPISODES } from '../constants';
import { Episode } from '../../global-models';
import { GetEpisodesSuccess, GetEpisodesFail, GetEpisodes } from './models/anime-episodes-types';

export const getEpisodesSuccess: ActionCreator<GetEpisodesSuccess> = (e: Episode[]) => ({
    type: GET_EPISODES_SUCCESS,
    episodes: e
});

export const getEpisodesFail: ActionCreator<GetEpisodesFail> = () => ({
    type: GET_EPISODES_FAIL
})

export const getEpisodes: ActionCreator<GetEpisodes> = () => ({
    type: GET_EPISODES
})