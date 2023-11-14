import Cart from "./componenets/Cart/Cart";
import Header from "./componenets/Layout/Header";
import { useState } from "react";

function App() {
  const [isCartOpen, changeCartStatus] = useState(false);
  const openCartHandler = () => {
    changeCartStatus(true);
  };
  const closeCartHandler = () => {
    changeCartStatus(false);
  };
  return (
    <>
      {isCartOpen && <Cart onCloseCart={closeCartHandler}></Cart>}
      <Header onOpenCart={openCartHandler}></Header>
      <main>{/* <Meals></Meals> */}</main>
    </>
  );
}

export default App;
