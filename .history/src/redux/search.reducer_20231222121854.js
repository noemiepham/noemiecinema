import * as types from "./search.type";

const initialState = {
  data: undefined,
  loading: false,
  success: false,
  error: undefined,
};

const searchReducer = (state = initialState, action) => {
  switch (action) {
    case types.SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.SEARCH_SUCCESS:

    case types.SEARCH_ERROR:
      break;

    default:
      return state;
  }
};

export default searchReducer;
