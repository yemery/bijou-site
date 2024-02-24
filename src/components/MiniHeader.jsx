import React from 'react'

const MiniHeader = ({image,value}) => {
  return (
    <div className="w-full relative">
        <img src={image} className='w-full h-full' alt="" srcset="" />
    <p className='text-white text-xl font-extrabold absolute top-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2'>{value}</p>
    </div>
  )
}

export default MiniHeader