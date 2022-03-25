import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from "./headerCartBtn.module.css";
import CartContext from "../../context/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const buttonClasses = `${classes['cart-button']} ${classes.bump}`
  const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  },0);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span>
        <ShoppingCartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes["cart-added"]}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
