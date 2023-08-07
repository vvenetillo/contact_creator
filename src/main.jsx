import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './components/routes/Login.jsx'
import Navbar from './components/routes/Navbar.jsx'
import Cadastro from './components/pages/Cadastro.jsx'
import List from './components/pages/List.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:
      [
        {
          path: "login",
          element: <Login />
        },
      ],
  },
  {
    path: "/",
    element: <Navbar />,
    children:
    [
      {
        path: "cadastro",
        element: <Cadastro />,
      },
      {
        path: "navbar",
        element: <Navbar />,
      },
      {
        path: "list",
        element: <List />,
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
