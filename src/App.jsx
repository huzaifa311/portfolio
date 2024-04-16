import { useEffect, useState } from 'react'
import 'animate.css';
import './App.css'
import Routing from './Routing'

function App() {
  useEffect(() => {
    localStorage.setItem("theme", "black")
  })
  return (
    <>
      <Routing />
    </>
  )
}

export default App
