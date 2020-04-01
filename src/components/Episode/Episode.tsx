import * as React from 'react';
import { Episode } from '../../global-models';
import { v1 as uuidv1 } from 'uuid';
import { EpisodeAllProps } from './models/episode-types';

const Episode = ({ episode }: EpisodeAllProps) => (
  <li key={uuidv1()} className="episode flex jcsb ai-center">
    <div>
      <h3>{episode.title}</h3>
    </div>
    <div className="btn-block">
      <a className="btn-link" href={episode.video_url}>
        Watch video
      </a>
      <a className="btn-link" href={episode.forum_url}>
        Open forum
      </a>
    </div>
  </li>
);

export default Episode;
