import {useContext, useEffect, useState} from 'react'
import Card from "../UI/Card/Card";
import styles from "./Home.module.css";

import AuthContext from "../../contexts/AuthContext";

import useHttp from '../../hooks/useHttp';

function Home() {
  const [user, setUser] = useState({})
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const id = localStorage.getItem('userId');
      const url = `https://react-bedu-default-rtdb.firebaseio.com/users/${id}.json`
      const response = await fetch(url);

      if (!response.ok) {
        setError('Error al obtener datos del usuario.');
        return
      }

      const responseData = await response.json();
      setUser(responseData);
      setIsLoading(false);
    }

    fetchUser();
  }, []);

  return (
    <Card className={styles.home}>
      {isLoading ? (
        <h1>Cargando...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : <>
        <h1>¡Bienvenido!</h1>
        <table>
          <tbody>
          <tr>
            <td>Nombre</td>
            <td>{user.first_name}</td>
          </tr>
          <tr>
            <td>Apellido</td>
            <td>{user.last_name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{user.email}</td>
          </tr>
          </tbody>
        </table>
      </>}
    </Card>
  );
}

export default Home;
