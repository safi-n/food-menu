import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./mealItem.module.css";

const MealForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputref = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputref.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return;
    } else {
      // We need more data thats why we should pass it through props and get data from context
      props.onAddToCart(enteredAmountNumber)
    }
  };

  return (
    <form className={classes["input-form"]} onSubmit={submitHandler}>
      <Input
        ref={amountInputref}
        label="amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+</button>
      {!amountIsValid && <p>PLease enter the amount from (1-5).</p>}
    </form>
  );
};

export default MealForm;
