import React, { useState, useEffect, useContext } from "react";
import Login from "./layouts/Login/Login";
import Home from "./layouts/Home/Home";
import Public from './layouts/Public/Public'
import Header from "./components/Header/Header";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom'

import AuthContext, {AuthContextProvider} from './contexts/AuthContext'
import RequiresLogin from "./guards/RequiresLogin";
import Gallery from "./layouts/Gallery/Gallery";
import Picture from "./layouts/Picture/Picture";
import Button from "./components/UI/Button/Button";

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
      },{
        path: '/gallery',
        element: <Gallery/>,
      },{
        path: '/gallery/:picId',
        element: <Picture/>
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
