import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  value : 0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers : {
    increment : (state, _action) => {
        state.value += 1
    },
    decrement : (state, _action) => {
      state.value -= 1
    },
    addByValue : (state, action) => {
      state.value += action.payload.value
    }
  }
})

export const {decrement, addByValue, increment} = counterSlice.actions

export const counterSelected = (state) => state.counterState.value

export default counterSlice.reducer