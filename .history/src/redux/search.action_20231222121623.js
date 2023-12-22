import fetch from "node-fetch";
import * as types from "./search.type";

const doSearch = (payload) => {
  return (dispatch) => {
    dispatch({
      type: types.SEARCH_REQUEST,
    });
  };
};

export default doSearch;
