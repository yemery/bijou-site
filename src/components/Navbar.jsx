import React, { useEffect, useState } from "react";
import { navbarItems } from "../assets/config";
import { Link, useLocation } from "react-router-dom";
import { GrMenu, GrClose } from "react-icons/gr";
import { MdOutlineShoppingCart} from "react-icons/md";
import Socials from "./Socials";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  // const [isCartOpen, setCartOpen] = useState(false);

  const toggleMenu = () => {
    // if (isCartOpen) {
      
    //   setCartOpen(!isCartOpen)
    // }
    setMenuOpen(!isMenuOpen);

  };
  // const toggleCart = () => {
  //   if (isMenuOpen) {
      
  //     setMenuOpen(!isMenuOpen);
  //   }
  //   setCartOpen(!isCartOpen)
  // };
  let location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname)
    console.log(location.pathname)
  }, [location]);
  return (
    <>
      <div className="w-full h-[80px] bg-white border-b-black fixed top-0  z-10">
        <div className="md:max-w-[1480px]  max-w-[600px]  m-auto  h-full flex justify-between items-center  px-4">
          <div className="font-sans font-semibold">
            {" "}
            <Link to="/">JewelJazz</Link>
          </div>
          {/* lg */}
          <div className="hidden md:flex items-center ">
            <ul className="flex justify-between items-center  bg-transparent  px-6 gap-9">
              {navbarItems.map((e) => (
                <>
                  <li key={e.id} className="flex flex-col items-center  ">
                    {" "}
                    <Link to={e.to}  className={`${url === e.to ? "font-semibold " :""}`}  >
                      {e.label}
                    </Link>
                    {/* <span className="h-1 w-1 bg-gray-600 rounded-full"></span> */}
                  </li>
                </>
              ))}
              <li className="flex items-center cursor-pointer">
             
                      <Link to="/cart"><MdOutlineShoppingCart size={20}  /> </Link> 
        
              
                <i className="text-xs">0</i>
              </li>
            </ul>
          </div>
          {/* md sm burger */}
          <div className="md:hidden   flex items-center ">
            <ul className="flex  flex-row justify-between items-center gap-4">
              <li className="flex items-center cursor-pointer">
           <MdOutlineShoppingCart size={20}  /> 
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

        {isMenuOpen && (
          <div
            className="  w-[300px] bg-white  absolute right-0 top-0  mt-20 overflow-auto md:hidden "
            style={{ height: "calc(100vh - 80px)" }}
          >
            <ul className="flex flex-col gap-7 justify-center  w-full h-full p-5">
              {navbarItems.map((e) => (
                <>
                  <li key={e.id}>
                    {" "}
                    <Link className="text-xl flex items-end  " to={e.to} >
                      {e.label}{" "}
                    </Link>
                  </li>
                </>
              ))}

              <Socials />
            </ul>
          </div>
        )}

        {/* {isCartOpen && (
          <div
            className="  w-[300px] bg-white  absolute right-0 top-0  mt-20 overflow-auto "
            style={{ height: "calc(100vh - 80px)" }}
          >
            <div className="h">
              <p>my bag</p>

            </div>
          </div>
        )} */}
      </div>
    </>
  );
};

export default Navbar;
