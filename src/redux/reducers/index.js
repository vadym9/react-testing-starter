const initialState = {
  name: '',
  number: 0,
  episodes: []
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      console.log('increment');

      return {
        ...state,
        number: payload + 1
      };
    case 'GET_ANIME_EPISODES_SUCCESS':
      return {
        ...state,
        episodes: [...payload]
      };
    default:
      return state;
  }
};

export default rootReducer;
