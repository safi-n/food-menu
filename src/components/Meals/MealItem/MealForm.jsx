import React from "react";
import Input from "../../UI/Input";
import classes from "./mealItem.module.css";

const MealForm = props => {
  return (
    <form className={classes['input-form']}>
      <Input label='amount' input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: "5",
        step: '1',
        defaultValue: '1'
      }}/>
      <button>+</button>
    </form>
  );
};

export default MealForm;
