import {Fragment} from 'react'
import classes from "./header.module.css"
import mealHeader from '../../assets/img/header.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div>
          <h2>React Menu</h2>
          <HeaderCartButton />
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
