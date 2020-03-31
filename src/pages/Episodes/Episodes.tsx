import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { v1 as uuidv1 } from 'uuid';
import classnames from 'classnames';
import { getAnimeEpisodes } from '../../store/thunk';
import {
  ConnectedEpisodesProps,
  IMapDispatchToProps,
  IMapStateToProps
} from './models/connected-episodes-types';

const mapDispatchToProps = (
  dispatch: Dispatch<Action>
): IMapDispatchToProps => ({
  getAnime: () => dispatch(getAnimeEpisodes()),
});

const mapStateToProps = (state) :IMapStateToProps => ({
  episodes: state.anime.episodes
});

class ConnectedEpisodes extends React.Component<ConnectedEpisodesProps, {}> {
  constructor(props: ConnectedEpisodesProps) {
    super(props);
    this.state = {
      loading: true
    };
  }

  getSnapshotBeforeUpdate = prevProps => {
    const { episodes } = this.props;
    if (episodes !== undefined && episodes !== prevProps.episodes) {
      this.setState({
        loading: false
      });
    }
    return null;
  };

  componentDidMount = () => {
    const { getAnime } = this.props;
    getAnime();
  };

  render() {
    const { loading } = this.state;
    const { episodes } = this.props;
    const preloaderClasses = classnames('', { 'lds-dual-ring': loading });

    return (
      <div className="container">
        <div className={preloaderClasses} />
        <div className="list">
          <ul className="episodes flex fd-column ai-center">
            {episodes.map(({ title, video_url, forum_url }) => (
              <li key={uuidv1()} className="episode flex jcsb ai-center">
                <div>
                  <h3>{title}</h3>
                </div>
                <div className="btn-block">
                  <a className="btn-link" href={video_url}>
                    Watch video
                  </a>
                  <a className="btn-link" href={forum_url}>
                    Open forum
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const Episodes = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedEpisodes);
export default Episodes;
