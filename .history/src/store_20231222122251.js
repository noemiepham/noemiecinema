import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
i

const rootReducer = combineReducers({
     searchState: 
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
