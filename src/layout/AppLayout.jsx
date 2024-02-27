import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppLayout = () => {
  

   
  return (
    <div className="flex flex-col h-screen">
    
      <Navbar  />
     <main className="mt-20 flex-1">

  
          <Outlet  />{" "}
          
       
     </main>
        <Footer/>
        
</div>
    
  );
};

export default AppLayout;