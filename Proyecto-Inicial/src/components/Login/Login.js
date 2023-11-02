import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./Login.module.css";

// Enumerable (Enum)
const ACTIONS = {
  UPDATE_EMAIL: 'UPDATE_EMAIL',
  EMAIL_BLUR: 'EMAIL_BLUR'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_EMAIL:
      return { value: action.payload, isValid: action.payload.includes("@")};
    case ACTIONS.EMAIL_BLUR:
      return { value: state.value, isValid: state.value.includes("@")};
    default:
      return { value: '', isValid: false }
  }
}

const initialState = {
  value: '',
  isValid: null
}

function Login(props) {
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  const {value: email, isValid: emailIsValid} = state

  useEffect(() => {
    setFormIsValid(
      email.includes("@") && password.trim().length > 6
    );
  }, [password, email]);

  const emailChangeHandler = (event) => {
    dispatch({
      type: ACTIONS.UPDATE_EMAIL,
      payload: event.target.value
    });
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    dispatch({
      type: ACTIONS.EMAIL_BLUR
    })
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(password.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(email, password);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailIsValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordIsValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
