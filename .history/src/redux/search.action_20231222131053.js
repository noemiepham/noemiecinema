import * as types from "./search.type";

const doSearch = (payload) => {
  console.log(payload);
  return (dispatch) => {
    //step 1: inform the search action is loading
    dispatch({
      type: types.SEARCH_REQUEST,
    });

    // step 2: call to the backend to retrieve the result

    let url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
    fetch(url, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        // Add your API key to the Authorization header
        Authorization: `Bearer ${token}`,
      }),
    }).then(() => 
      (res) => {
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

export default doSearch;
