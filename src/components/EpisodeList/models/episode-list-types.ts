import { Episode } from '../../../global-models';

export interface EpisodeListProps {
    
}

export interface PropsFromState{
    episodes: Episode[]
}

export type EpisodeListAllProps = EpisodeListProps & PropsFromState;