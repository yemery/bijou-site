import React from "react";
import { navbarItems } from "../assets/config";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GrMenu, GrClose } from "react-icons/gr";
import { MdArrowOutward } from "react-icons/md";
const Navbar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="w-full h-[80px] bg-white border-bc fixed top-0 left-0 ">
      <div className="md:max-w-[1480px]  max-w-[600px]  m-auto w-full h-full flex justify-between items-center  px-4">
        <div className="font-sans font-semibold">
          {" "}
          <Link to="/">JewelJazz</Link>
        </div>
        {/* lg */}
        <div className="hidden md:flex items-center ">
          <ul className="flex justify-between items-center  bg-transparent  px-6 gap-9">
            {navbarItems.map((e) => (
              <>
                <li
                  key={e.id}
                  className="flex flex-col items-center  hover:font-semibold"
                >
                  {" "}
                  <Link to={e.to}>{e.label}</Link>
                  {/* <span className="h-1 w-1 bg-gray-600 rounded-full"></span> */}
                </li>
              </>
            ))}
            <li className="flex items-center ">
              <Link>
                <HiOutlineShoppingBag size={20} />
              </Link>
              <i className="text-xs">0</i>
            </li>
          </ul>
        </div>
        {/* md sm burger */}
        <div className="md:hidden   flex items-center ">
          <ul className="flex  flex-row justify-between items-center gap-4">
            <li className="flex items-center ">
              <Link>
                <HiOutlineShoppingBag size={20} />
              </Link>
              <i className="text-xs">0</i>
            </li>
            <li className="flex items-center">
              {" "}
              <button className="" onClick={toggleMenu}>
                {" "}
                {isMenuOpen ? <GrClose size={24} /> : <GrMenu size={24} />}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* opened */}
      {isMenuOpen && (
        <div className="w-full mt-[-80px] h-screen flex flex-row justify-center items-center md:hidden">
          <ul className="flex flex-col gap-7 justify-items-start">
            {navbarItems.map((e) => (
              <>
                <li key={e.id}>
                  {" "}
                  <Link className="text-xl flex items-end  " to={e.to}>
                    {e.label}{" "}
                    <span>
                      <MdArrowOutward size={13} />
                    </span>
                  </Link>
                  {/* <span className="h-1 w-1 bg-gray-600 rounded-full"></span> */}
                </li>
              </>
            ))}
          </ul>
        </div>
      )}

     
    </div>
  );
};

export default Navbar;
