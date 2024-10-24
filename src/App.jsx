
import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>   
    </>
  )
}

export default App
