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
import Feedback from './Component/Cards/Feedback.jsx'
import Payment from './Component/Cards/Payment.jsx'
import Canteen from './Component/Cards/Canteen.jsx'
import RoomInfo from './Component/Cards/RoomInfo.jsx'
import Admin from './Admin.jsx'
import Hostel from './Component/Hostel.jsx'



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
      }
    ]
  }
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

