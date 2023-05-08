import {ProductInterface} from "../../interfaces/ProductInterface";

interface State {
  count: number,
  products: ProductInterface[]
  addToCard: (product: ProductInterface) => void
}

export const initialState:State = {
  count: 0,
  products: [],
  addToCard:() => {}
};

interface Action {
  type: string;
  payload: {
    products: ProductInterface[]
  };
}

const CardReducer = (state, action:Action) => { // :State here :)
  const {type, payload} = action;

  switch (type) {
  case "ADD_TO_CARD":
    return {
      ...state,
      products: payload.products
    };
  default:
    return false;
  }
};

export default CardReducer;