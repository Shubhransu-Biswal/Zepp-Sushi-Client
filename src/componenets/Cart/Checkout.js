import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const Checkout = (props) => {
  const inputNameRef = useRef();
  const inputStreetRef = useRef();
  const inputPostalRef = useRef();
  const inputCityRef = useRef();

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const isEmpty = (value) => value.trim() === "";
  const isFiveCharsLong = (value) => value.trim().length === 5;

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = inputNameRef.current.value;
    const enteredStreet = inputStreetRef.current.value;
    const enteredPostal = inputPostalRef.current.value;
    const enteredCityName = inputCityRef.current.value;

    const validEnteredName = !isEmpty(enteredName);
    const validEnteredStreet = !isEmpty(enteredStreet);
    const validEnteredCityName = !isEmpty(enteredCityName);
    const validEnteredPostal = isFiveCharsLong(enteredPostal);

    setFormInputsValidity({
      name: validEnteredName,
      street: validEnteredStreet,
      postal: validEnteredPostal,
      city: validEnteredCityName,
    });

    const formIsValid =
      validEnteredName &&
      validEnteredStreet &&
      validEnteredCityName &&
      validEnteredPostal;

    if (!formIsValid) return;
    // proceed if everything is valid
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCityName,
    });
  };

  const nameControlClasses = `${classes.control} ${
    classes[formInputsValidity.name ? "" : "invalid"]
  }`;
  const streetControlClasses = `${classes.control} ${
    classes[formInputsValidity.street ? "" : "invalid"]
  }`;
  const cityControlClasses = `${classes.control} ${
    classes[formInputsValidity.city ? "" : "invalid"]
  }`;
  const postalControlClasses = `${classes.control} ${
    classes[formInputsValidity.postal ? "" : "invalid"]
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.inputDetails}>
        <div className={nameControlClasses}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" ref={inputNameRef} />
          {!formInputsValidity.name && (
            <p>please enter a valid Name! (non-empty)</p>
          )}
        </div>
        <div className={streetControlClasses}>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" ref={inputStreetRef} />
          {!formInputsValidity.street && (
            <p>please enter a valid street! (non-empty)</p>
          )}
        </div>
        <div className={postalControlClasses}>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" ref={inputPostalRef} />
          {!formInputsValidity.postal && (
            <p>please enter a valid postal code! (= 5 charecter long)</p>
          )}
        </div>
        <div className={cityControlClasses}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" ref={inputCityRef} />
          {!formInputsValidity.city && (
            <p>please enter a valid city! (non-Empty)</p>
          )}
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
