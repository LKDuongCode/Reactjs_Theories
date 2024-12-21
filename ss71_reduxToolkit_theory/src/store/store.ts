import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/countReducer";

//configureStore gần giống combineReducer trong redux thuần.
export let store = configureStore({
    reducer: {
      counts:countReducer,
    },
  })