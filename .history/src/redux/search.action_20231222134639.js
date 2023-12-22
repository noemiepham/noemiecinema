import * as types from "./search.type";

const doSearch = (payload) => {
  return (dispatch) => {
    const token = process.env.REACT_APP_API_TOKEN;
    console.log(payload, token);
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
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTk3M2JlMzJiODZmM2FjNzg4NGJjM2VkYjAwN2U2YSIsInN1YiI6IjY1N2FkNjEyZWM4YTQzMDExYTNiNWJkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dNZI1WkeIVJ1Nx2AoCXDWFn-yZzKyErXcDQbMc4E2Bs",
      }),
    }).then(
      () => (res) => {
        dispatch({
          type: types.SEARCH_SUCCESS,
          data: res.json(),
        });
      },
      (error) => {
        console.log(error);
        dispatch({
          type: types.SEARCH_SUCCESS,
          data: error,
        });
      }
    );
  };
};

export default doSearch;
