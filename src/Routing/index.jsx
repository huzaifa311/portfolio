import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Contact, Home, Projects, Skills } from '../Pages'

const Routing = () => {
  return (
      <Routes>
        <Route index element={<Home  />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
  )
}

export default Routing
