import React, { useState, useEffect, useContext } from "react";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Public from './pages/Public/Public'
import Header from "./components/Header/Header";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom'

import AuthContext, {AuthContextProvider} from './contexts/AuthContext'
import RequiresLogin from "./guards/RequiresLogin";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        path: '/',
        element: <Public/>
      },
      {
        path: '/login',
        element: <Login/>
      },{
        path: '/home',
        element: <RequiresLogin>
          <Home/>
        </RequiresLogin>
        // using High Order Component
        // element: requiresLogin(<Home/>)
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

function RootLayout () {
  return <AuthContextProvider>
    <Header/>
    <Outlet/>
  </AuthContextProvider>
}

export default App;
