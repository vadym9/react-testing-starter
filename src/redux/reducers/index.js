const initialState = {
  name: '',
  number: 0
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
    default:
      return state;
  }
};

export default rootReducer;
