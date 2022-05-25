import { useState } from "react";

const useInput = (validationFunction, isName) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const valueIsValid = validationFunction(enteredValue);

  const valueIsInvalid = !valueIsValid && enteredValueTouched;
  const incorrectValue = valueIsInvalid ? "input invalid" : "input";

  const valueChangeHandler = (e) => {
    if (isName) setEnteredValueTouched(true);
    setEnteredValue(e.target.value);
  };

  const valueBlurHandler = (e) => {
    if (!valueIsValid) {
      setEnteredValueTouched(true);
    }
  };

  const reset = () => {
    setEnteredValueTouched(false);
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    hasError: incorrectValue,
    valueIsValid,
    valueIsInvalid,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
