import * as types from "./search.type";

const initialState = {
  data: undefined,
  loading: false,
  success: false,
  error: undefined,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.data,
      };

    case types.SEARCH_ERROR:
      break;

    default:
      return state;
  }
};

export default searchReducer;
