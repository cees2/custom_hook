import React from "react";
import useInput from "./hooks/use-input";

const SimpleInput = () => {
  const {
    value: enteredName,
    hasError: nameHasError,
    valueIsValid: nameIsValid,
    valueIsInvalid: nameIsInvalid,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset
  } = useInput((value) => value.trim() !== "", true);
  const {
    value: enteredEmail,
    hasError: emailHasError,
    valueIsValid: emailIsValid,
    valueIsInvalid: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInput((value) => value.trim().includes("@"), false);

  const buttonIsDisabled = nameIsValid && emailIsValid;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(enteredName);
    console.log(enteredEmail);
    nameReset();
    emailReset();
  };

  return (
    <div className="container">
      <form onSubmit={formSubmitHandler}>
        <div className={nameHasError}>
          <label htmlFor="name">Enter name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            value={enteredName}
            onBlur={nameBlurHandler}
          ></input>
          {nameIsInvalid && <p>This input can not be empty.</p>}
        </div>
        <div className={emailHasError}>
          <label htmlFor="email">Enter email</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            value={enteredEmail}
            onBlur={emailBlurHandler}
          ></input>
          {emailIsInvalid && <p>Type a correct email.</p>}
        </div>
        <button disabled={!buttonIsDisabled}>Submit</button>
      </form>
    </div>
  );
};

export default SimpleInput;
