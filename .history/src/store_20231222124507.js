import { combineReducers, configureStore } from "@reduxjs/toolkit";

import searchState from "./redux/search.reducer";
import { createStore, applyMiddleware } from "redux";

const rootReducer = combineReducers({
  searchState,
});

/* const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk),
}); */

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
