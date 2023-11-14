import { useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import style from "./HeaderBtn.module.css";
import CartContext from "../Store/cart-context";
import { getAuthToken } from "../../utils/auth";
import { BASE_URL } from "../../helper";

const HeaderBtn = (props) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const ctx = useContext(CartContext);

  // This will get the cart details from db and will set the items
  let runOnce = true;

  useEffect(() => {
    const token = getAuthToken();
    async function getMyCart() {
      const response = await fetch(`${BASE_URL}/api/v1/userCart`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (!response.ok) {
        throw new Error("error occured");
      }
      const resData = await response.json();

      // clearing before adding to prevent bug
      ctx.clearCart();
      // sending userName to Header
      props.sendData(resData.body.userData.user_id.userName);
      // adding items to ctx
      const items = resData.body.userData.cart.items;
      items.forEach((el) => {
        ctx.addItem(el);
      });
      const numberOfCartItems = ctx.items.reduce((acc, item) => {
        return acc + item.amount;
      }, 0);
      setTotalItems((el) => (el = numberOfCartItems));
    }
    if (!runOnce) return;
    getMyCart();
    runOnce = false;
  }, []);

  // after the component is rendered first , then after it will make sure to set the cart items quantity
  const numberOfCartItemsCTX = ctx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  // for nice bump btn animation
  const btnClasses = `${style.button} ${btnIsHighLighted ? style.bump : ""}`;
  const { items } = ctx;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighLighted(true);

    const timer = setTimeout(() => setBtnIsHighLighted(false), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfCartItemsCTX || totalItems}</span>
    </button>
  );
};

export default HeaderBtn;
