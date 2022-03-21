import {Fragment} from 'react'
import classes from "./header.module.css"
import mealHeader from '../../assets/img/header.jpg'

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>React Menu</h2>
      </header>

      <div className={classes['img-container']}>
        <img
        src={mealHeader}
        alt="header picture"
        className={classes.headerImg} />
      </div>
    </Fragment>
  )
}

export default Header
