import React from "react";
import { Link } from "react-router-dom";
import { socials,footer } from "../assets/config";
const Footer = () => {
  return (
    <>
      <div className="mt-10 md:max-w-[1480px]  max-w-[600px]  m-auto w-full  flex flex-col  justify-between  px-4 py-12   md:flex-row  gap-8">
        <div className="font-sans font-semibold flex flex-col h-full gap-y-3 	">
          {" "}
          <Link to="/" className="text-3xl">JewelJazz</Link>
          <i className="text-xs font-light">@ 2024 All rights reserved</i>
          <div className="flex flex-row gap-x-2 w-full ">
            {socials.map((e) => (
              <>
                <Link key={e.id} to={e.path} className="hover:text-orange-950">{e.icon}</Link>
              </>
            ))}
          </div>
        </div>
       
       {
            footer.map((e)=>(
                <>
                <div className="flex flex-col gap-y-1 " >
                    <h3 className="font-semibold text-base">{e.name}</h3>
                    <ul className="flex flex-col gap-2">    
                        {e.labels.map((e)=>(
                            <>
                            <li className="text-xs"><Link to={e.path}>{e.name}</Link> </li></>
                        ))}
                    </ul>
                </div>
                </>
            ))
       }

       <div className="flex flex-col gap-y-1 ">
       <h3 className="font-semibold text-base">Join our news letter</h3>
      <form action="" method="post">
     <div className="flex gap-x-4">
     <input type="text" class="outline-none	  border-0 border-b-2 border-solid border-b-black py-2 px-1 block w-full border-gray-200 text-xs  disabled:opacity-50 disabled:pointer-events-none uppercase	" placeholder="Email"/>
      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold  border-b-black bg-brown-700 text-white  ">
Submit
</button>
     </div>
      </form>
       </div>
      </div>
    </>
  );
};

export default Footer;
