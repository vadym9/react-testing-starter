import * as React from 'react';

import { v1 as uuidv1 } from 'uuid';
import { connect } from 'react-redux';

import { ApplicationState } from '../../store/reducers';
import { EpisodeListProps } from './models/episode-list-types';
import EpisodeCard from '../Episode/Episode';

const mapStateToProps = ({ anime }: ApplicationState) => ({
  episodes: anime.episodes
});

class ConnectedEpisodeList extends React.Component<EpisodeListProps, {}> {
  render(): JSX.Element {
    const result = this.props.episodes.map((episode) => (
      <EpisodeCard key={uuidv1()} episode={episode} />
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
