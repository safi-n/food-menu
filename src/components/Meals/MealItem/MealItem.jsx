import React from 'react'
import MealForm from './MealForm'
import classes from './mealItem.module.css'
const MealItem = props => {
  const price = props.price.toFixed(2)
  return (
    <li className={classes['meal-item']}>
      <div>
        <h2>{props.name}</h2>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <MealForm />
      </div>
    </li>
  )
}

export default MealItem
