import React from 'react'
import { aboutContent } from '../assets/config'
import AboutCard from '../components/AboutCard'

const About = () => {
  return (
    <>
     
     <div className="grid   md:grid-cols-2 w-full h-full ">
     {aboutContent.map((item,index) => (
      
       <AboutCard {...item} />
  
     ))}
    </div>
    </>
  )
}

export default About