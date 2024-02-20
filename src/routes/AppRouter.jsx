import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import AppLayout from '../layout/AppLayout'
import About from '../components/About'

const AppRouter = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<AppLayout/>}>
        <Route index element={<LandingPage />} />
         <Route path="About" element={<About />} />
        {/*<Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<ErrorRouter />} /> */}
          </Route>
      </Routes>
    </>
  )
}

export default AppRouter