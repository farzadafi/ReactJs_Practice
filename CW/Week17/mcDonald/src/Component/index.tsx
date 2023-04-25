import {createStore} from "redux";

type AppState = {
  count: number;
};

const initialState: AppState = {
  count: 0,
};

type IncrementAction = {
  type: "INCREMENT";
  incrementPayload: number;
}

type DecrementAction = {
  type: "DECREMENT";
  decrementPayload: number;
}

function reducer(state = initialState, action: any) {
  switch (action.type) {
  case "INCREMENT":
    const {incrementPayload} = action as IncrementAction;
    return {...state, count: state.count + incrementPayload};
    case "DECREMENT":
      const {decrementPayload} = action as DecrementAction;
      return {...state, count: state.count - decrementPayload};
  default:
    return state;
  }
}

const store = createStore(reducer);

export default store;