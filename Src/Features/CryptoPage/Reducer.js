const initialState = {
  ListData: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        ListData: action.payload,
      };
    default:
      return state;
  }
};
