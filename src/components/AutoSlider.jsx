import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { imagesGallery } from "../assets/config";

const AutoSlider = () => {
  return (
 <div className="mt-10">
      <Swiper
        modules={[Autoplay]}
        breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            639: {
              slidesPerView: 3,
            },
            865: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 4,
            },
            1700: {
              slidesPerView: 4,
            },
          }}
        slidesPerView={5}
        spaceBetween={0}

        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {imagesGallery.map((e,index) => (
          <>
            <SwiperSlide key={index} >
             
                <img
                  className="object-cover	 h-[370px] w-full" 
                  src={e}
                  alt=""
                />
             
            </SwiperSlide>
          </>
        ))}
      </Swiper></div>

  );
};

export default AutoSlider;
