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

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      },{
        path: '/home',
        element: <Home/>
      }
    ]
  }
])

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router}/>
    </AuthContextProvider>
  );
}

function RootLayout () {
  return <>
    <Header/>
    <Outlet/>
  </>
}

export default App;
