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
          <a href="/">Usuarios</a>
        </li>
        <li>
          <a href="https://facebook.com">Facebook</a>
        </li>
        <li>
          <Link to="/login">
            <Button color="secondary">
              {authContext.isLoggedIn ? 'Salir' : 'Iniciar sesión'}
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
