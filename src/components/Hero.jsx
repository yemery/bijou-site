import React from 'react'

const Hero = () => {
  return (
    <>
  
    <div style={{ height: 'calc(100vh - 80px)' }} className='w-full   bg-hero bg-cover bg-center	relative z-0'>
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 px-6 absolute top-1/2 right-1/2 transform translate-x-1/2 translate-y-[100%]">
            <a href="/" className="min-w-72  bg-black py-3 px-5 text-base font-medium text-center text-white ">
                Shop Now
               
            </a>
            <a href="/" className=" min-w-72  bg-black  py-3 px-5 sm:ms-4 text-base font-medium text-center text-white ">
                shop most gifted
            </a>  
        </div>

       
</div>
    </>
  )
}

export default Hero