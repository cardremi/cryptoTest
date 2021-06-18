export const setListData = (payload) => {
    return {
      type: "SET_DATA",
      payload,
    };
  };
  
  export const getListData = (payload) => {
    return {
      type: "GET_LIST_DATA",
      payload,
    };
  };