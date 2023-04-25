import {createStore} from "redux";

type AppState = {
  price: number;
};

const initialState: AppState = {
  price: 0,
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
    return {...state, price: state.price + incrementPayload};
    case "DECREMENT":
      const {decrementPayload} = action as DecrementAction;
      return {...state, price: state.price - decrementPayload};
  default:
    return state;
  }
}

const store = createStore(reducer);

export default store;