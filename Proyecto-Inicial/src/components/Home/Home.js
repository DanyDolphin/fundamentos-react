import {useContext} from 'react'
import Card from "../UI/Card/Card";
import styles from "./Home.module.css";

import AuthContext from "../../contexts/AuthContext";

function Home() {
  const authContext = useContext(AuthContext)
  return (
    <Card className={styles.home}>
      <h1>¡Bienvenido!</h1>
      <p>Inicie sesion? {authContext.isLoggedIn ? 'si' : 'no'}</p>
    </Card>
  );
}

export default Home;
