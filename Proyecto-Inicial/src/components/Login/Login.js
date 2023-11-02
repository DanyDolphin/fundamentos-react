import React, { useEffect, useReducer, useRef, useContext } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./Login.module.css";

import {reducer, initialState, ACTIONS} from './reducer'

import AuthContext from "../../contexts/AuthContext";

function Login(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const emailRef = useRef();
  const authContext = useContext(AuthContext);

  const {email, emailIsValid, password, passwordIsValid, formIsValid} = state

  useEffect(() => {
    dispatch({type: ACTIONS.VALIDATE_FORM});
  }, [password, email]);

  useEffect(() => {
    const scrollHandler = () => {
      emailRef.current?.focus();
    }
    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  }, []);

  const emailChangeHandler = (event) => {
    dispatch({
      type: ACTIONS.UPDATE_EMAIL,
      payload: event.target.value
    });
  };

  const passwordChangeHandler = (event) => {
    dispatch({
      type: ACTIONS.UPDATE_PASSWORD,
      payload: event.target.value
    });
  };

  const validateEmailHandler = () => {
    dispatch({
      type: ACTIONS.EMAIL_BLUR
    })
  };

  const validatePasswordHandler = () => {
    dispatch({
      type: ACTIONS.PASSWORD_BLUR
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authContext.setIsLoggedIn(true);
    //props.onLogin(email, password);
  };

  return (
    <Card className={styles.login}>
      <p>Inicie sesion? {authContext.isLoggedIn ? 'si' : 'no'}</p>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailIsValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">Correo</label>
          <input
            ref={emailRef}
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
