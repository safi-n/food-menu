import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import classes from './headerCartBtn.module.css'
const HeaderCartButton = () => {
  return (
    <button className={classes['cart-button']}>
      <span><ShoppingCartIcon/></span>
      <span>Your Cart</span>
      <span className={classes['cart-added']}>0</span>
    </button>
  )
}

export default HeaderCartButton
