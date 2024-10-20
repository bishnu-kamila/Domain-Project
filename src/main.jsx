import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Signup from './Component/Signup.jsx'
import Login from './Component/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      
      {
        path : "Signup",
        element : <Signup/>
      },
      {
        path : "Login",
        element : <Login/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)






