import { Fragment, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Modal from './components/UI/Modal';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const showCartHandler = () => {
    setCartIsShown(true)
  }
  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  return (
    <Fragment>
      {cartIsShown && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
      <footer className="footer">
        <h2>&copy; 2022</h2>
      </footer>
    </Fragment>
  );
}

export default App;
