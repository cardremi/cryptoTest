export const setListHistory = (payload) => {
    return {
      type: "SET_HISTORY",
      payload,
    };
  };
  export const putListHistory = (newData) => {
    return {
      type: "PUT_HISTORY",
      newData
    };
  };