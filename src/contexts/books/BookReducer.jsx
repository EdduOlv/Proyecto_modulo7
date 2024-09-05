const reducer = (globalState, action) => {
  switch (action.type) {
    case "SET-BOOKS":
      return {
        ...globalState,
        books: action.payload,
      };
    default:
      return globalState;
  }
};

export default reducer;
