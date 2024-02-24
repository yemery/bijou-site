import React from 'react'
import HeaderCard from '../components/HeaderCard'

const MultiPageLayout = ({ children }) => {
  return (
    <>
    <HeaderCard/>
    <div className="div">

        <div className="sidebar">

        </div>
        <div className="content">

            { children }
        </div>
    </div>
    </>
  )
}

export default MultiPageLayout