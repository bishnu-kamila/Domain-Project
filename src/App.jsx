
import React from 'react'
import Navbar from './Component/Home/Navbar'
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
