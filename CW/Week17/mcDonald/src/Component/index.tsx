import {createStore} from "redux";

type AppState = {
  price: number;
  services: number
};

const initialState: AppState = {
  price: 0,
  services: 0
};

type IncrementAction = {
  type: "INCREMENT";
  incrementPayload: number;
}

type DecrementAction = {
  type: "DECREMENT";
  decrementPayload: number;
}

let result:number = 0

function reducer(state = initialState, action: any) {
  let price = state.price
  let finalPrice : number;

  switch (action.type) {
  case "INCREMENT": {
    const {incrementPayload} = action as IncrementAction;
    finalPrice = price + incrementPayload
    if( finalPrice == 0 )
      result = incrementPayload * 0.05
    else
      result = finalPrice * 0.05
    return {...state, price: finalPrice, services: result};
  }
    case "DECREMENT":
      const {decrementPayload} = action as DecrementAction;
      finalPrice = price - decrementPayload
      result = finalPrice * 0.05
      price = state.price
      return {...state, price: finalPrice, services: result};
  default:
    return state;
  }
}

const store = createStore(reducer);

export default store;