import React, { useContext } from "react";
import MealForm from "./MealForm";
import classes from "./mealItem.module.css";
import CartContext from "../../../context/cart-context";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const onAddtoCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  };
  return (
    <li className={classes["meal-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <MealForm onAddToCart={onAddtoCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
