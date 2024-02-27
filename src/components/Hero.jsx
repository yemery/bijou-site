import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div
        style={{ height: "calc(100vh - 80px)" }}
        className="w-full   bg-hero bg-cover bg-center	relative "
      >
        <ul className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 px-6 absolute top-1/2 right-1/2 transform translate-x-1/2 translate-y-[100%] gap-x-3">
          <li className="min-w-72  bg-black py-3 px-5 text-base font-medium text-center text-white hover:bg-white hover:text-black cursor-pointer">
            <Link to="/ProductList"> Shop Now</Link>
          </li>
          <li className="min-w-72  bg-black py-3 px-5 text-base font-medium text-center text-white hover:bg-white hover:text-black cursor-pointer">
            <Link> shop most gifted</Link>
          </li>
        </ul>
      </div>
      {/* call it here  */}
      {/* <div className="sidebar h-[100vh] w-[300px] bg-white  sticky right-0 top-0 ">

      </div> */}
    </>
  );
};

export default Hero;
