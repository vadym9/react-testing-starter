import * as React from 'react';

import { ApplicationState } from '../../store/reducers';
import { connect } from 'react-redux';
import { EpisodeListAllProps, PropsFromState } from './models/episode-list-types';
import Episode from '../Episode/Episode';
import { v1 as uuidv1 } from 'uuid';

const mapStateToProps = ({ anime }: ApplicationState) => ({
  episodes: anime.episodes
});

class ConnectedEpisodeList extends React.Component<EpisodeListAllProps, {}> {
  render() {
    const result = this.props.episodes.map(episode => (
      <Episode key={uuidv1()} episode={episode} />
    ));
    return (
      <div className="list">
        <ul className="episodes flex fd-column ai-center">{result}</ul>)
      </div>
    );
  }
}

const EpisodeList = connect(mapStateToProps)(ConnectedEpisodeList);

export default EpisodeList;
