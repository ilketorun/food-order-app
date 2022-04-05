import { useReducer } from "react";
import CartContext from "./cart-context";

const defaulCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedAmounts =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedAmounts,
    };
  }

  return defaulCartState;
};

const ContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaulCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
