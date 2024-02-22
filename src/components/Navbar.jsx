import React,{useState} from "react";
import { navbarItems } from "../assets/config";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GrMenu, GrClose } from "react-icons/gr";
import { MdArrowOutward } from "react-icons/md";
import Socials from "./Socials";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [ isCartOpen, setCartOpen ] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <div className="w-full h-[80px] bg-white border-b-black fixed top-0  z-10">
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
      {/* {isMenuOpen && (
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
                </li>
              </>
            ))}
          </ul>
        </div>
      )} */}
        {isMenuOpen && (
        <div className="sidebar  w-[300px] bg-white  absolute right-0 top-0  mt-20 overflow-auto " style={{ height: "calc(100vh - 80px)" }}>
      
       <ul className="flex flex-col gap-7 justify-center  w-full h-full p-5">
           
            {navbarItems.map((e) => (
              <>
                <li key={e.id}>
                  {" "}
                  <Link className="text-xl flex items-end  " to={e.to}>
                    {e.label}{" "}
                   
                  </Link>
                </li>
              </>
            ))}

                    <Socials/>
          </ul>          
          </div>
      )}

     
    </div>
    
    </>
  );
};

export default Navbar;
