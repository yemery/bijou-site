import React, {  useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {isMenuOpen ? null : (
        <>
          <Outlet />{" "}
        </>
      )
    }
    {/* <SocialLinks/>
    <QuotesSection/> */}
    </>
  );
};

export default AppLayout;