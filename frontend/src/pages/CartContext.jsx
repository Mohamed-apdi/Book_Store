import { createContext, useContext, useReducer } from "react";

// Initial state for the shopping cart
const initialCartState = {
  cartItems: [],
};

// Define action types
const ADD_TO_CART = "ADD_TO_CART";

// Reducer function to handle cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

// Create the Cart Context
const CartContext = createContext();

// Custom hook to access the Cart Context
export const useCart = () => useContext(CartContext);

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCart = (book) => {
    dispatch({ type: ADD_TO_CART, payload: book });
  };

  return (
    <CartContext.Provider value={{ cartState, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
