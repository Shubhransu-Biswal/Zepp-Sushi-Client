import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import RouterApp from "./RouterApp";
import CartProvider from "./componenets/Store/CartProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterApp />
    </CartProvider>
  </React.StrictMode>
);
reportWebVitals();
