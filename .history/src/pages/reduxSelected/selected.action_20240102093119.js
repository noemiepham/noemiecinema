import * as types from "./selected.type";

const doSearch = (payload) => {
  return (dispatch) => {
    const token = process.env.REACT_APP_API_TOKEN;
    console.log(payload, token);
    //step 1: inform the search action is loading
    dispatch({
      type: types.SELECTED_REQUEST,
    });

    // step 2: call to the backend to retrieve the result
    const params = {
      query: payload.selectedKey,
      page: payload.page,
      include_adult: false,
      language: payload.language,
    };
    //let url = `https://api.themoviedb.org/3/search/movie?query=${payload.searchKey}&include_adult=false&language=en-US&page=${payload.page}`;
    fetch(buildApiUrl(params), {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data.success && !data.results) {
          dispatch({
            type: types.SELECTED_ERROR,
            data: data,
          });
        } else {
          dispatch({
            type: types.SELECTED_SUCCESS,
            data: data,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        dispatch({
          type: types.SELECTED_SUCCESS,
          data: error,
        });
      });
  };
};

const buildApiUrl = (payload) => {
  let rootUrl = "https://api.themoviedb.org/3/search/movie?";

  if (payload) {
    rootUrl += toQuery(payload);
  }
  return rootUrl;
  // ?query=${payload.searchKey}&include_adult=false&language=en-US&page=${payload.page}`;

  /*  switch (payload.type) {
    case "header_search":
      break;

    case "language_search":
      break;
    case "popular_search":
      break;

    default:
      break;
  } */
};

const toQuery = (params) => {
  return Object.keys(params)
    .map((key) => {
      return key + "=" + params[key];
    })
    .join("&");
};

export default doSearch;
