import { Fragment } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals/>
      </main>

      <footer className='footer'>
        <h2>© 2022</h2>
      </footer>
    </Fragment>
  );
}

export default App;
