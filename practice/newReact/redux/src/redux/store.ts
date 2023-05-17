import {configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "./reducer/counter.reducer";

const store = configureStore({
  reducer : {
    counterState : counterReducer
  }
})

export default store;