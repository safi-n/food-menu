import { Fragment } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import AvailableMeals from './components/Meals/AvailableMeals';
import Summary from './components/Meals/Summary';

function App() {
  return (
    <Fragment>
      <Header />
      <Summary />
      <AvailableMeals/>
    </Fragment>
  );
}

export default App;
