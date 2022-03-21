import {Fragment} from 'react'
import classes from "./header.module.css"
import mealHeader from '../../assets/img/header.jpg'

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div>
          <h2>React Menu</h2>
          <button> Cart </button>
        </div>
      </header>

      <div className={classes['img-container']}>
        <img
        src={mealHeader}
        alt="header picture"/>
      </div>
    </Fragment>
  )
}

export default Header
