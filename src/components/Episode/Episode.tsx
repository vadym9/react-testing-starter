import * as React from 'react';
//  TODO Fix
// import React from 'react';
import { v1 as uuidv1 } from 'uuid';

import { Episode } from '../../global-models';

const EpisodeCard = ({ episode }: { episode: Episode }): JSX.Element => {
  const { title, video_url, forum_url } = episode;
  return (
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
  );
};

export default EpisodeCard;
