import React from "react";
import Modal from "../UI/Modal";
import classes from './cart.module.css'

const Cart = () => {
  const cartItems = [
    { id: "m1", name: "shorwa", description: "yumm yuma", price: "12" },
  ].map((item) => <li className={classes['list-item']}>{item.name}</li>);

  return (
  <Modal>
    {cartItems}
    <div className={classes.amount}>
      <span className={classes['amount-total']}>Total amount</span>
      <span>21</span>
    </div>
    <div className={classes['button-area']}>
      <button className={classes['btn-danger']}>Close</button>
      <button className={classes['btn-success']}>Order</button>
    </div>
  </Modal>
  );
};

export default Cart;
