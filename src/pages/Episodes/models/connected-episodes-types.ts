import { Dispatch, Action } from 'redux';

export interface ConnectedEpisodesProps {
  episodes: any;
}

export interface IMapDispatchToProps {
  getAnime: () => Dispatch<Action>,
}

export interface IMapStateToProps{
  episodes: []
}