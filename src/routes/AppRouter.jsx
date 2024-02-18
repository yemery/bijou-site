import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import AppLayout from '../layout/AppLayout'

const AppRouter = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<AppLayout/>}>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<ErrorRouter />} /> */}
          </Route>
      </Routes>
    </>
  )
}

export default AppRouter