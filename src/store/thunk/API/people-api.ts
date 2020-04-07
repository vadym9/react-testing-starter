export const requestPeople: Function = (): Promise<Response> => fetch('https://swapi.co/api/people/');
export const requestRandomImages: Function = (): Promise<Response> => fetch(`https://api.unsplash.com/photos/?client_id=${process.env.ACCESS_KEY}`);
