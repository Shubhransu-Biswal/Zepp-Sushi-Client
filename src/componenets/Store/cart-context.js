import React from "react";
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  isOne: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  changeMenu: () => {},
});

export default CartContext;
