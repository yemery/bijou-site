import React from 'react'
import { categories } from '../assets/config'
const Gallery = () => {
  return (
    <>
    

<div className="grid grid-cols-4">
    {
        categories.map((e)=>(
            <>
            <div>
            <img className="h-auto max-w-full  bg-cover bg-center" src={e.url} alt=""/>
        </div>
            </>
        ))
    }
       
    </div>

    </>
  )
}

export default Gallery