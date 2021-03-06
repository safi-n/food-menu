import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Modal from './components/UI/Modal';
import CartProvider from './context/CartProvider';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const showCartHandler = () => {
    setCartIsShown(true)
  }
  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
      <footer className="footer">
        <h2>&copy; 2022</h2>
      </footer>
    </CartProvider>
  );
}

export default App;
