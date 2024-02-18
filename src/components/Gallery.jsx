import React from 'react'
import { categories } from '../assets/config'
import { Link } from 'react-router-dom'
const Gallery = () => {
  return (
    <>
<div className='mt-9 flex flex-col gap-9'>
<p className='max-w-[1480px]  m-auto w-full font-semibold'>Unleash your inner sparkle with our fine jewelry, perfect for every day</p>


<div className="grid grid-cols-4">
    {
        categories.map((e)=>(
            <>
            <Link to={e.to}>
            <div className='relative '>
            <img className="h-auto max-w-full  bg-cover bg-center" src={e.url} alt=""/>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold flex flex-col items-center'>

              <p className=''>{e.name}</p>
              <i className='text-xs'>shop</i>
            </div>
        </div></Link>
            </>
        ))
    }
       
    </div>
</div>
    </>
  )
}

export default Gallery