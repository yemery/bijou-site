import React from "react";
import { items } from "../assets/config";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation } from 'swiper';
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { GrNext, GrPrevious } from "react-icons/gr";
import Item from "./Item";
const SliderSection = () => {
  return (
    <>
      <div className="max-w-[1480px]  m-auto w-full px-4 mt-9 flex flex-col gap-9">

        <div className="flex justify-between">

            <p className="font-semibold">Shop Our Most Beloved Pieces</p>
    <div className="flex flex-row gap-x-6">
        <button className="prv ">
            <GrPrevious size={15} className="text-brown-700 hover:text-brown-900" />
          </button>

          <button className="next text-brown-700 hover:text-brown-900" >
            <GrNext size={15}  />
          </button></div>
        </div>
        <div>
        <Swiper
          slidesPerView={4}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            639: {
              slidesPerView: 2,
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
          spaceBetween={50}
          navigation={{
            nextEl: `.next`,
            prevEl: `.prv`,
          }}
        >
          {items.map((e) => (
            <SwiperSlide >
              {" "}
              <Item {...e} />{" "}
            </SwiperSlide>
          ))}

          {/* <button className="prv absolute left-0 top-[50%] z-10">
            <GrPrevious size={25} />
          </button>

          <button className="next absolute right-0 top-[50%] z-10">
            <GrNext size={25} />
          </button> */}
        </Swiper></div>
      </div>
    </>
  );
};

export default SliderSection;
