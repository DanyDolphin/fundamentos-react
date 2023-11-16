import Card from "../../components/UI/Card/Card";

import useInitialData from '../../hooks/useInitialData';

function Home() {
  const id = localStorage.getItem('userId');
  const {error, isLoading, data: user} = useInitialData(
    `https://react-bedu-default-rtdb.firebaseio.com/users/${id}.json`
  );

  return (
    <Card className='home'>
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
            <td>{user?.first_name}</td>
          </tr>
          <tr>
            <td>Apellido</td>
            <td>{user?.last_name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{user?.email}</td>
          </tr>
          </tbody>
        </table>
      </>}
    </Card>
  );
}

export default Home;
