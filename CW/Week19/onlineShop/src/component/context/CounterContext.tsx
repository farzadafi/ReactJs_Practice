import {createContext, ReactNode, useContext, useReducer} from "react";
import CardReducer, {initialState} from "../reducer/CardReducer";

const ShopContext = createContext(initialState);

// interface PropsReact {
//   children: ReactNode;
// }
//
// interface Props {
//   product: ProductInterface;
// }

export const ShopProvider = ({children}) => {
  const [state, dispatch] = useReducer(CardReducer, initialState);

  const addToCard = (product) => {
    // const updateCart = state.products.concat(product)
    const updateCart = [...state.products, product]

    dispatch({
      type: "ADD_TO_CARD",
      payload: {
        products: updateCart
      }
    });
  };

  const value = {
    count: state.count,
    products: state.products,
    addToCard
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined)
    throw new Error("naser eat you!!");

  return context;
};