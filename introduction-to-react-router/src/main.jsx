import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello from home router</div>
  },
  {
    path: '/about',
    element: <div>This is about page</div>
  },
  {
    path: '/contact',
    element: <div>Contact page</div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
