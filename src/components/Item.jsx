import React from 'react'

const Item = ({image,title,subtitle,price}) => {
  return (
    <>
    <div className='min-w-80 h-[400px] '>
    <div className={`h-[80%] bg-white w-full `} >
        <img className="w-full h-full" src={image} alt="" />
    </div>
    <div className='p-1 flex flex-col gap-1 items-center justify-center text-center'>
        <p className='font-medium'>{subtitle}</p>
        <p>{title}</p>
        <p>{price}</p>
    </div>
    </div>
    
    </>
  )
}

export default Item