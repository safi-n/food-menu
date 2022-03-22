import React from "react";
import Card from "../UI/Card";
import classes from "./available.module.css";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEAL = [
  {id: "m1",name: "Pasta",price: 95,description: "Italian Pasta, ma maa mia"},
  {id: "m2",name: "Spegatie",price: 60,description: "Bolegian Hot spegatie, ma maa mia"},
  {id: "m3",name: "Shorwa",price: 120,description: "Afghani home made soup"},
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEAL.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes["meals-list"]}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
