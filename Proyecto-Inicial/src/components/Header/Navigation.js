import { useContext } from "react";

import { Outlet, Link } from "react-router-dom";

import Button from "../UI/Button/Button";
import styles from "./Navigation.module.css";

import AuthContext from "../../contexts/AuthContext";


function Navigation() {
  const authContext = useContext(AuthContext)
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Button color="secondary" onClick={authContext.onLogout}>
            {authContext.isLoggedIn ? 'Salir' : 'Iniciar sesión'}
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
