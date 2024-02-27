import React from 'react'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import SliderSection from '../components/SliderSection'
// import ImageGallery from '../components/ImageGallery'


import AutoSlider from '../components/AutoSlider'

const LandingPage = () => {
  return (
    <> 
    
    <Hero/>
        <Gallery/>
        <SliderSection/>
        {/* <ImageGallery/> */}
        <AutoSlider/>
    </>
       
  )
}

export default LandingPage