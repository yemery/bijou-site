import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppLayout = () => {
  

   
  return (
    <div className="flex flex-col h-screen w-full">
    
      <Navbar  />
     <main className="mt-20 flex-1 w-full">

  
          <Outlet  />{" "}
          
       
     </main>
        <Footer/>
        
</div>
    
  );
};

export default AppLayout;