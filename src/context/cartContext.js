import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialstate = {
  carts: [],
};

function reducerFunc(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CART":
      return { carts: [...state.carts, payload] };
    case "REMOVE_ALL_CART":
      return { carts: [] };
    default:
      throw new Error();
  }
}

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialstate);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};
