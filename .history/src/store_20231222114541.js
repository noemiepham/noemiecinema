import { configureStore } from "@reduxjs/toolkit";
import 

const store = configureStore({
     reducer: rootReducer,
     middleware: [thunk]

})
