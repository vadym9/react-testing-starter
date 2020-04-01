import { savePeople, getPeopleSuccess, getPeopleFail } from './sw-people-actions';
import { getEpisodesSuccess, getEpisodesFail, getEpisodes} from './anime-episodes';
import { getStarships, getStarshipsSuccess, getStarshipsFail } from './sw-starships-actions';

export {
  getEpisodes,
  getEpisodesSuccess,
  getEpisodesFail,

  getPeopleSuccess,
  getPeopleFail,
  savePeople,

  getStarships,
  getStarshipsSuccess,
  getStarshipsFail
}
