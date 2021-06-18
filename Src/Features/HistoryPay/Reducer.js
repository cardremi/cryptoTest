const initialState = {
    ListHistory: [],
  };
  
  export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_HISTORY':
        return {
          ...state,
          ListHistory:state.ListHistory.concat(action.payload)
        };
      default:
        return state;
    }
  };
  