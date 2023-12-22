import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import searchState from "./redux/search.reducer";
import { createStore, applyMiddleware } from "redux";

const rootReducer = combineReducers({
  searchState,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: applyMiddleware(thunk),
});

export default store;
