import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';

import classnames from 'classnames';
import { getAnimeEpisodes } from '../../store/thunk';
import { EpisodesAllProps } from './models/connected-episodes-types';
import { ThunkDispatch } from 'redux-thunk';
import EpisodeList from '../../components/EpisodeList/EpisodeList';
import { ApplicationState } from '../../store/reducers';

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>) => ({
  getAnimeEpisodes: () => dispatch(getAnimeEpisodes())
});

const mapStateToProps = (state: ApplicationState) => ({
  loading: state.anime.loading
});

class ConnectedEpisodes extends React.Component<EpisodesAllProps, {}> {
  componentDidMount = () => {
    this.props.getAnimeEpisodes();
  };

  render() {
    const { loading } = this.props;
    const preloaderClasses = classnames('', { 'lds-dual-ring': loading });
    return (
      <div className="container">
        <div className={preloaderClasses} />
        <EpisodeList />
      </div>
    );
  }
}

const Episodes = connect<{}, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedEpisodes);

export default Episodes;
