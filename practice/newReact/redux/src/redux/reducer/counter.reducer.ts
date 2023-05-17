import {createReducer} from "@reduxjs/toolkit";
import {increment, decrement, addByValue} from "../actions/counter.action";

const initialState = {
  counter: 0
};

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, _action) => {
      state.counter += 1;
    })
    .addCase(decrement, (state, _action) => {
      state.counter -= 1;
    })
    .addCase(addByValue, (state, action) => {
      state.counter += action.payload
    })
});

export const counterSelected = (state) => state.counterState.counter