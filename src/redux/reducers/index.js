const initialState = {
  name: '',
  number: 0,
  episodes: [],
  people: [],
  starships: []
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
    case 'GET_EPISODES_SUCCESS':
      return {
        ...state,
        episodes: [...payload]
      };
    case 'GET_PEOPLE_SUCCESS':
      return {
        ...state,
        people: [...payload]
      };

    case 'DELETE_CARD':
      return {
        ...state,
        people: [...payload]
      };

    case 'GET_STARSHIPS_SUCCESS':
      return {
        ...state,
        starships: [...payload]
      };
    default:
      return state;
  }
};

export default rootReducer;
