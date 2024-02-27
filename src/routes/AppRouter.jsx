import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import AppLayout from '../layout/AppLayout'
import Contact from '../pages/Contact'
import ProductList from '../pages/ProductList'
import About from '../pages/About'

const AppRouter = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<AppLayout/>}>
        <Route index element={<LandingPage />} />
         <Route path="About" element={<About />} />
         <Route path="/ProductList" element={<ProductList/>} />
        <Route path="/contact" element={<Contact />} />
          {/*<Route path="/projects" element={<Projects />} />
          <Route path="*" element={<ErrorRouter />} /> */}
          </Route>
      </Routes>
    </>
  )
}

export default AppRouter