import { savePeople, getPeopleSuccess, getPeopleFail, getPeopleA } from './sw-people-actions';
import { getEpisodesSuccess, getEpisodesFail, getEpisodes} from './anime-episodes';
import { getStarshipsA, getStarshipsSuccess, getStarshipsFail } from './sw-starships-actions';

export {
  getEpisodes,
  getEpisodesSuccess,
  getEpisodesFail,

  getPeopleSuccess,
  getPeopleFail,
  savePeople,
  getPeopleA,

  getStarshipsA,
  getStarshipsSuccess,
  getStarshipsFail
}
