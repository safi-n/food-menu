import React, {useRef} from "react";
import Input from "../../UI/Input";
import classes from "./mealItem.module.css";

const MealForm = props => {
  const amountInputref = useRef();

  const submitHandler = event => {
    event.prevenDefault();
  }

  const enteredAmount = amountInputref.current.value;
  const enterAmountNumber = +enteredAmount;
  return (
    <form className={classes['input-form']} onSubmit={submitHandler}>
      <Input
      label='amount'
      ref={amountInputref}
      input={{
        id: 'amount_' + props.id,
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
