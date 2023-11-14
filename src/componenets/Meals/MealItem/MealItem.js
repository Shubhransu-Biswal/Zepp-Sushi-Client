import style from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `₹${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={style.meal}>
      <div className={style.imgContainer}>
        <img src={props.image} alt="" />
      </div>
      <div className={style.menuDescriptionContainer}>
        <h3>{props.name}</h3>
        <div className={style.description}>{props.description}</div>
      </div>
      <div>
        <div className={style.selectQuantity}>
          <div className={style.price}>{price}</div>
          <MealItemForm
            id={props.id}
            onAddToCart={addToCartHandler}
          ></MealItemForm>
        </div>
      </div>
    </li>
  );
};

export default MealItem;
