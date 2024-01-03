import * as types from "./selected.type";

const initialState = {
  data: undefined,
  loading: false,
  success: false,
  error: undefined,
};

const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECTED_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.SELECTED_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.data,
      };

    case types.SELECTED_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.data,
      };

    default:
      return state;
  }
};

export default selectedReducer;
