import useInput from "./hooks/use-input";
import classes from "./BasicForm.module.css";

import { focusActions } from "../store/focus-slice"
import { useDispatch } from "react-redux";

const BasicForm = (props) => {
  const dispatch = useDispatch();

  const {
    value: enteredFullName,
    valueIsValid: enteredFullNameIsValid,
    hasError: fullNameInputHasError,
    valueChangeHandler: fullNameInputChangeHandler,
    inputBlurChangeHandler: onBlurFullNameInputChangeHandler,
    reset: resetFullNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredNumberCard,
    valueIsValid: enteredNumberCardIsValid,
    hasError: numberCardInputHasError,
    valueChangeHandler: numberCardInputChangeHandler,
    inputBlurChangeHandler: onBlurNumberCardInputChangeHandler,
    reset: resetNumberCardInput,
  } = useInput((value) => value.length === 16);

  const {
    value: enteredDateExp,
    valueIsValid: enteredDateExpIsValid,
    hasError: dateExpInputHasError,
    valueChangeHandler: dateExpInputChangeHandler,
    inputBlurChangeHandler: onBlurDateExpInputChangeHandler,
    reset: resetDateExpInput,
  } = useInput((value) => value.length === 4);

  const {
    value: enteredcvv,
    valueIsValid: enteredcvvIsValid,
    hasError: cvvInputHasError,
    valueChangeHandler: cvvInputChangeHandler,
    inputBlurChangeHandler: onBlurcvvInputChangeHandler,
    reset: resetcvvInput,
  } = useInput((value) => value.length === 3);

  let formIsValid = false;

  if (
    enteredFullNameIsValid &&
    enteredNumberCardIsValid &&
    enteredDateExpIsValid &&
    enteredcvvIsValid
  ) {
    formIsValid = true;
  }

  const onFocusHandler = (itemOnFocus) => {
    dispatch(focusActions.changeItemFocus(itemOnFocus));
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log("siuuu");
    resetFullNameInput();
    resetNumberCardInput();
    resetDateExpInput();
    resetcvvInput();
  };

  props.exportData({
    fullname: enteredFullName,
    numbercard: enteredNumberCard,
    dateexp: enteredDateExp,
    cvv: enteredcvv,
  });

  // className={`${classes["form-control"]} ${classes.invalid}`}

  const fullNameInputClasses = fullNameInputHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : classes["form-control"];
  const numberCardInputClasses = numberCardInputHasError
  ? `${classes["form-control"]} ${classes.invalid}`
  : classes["form-control"];
  const dateExpInputClasses = dateExpInputHasError
  ? `${classes["form-control"]} ${classes.invalid}`
  : classes["form-control"];
  const cvvInputClasses = cvvInputHasError
  ? `${classes["form-control"]} ${classes.invalid}`
  : classes["form-control"];

  return (
    <form onSubmit={formSubmissionHandler} className={classes["form-control"]}>
      <div className={classes["control-group"]}>
        <div className={fullNameInputClasses}>
          <label htmlFor="name">Full Name</label>
          <input
            value={enteredFullName}
            type="text"
            id="name"
            onChange={fullNameInputChangeHandler}
            onBlur={onBlurFullNameInputChangeHandler}
            onFocus={ ()=> onFocusHandler("fullname")}
          />
          {fullNameInputHasError && (
            <p className={classes["error-text"]}>Full Name must not be empty</p>
          )}
        </div>
        <div className={numberCardInputClasses}>
          <label htmlFor="numberCard">Number Card</label>
          <input
            value={enteredNumberCard}
            type="tel"
            maxLength="16"
            id="numberCard"
            onChange={numberCardInputChangeHandler}
            onBlur={onBlurNumberCardInputChangeHandler}
            onFocus={ ()=> onFocusHandler("numberCard")}
          />
          {numberCardInputHasError && (
            <p className={classes["error-text"]}>
              NumberCard must be 16 numbers
            </p>
          )}
        </div>
        <div className={dateExpInputClasses}>
          <label htmlFor="dateexp">Date exp</label>
          <input
            value={enteredDateExp}
            type="tel"
            maxLength="4"
            id="dateexp"
            onChange={dateExpInputChangeHandler}
            onBlur={onBlurDateExpInputChangeHandler}
            onFocus={ ()=> onFocusHandler("dateExp")}
          />
          {dateExpInputHasError && (
            <p className={classes["error-text"]}>
              Date exp must be MM / YY format
            </p>
          )}
        </div>

        <div className={cvvInputClasses}>
          <label htmlFor="cvv">CVV</label>
          <input
            value={enteredcvv}
            type="password"
            id="cvv"
            onChange={cvvInputChangeHandler}
            onBlur={onBlurcvvInputChangeHandler}
            onFocus={ ()=> onFocusHandler("cvv")}
          />
          {cvvInputHasError && (
            <p className={classes["error-text"]}>
              CVV must be 3 numbers
            </p>
          )}
        </div>

      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
