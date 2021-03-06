import React from "react";
import Card from "../UI/Card";
import classes from "./available.module.css";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEAL = [
  {id: "m1",name: "Pasta",price: 21,description: "Italian Pasta, ma maa mia"},
  {id: "m2",name: "Spegatie",price: 14,description: "Bolegian Hot spegatie, ma maa mia"},
  {id: "m3",name: "Shorwa",price: 34,description: "Afghani home made soup"},
  {id: "m4",name: "Biryani",price: 12,description: "Afghani home made soup"},
  {id: "m5",name: "Manto",price: 23,description: "Afghani home made soup"}
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEAL.map((meal) => (
    <MealItem
      id={meal.id}
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
