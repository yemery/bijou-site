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
          <li className="min-w-72  bg-black py-3 px-5 text-base font-medium text-center text-white ">
            <Link> Shop Now</Link>
          </li>
          <li className="min-w-72  bg-black py-3 px-5 text-base font-medium text-center text-white ">
            <Link> shop most gifted</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hero;
