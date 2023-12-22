import * as types from "./search.type";

const doSearch = (payload) => {
  return (dispatch) => {
    console.log(payload, process.env.REACT_APP_API_TOKEN);
    //step 1: inform the search action is loading
    dispatch({
      type: types.SEARCH_REQUEST,
    });

    // step 2: call to the backend to retrieve the result
    // payload = {
    //  searchKey: "dkjhdihjsogoi",
    //  page: 1
    //}
    let url = `https://api.themoviedb.org/3/search/movie?query=${payload.searchKey}&include_adult=false&language=en-US&page=${payload.page}`;
    fetch(url, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      }),
    }).then(
      () => (res) => {
        dispatch({
          type: types.SEARCH_SUCCESS,
          data: res.json(),
        });
      },
      (error) => {
        dispatch({
          type: types.SEARCH_SUCCESS,
          data: error,
        });
      }
    );
  };
};

export default doSearch;
