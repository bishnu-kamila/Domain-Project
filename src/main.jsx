import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Component/Navbar.jsx'
import Signup from './Component/Signup.jsx'
import Login from './Component/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login/>
  </StrictMode>,
)
