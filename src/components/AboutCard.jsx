import React from 'react'

const AboutCard = (props) => {
  return (
    <div className='h-[500px] relative'>
      {
        props.type === 'image' ?
          (
            <img src={props.src} alt="" srcset="" className='w-full h-full object-cover' />
          )
        : ( 
          
          <p className='w-full h-full flex justify-center items-center text-sm px-4'>{props.content}</p>
        )
      }

    </div>
  )
}

export default AboutCard