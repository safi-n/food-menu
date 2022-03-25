import React from 'react'
import classes from './cartItem.module.css'

const CartItem = props => {
  const price = `$${props.price.toFixed(2)}`
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div>
          <span className={classes.amount}>{props.amount}</span>
          <span className={classes.price}>{price}</span>
        </div>
      </div>
      <div className={classes.action}>
        <button onClick={props.onAdd}>+</button>
        <button onClick={props.onRemove}>-</button>
      </div>
    </li>
  );
}

export default CartItem
