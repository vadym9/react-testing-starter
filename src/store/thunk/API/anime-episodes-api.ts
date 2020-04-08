export const requestEpisodes: Function = (): Promise<Response> => fetch('https://api.jikan.moe/v3/anime/1/episodes');
