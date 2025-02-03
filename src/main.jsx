import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import Login from './Component/Home/Login.jsx'
import Dashbord from './Component/Student/Dashbord.jsx'
import Notification from './Component/Student/Notification.jsx'
import LaundryOrders from './Component/Laundry/LaundryOrders.jsx'
import Feedback from './Component/Student/Feedback.jsx'
import Canteen from './Component/Student/Canteen.jsx'
import Hostel from './Component/Student/Hostel.jsx'
import Adminn from './Component/Admin/Adminn.jsx'
import RoomInfo from './Component/Student/RoomInfo.jsx'
import Admin from './Admin.jsx'
import Payment from './Component/Student/Payment.jsx'


import Laundry from './Component/Laundry.jsx'
import HostelRegd from './Component/Student/HostelRegd.jsx'
import Signup from './Component/Home/Signup.jsx'




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
      },
      {
        path : "feedback",
        element : <Feedback/>
      },
      {
        path : "payment",
        element : <Payment/>
      },
      {
        path : "canteen",
        element : <Canteen/>
      },
      {
        path : "roominfo",
        element : <RoomInfo/>
      },
      {
        path : "admin",
        element : <Admin/>
      },
      {
        path : "hostel",
        element : <Hostel/>
      },
      {
        path : "adminn",
        element : <Adminn/>
      },
      {
        path : "laundryorder",
        element : <LaundryOrders/>
      }
    ]
  }
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

