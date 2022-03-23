import React from "react";

const Cart = () => {
  const cartItems = [
    { id: "m1", name: "shorwa", description: "yumm yuma", price: "12" },
  ].map((item) => <li>{item.name}</li>);

  return (
  <div>
    {cartItems}
    <div>
      <span>Total amount</span>
      <span>21</span>
    </div>
    <div>
      <button>Order</button>
      <button>Cancel</button>
    </div>
  </div>
  );
};

export default Cart;
