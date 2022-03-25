import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./cart.module.css";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAdd={cartItemAddHandler.bind(null, item)}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
    />
  ));

  return (
    <Modal onClick={props.onHideCart}>
      <div className={classes.adjust}>{cartItems}</div>
      <div className={classes.amount}>
        <span className={classes["amount-total"]}>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes["button-area"]}>
        <button className={classes["btn-danger"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes["btn-success"]}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
