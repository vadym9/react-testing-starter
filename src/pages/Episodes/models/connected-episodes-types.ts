export interface MapDispatchToProps {
  getAnimeEpisodes: Function;
}

export interface MapStateToProps {
  loading: boolean;
}

export type EpisodesAllProps = MapStateToProps & MapDispatchToProps
