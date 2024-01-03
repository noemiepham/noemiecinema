import * as types from "./selected.type";

const doSelected = (payload) => {
  return (dispatch) => {
    const token = process.env.REACT_APP_API_TOKEN;
    console.log(payload, token);
    //step 1: inform the search action is loading
    dispatch({
      type: types.SELECTED_REQUEST,
    });

    // step 2: call to the backend to retrieve the result
    const params = {
      page: payload.page,
      language: payload.language,
      lists: payload.lists,
    };
    // 'https://api.themoviedb.org/3/movie/${lists}?language=${payload.language}&page=${payload.page}'
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
  let rootUrl = "https://api.themoviedb.org/3/movie/";

  if (payload) {
    rootUrl += toQuery(payload);
  }
  return rootUrl;
};

const toQuery = (params) => {
  return Object.keys(params)
    .map((key) => {
      return key + "=" + params[key];
    })
    .join("&");
};

export default doSelected;
