import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import searchState from "./redux/search.reducer";

const rootReducer = combineReducers({
  searchState,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: thunk,
    }),
});

export default store;
