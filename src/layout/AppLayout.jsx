import React, {  useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [ isCartOpen, setCartOpen ] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const toggleCart = () => {
    setMenuOpen(!isCartOpen);
  };
  
  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {isMenuOpen ? null : (
        <>
        <div className="mt-20">
          <Outlet  />{" "}</div>
        </>
      )
    }
    {/* <SocialLinks/>
    <QuotesSection/> */}
    </>
  );
};

export default AppLayout;