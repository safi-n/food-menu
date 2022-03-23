import CartContext from './cart-context'
const CartProvider = props => {

  const addToCartHandler = item => {}
  const deleteFromCartHandler = id => {}

  const cartContext = {
    item:[],
    totalAmount:0,
    addItem: addToCartHandler,
    removeItem: deleteFromCartHandler
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
