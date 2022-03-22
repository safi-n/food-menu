import React from "react";
import classes from "./mealItem.module.css";

const MealForm = props => {
  return (
    <form className={classes['input-form']}>
      <input type="text" />
      <button>+ add</button>
    </form>
  );
};

export default MealForm;
