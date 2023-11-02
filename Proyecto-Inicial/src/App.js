import React, { useState, useEffect, useContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

import AuthContext, {AuthContextProvider} from './contexts/AuthContext'

function App() {
  return (
    <AuthContextProvider>
      <AppLayout/>
    </AuthContextProvider>
  );
}

function AppLayout () {
  const authContext = useContext(AuthContext)

  const {isLoggedIn} = authContext
  return <>
    <Header isAuthenticated={isLoggedIn}/>
      <main>
        {!isLoggedIn && <Login/>}
        {isLoggedIn && <Home/>}
      </main>
  </>
}

export default App;
