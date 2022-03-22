import React from 'react'
const DUMMY_MEAL = [
  {
    id: 'm1',
    name: 'Pasta',
    price: 95,
    description: 'Italian Pasta, ma maa mia'
  },
  {
    id: 'm2',
    name: 'Spegatie',
    price: 60,
    description: 'Bolegian Hot spegatie, ma maa mia'
  },
  {
    id: 'm3',
    name: 'Shorwa',
    price: 120,
    description: 'Afghani home made soup'
  }
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEAL.forEach(meal => <li>{meal.name}</li>)
  return (
    <section>
      <ul>
        {mealsList}
      </ul>
    </section>
  )
}

export default AvailableMeals
