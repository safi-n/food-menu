import React, { useContext, useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from "./headerCartBtn.module.css";
import CartContext from "../../context/cart-context";

const HeaderCartButton = (props) => {
  const [btnBumped, setBtnBumped] = useState(false)
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;
  const buttonClasses = `${classes['cart-button']} ${btnBumped ? classes.bump : ''}`
  const numberOfCartItem = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  },0);
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnBumped(true)
    const timer = setTimeout(() => {
      setBtnBumped(false)
    }, 300);

    return () => {
      clearTimeout(timer)
    }
  }, [items])

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
