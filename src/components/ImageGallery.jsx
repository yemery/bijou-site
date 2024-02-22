import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import "swiper/css";
import { imagesGallery } from '../assets/config';
const ImageGallery = () => {
  return (
    <>
    
   

    <Swiper
   modules={[Autoplay]}
     
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      loop={true}
    >
        
        {
            imagesGallery.map((e,index)=>(
                <>
                <SwiperSlide key={index}>
                    <div className={`mt-10  m-auto px-0 max-h-[700px] `}>

                    <img className="h-auto max-w-full  object-cover	" src={e} alt=""/>

 </div>
        </SwiperSlide>
                </>
            ))
        }
      
     
   
    </Swiper>

    </>
  )
}

export default ImageGallery