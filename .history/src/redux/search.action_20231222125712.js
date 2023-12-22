import * as types from "./search.type";

const doSearch = (payload) => {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: types.SEARCH_REQUEST,
    });
  };
};

export default doSearch;
