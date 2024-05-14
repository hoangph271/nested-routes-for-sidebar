import React from 'react';
import PersistentDrawerLeft from './components/PersistentDrawerLeft'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    errorElement: <div>Error...!</div>,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/drafts",
        element: <Drafts />,
      },
    ],
  },
  {
    path: "/about",
    element: <div>About</div>
  }
]);

function Home () {
  return (
    <div>Home</div>
  )
}

function Drafts () {
  return (
    <div>Drafts</div>
  )
}

function BasicLayout () {
  return (
    <div>
      <PersistentDrawerLeft />
      <Outlet />
    </div>
  )
}

function App () {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
