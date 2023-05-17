import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./slices/counter.slice";

const store = configureStore({
  reducer : {
    // counterState : counterReducer
    counterState : counterSlice
  }
})

export default store;