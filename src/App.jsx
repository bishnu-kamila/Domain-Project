import { useState } from 'react'
import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    </>
  )
}

export default App
