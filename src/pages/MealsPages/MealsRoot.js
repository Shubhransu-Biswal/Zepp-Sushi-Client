import { useContext, useEffect } from "react";
import { Link, Outlet, NavLink, useLocation } from "react-router-dom";
import style from "./MealsRoot.module.css";
import App from "../../App";
import CartContext from "../../componenets/Store/cart-context";
import { getAuthToken } from "../../utils/auth";
import { BASE_URL } from "../../helper";

const MealsRoot = () => {
  // To scroll to top
  const { mealRoot } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [mealRoot]);

  const ctx = useContext(CartContext);
  const { changeMenu } = ctx;
  const { items, isOne, totalAmount } = ctx;
  // sending cart to backend
  useEffect(() => {
    const sendObj = { items, isOne, totalAmount };
    const token = getAuthToken();
    async function sendCart() {
      const response = await fetch(`${BASE_URL}/api/v1/userCart`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(sendObj),
      });

      if (!response.ok) {
        throw new Error("error occured");
      }
    }
    sendCart();
  }, [ctx, isOne, totalAmount, items]);

  const backHandler = () => {
    changeMenu(-ctx.isOne);
  };
  const sushiHandler = () => {
    changeMenu(1);
  };
  const ramenHandler = () => {
    changeMenu(1);
  };
  const drinksHandler = () => {
    changeMenu(1);
  };
  return (
    <section className={style.orderItemsSection}>
      <App></App>
      <nav className={style.mealNavigation}>
        <ul>
          <li>
            <NavLink
              onClick={sushiHandler}
              to={"one"}
              className={({ isActive }) => {
                if (isActive && ctx.isOne >= 1) {
                  return style.navlinkActive;
                }
              }}
              style={{
                backgroundColor: `${
                  ctx.isOne < 1 ? "rgba(198, 40, 60, 1)" : ""
                }`,
              }}
              end
            >
              Sushi
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={ramenHandler}
              to={"two"}
              className={({ isActive }) =>
                isActive ? style.navlinkActive : ""
              }
            >
              Ramen
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={drinksHandler}
              to={"three"}
              className={({ isActive }) =>
                isActive ? style.navlinkActive : ""
              }
            >
              Drinks
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* All children pages will go here */}
      <div className={style.mealsCard}>
        <Outlet />
      </div>
      <div className={style.backToHome}>
        <Link to={"/Home"} onClick={backHandler}>
          <span>&larr;</span> Back To Home Page
        </Link>
      </div>
    </section>
  );
};

export default MealsRoot;
