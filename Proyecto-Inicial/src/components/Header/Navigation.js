import { useContext } from "react";

import Button from "../UI/Button/Button";
import styles from "./Navigation.module.css";

import AuthContext from "../../contexts/AuthContext";


function Navigation() {
  const authContext = useContext(AuthContext)
  return (
    <nav className={styles.nav}>
      <ul>
        {authContext.isLoggedIn && (
          <li>
            <a href="/">Usuarios</a>
          </li>
        )}
        {authContext.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {authContext.isLoggedIn && (
          <li>
            <Button onClick={() => authContext.setIsLoggedIn(false)} color="secondary">
              Salir
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
