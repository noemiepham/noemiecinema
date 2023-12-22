import fetch from "node-fetch";
import * as types from "./search.type";

const doSearch = (payload) => {
  return (dispatch) => {
    dispatch({
      type: types.SEARCH_REQUEST,
    });
    const data = await fetchApi(`${baseUrl}/auto-complete?query=${searchTerm}`);
  };
};

export default doSearch;
