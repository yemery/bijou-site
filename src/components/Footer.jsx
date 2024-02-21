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
                            <li className="text-xs">{e.name}</li></>
                        ))}
                    </ul>
                </div>
                </>
            ))
       }

       <div>
       <h3 className="font-semibold text-base">Join our news letter</h3>
      <form action="" method="post">
      <input type="text" placeholder="Enter Your email address" className="input input-bordered  w-full max-w-xs border-black text-xs text-gray-400" />
      <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
Connect with MetaMask
</button>
      </form>
       </div>
      </div>
    </>
  );
};

export default Footer;
