import useInput from "./hooks/use-input";
import classes from "./BasicForm.module.css";

const BasicForm = (props) => {
  const {
    value: enteredFullName,
    valueIsValid: enteredFullNameIsValid,
    hasError: fullNameInputHasError,
    valueChangeHandler: fullNameInputChangeHandler,
    inputBlurChangeHandler: onBlurFullNameInputChangeHandler,
    reset: resetFullNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredNUmberCard,
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
    numbercard: enteredNUmberCard,
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
          />
          {fullNameInputHasError && (
            <p className={classes["error-text"]}>Full Name must not be empty</p>
          )}
        </div>
        <div className={numberCardInputClasses}>
          <label htmlFor="numberCard">Number Card</label>
          <input
            value={enteredNUmberCard}
            type="number"
            id="numberCard"
            onChange={numberCardInputChangeHandler}
            onBlur={onBlurNumberCardInputChangeHandler}
          />
          {numberCardInputHasError && (
            <p className={classes["error-text"]}>
              NumberCard must not be 18 numbers
            </p>
          )}
        </div>
        <div className={dateExpInputClasses}>
          <label htmlFor="dateexp">Date exp</label>
          <input
            value={enteredDateExp}
            type="number"
            id="dateexp"
            onChange={dateExpInputChangeHandler}
            onBlur={onBlurDateExpInputChangeHandler}
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
