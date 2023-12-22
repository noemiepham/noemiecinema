import * as types from "./search.type";

const doSearch = (payload) => {
  console.log(payload);
  return (dispatch) => {
    //step 1: inform the search action is loading
    dispatch({
      type: types.SEARCH_REQUEST,
    });

    // step 2: call to the backend to retrieve the result
    const responseData = fetch;
    // step 3: inform search has been finished

    dispatch({
      type: types.SEARCH_SUCCESS,
      data: responseData,
    });
  };
};

export default doSearch;
