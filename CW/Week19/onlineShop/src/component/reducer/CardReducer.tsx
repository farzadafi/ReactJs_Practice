interface State {
  count: number;
  products: [];
}

interface Action {
  type: string;
  payload: {
    products: []
  };
}

export const initialState = {
  count: 0,
  products: [],
};

const CardReducer = (state: State, action:Action) => {
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