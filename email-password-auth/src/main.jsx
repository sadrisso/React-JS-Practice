import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import SignUp from './components/SignUp';


const router = createBrowserRouter([
  {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signup",
          element: <SignUp />
        }
      ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
