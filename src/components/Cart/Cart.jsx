import React from "react";
import Modal from "../UI/Modal";
import classes from './cart.module.css'

const Cart = () => {
  const cartItems = [
    { id: "m1", name: "shorwa", description: "yumm yuma", price: "12" },
  ].map((item) => <li>{item.name}</li>);

  return (
  <Modal>
    {cartItems}
    <div>
      <span>Total amount</span>
      <span>21</span>
    </div>
    <div>
      <button>close</button>
      <button>order</button>
    </div>
  </Modal>
  );
};

export default Cart;
