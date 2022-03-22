import React from 'react'
import classes from './mealItem.module.css'
const MealItem = props => {
  return (
    <li className={classes['meal-item']}>
      <div>
        <h2>{props.name}</h2>
        <div>{props.description}</div>
        <div>{props.price}</div>
      </div>
      <div></div>
    </li>
  )
}

export default MealItem
