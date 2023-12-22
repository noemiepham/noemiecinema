import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import searchState from "./redux/search.reducer";
import { applyMiddleware } from "redux";

const rootReducer = combineReducers({
  searchState: searchState,
});

/* const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk),
}); */

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
