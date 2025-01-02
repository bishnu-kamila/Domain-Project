import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Signup from './Component/Signup.jsx'
import Login from './Component/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home.jsx'
import Dashbord from './Component/Dashbord.jsx'
import Notification from './Component/Cards/Notification.jsx'
import Laundry from './Component/Laundry.jsx'
import HostelRegd from './Component/HostelRegd.jsx'



const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "signup",
        element : <Signup/>
      },
      {
        path : "login",
        element : <Login/>
      },
      {
        path : "dashboard",
        element : <Dashbord/>
      },{
        path : "notification",
        element : <Notification/>
      },
      {
        path : "laundry",
        element : <Laundry/>
      },
      {
        path : "registration",
        element : <HostelRegd/>
      }
    ]
  }
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)






