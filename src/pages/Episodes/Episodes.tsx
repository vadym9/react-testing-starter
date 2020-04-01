import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';

import classnames from 'classnames';
import { getAnimeEpisodes } from '../../store/thunk';
import {
  EpisodesAllProps,
  EpisodesState
} from './models/connected-episodes-types';
import { ThunkDispatch } from 'redux-thunk';
import EpisodeList from '../../components/EpisodeList/EpisodeList';

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>) => ({
  getAnimeEpisodes: () => dispatch(getAnimeEpisodes())
});

class ConnectedEpisodes extends React.Component<
  EpisodesAllProps,
  EpisodesState
> {
  constructor(props: EpisodesAllProps) {
    super(props);
    this.state = {
      loading: true
    };
  }

  getSnapshotBeforeUpdate = (prevProps: EpisodesAllProps): EpisodesAllProps => {
    const { episodes } = this.props;
    if (episodes !== undefined && episodes !== prevProps.episodes) {
      this.setState({
        loading: false
      });
    }
    return null;
  };

  componentDidMount = () => {
    this.props.getAnimeEpisodes();
  };

  render() {
    const { loading } = this.state;
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
  null,
  mapDispatchToProps
)(ConnectedEpisodes);

export default Episodes;
