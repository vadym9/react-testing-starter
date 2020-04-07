import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import classnames from 'classnames';
import { ThunkDispatch } from 'redux-thunk';

import { getAnimeEpisodes } from '../../store/thunk';
import {
  EpisodesAllProps,
  MapDispatchToProps,
  MapStateToProps
} from './models/connected-episodes-types';
import EpisodeList from '../../components/EpisodeList/EpisodeList';
import { ApplicationState } from '../../store/reducers';

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>): MapDispatchToProps => ({
  getAnimeEpisodes: (): Promise<void> => dispatch(getAnimeEpisodes())
});

const mapStateToProps = (state: ApplicationState): MapStateToProps => ({
  loading: state.anime.loading
});

class ConnectedEpisodes extends React.Component<EpisodesAllProps, {}> {
  componentDidMount = (): void => {
    this.props.getAnimeEpisodes();
  };

  render(): JSX.Element {
    const { loading } = this.props;
    const preloaderClasses: string = classnames('', {
      'lds-dual-ring': loading
    });
    return (
      <div className="container">
        <div className={preloaderClasses} />
        <EpisodeList />
      </div>
    );
  }
}

const Episodes = connect<MapStateToProps, MapDispatchToProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedEpisodes);

export default Episodes;
