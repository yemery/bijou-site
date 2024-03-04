import React from 'react'
import { addressInfo } from '../assets/config'
import MiniHeader from './MiniHeader'

const ContactForm = () => {
  return (
    <>
    <MiniHeader image="https://www.daisyjewellery.com/cdn/shop/files/NY-Hero-1_2x_cb62cb6a-d292-42ae-856f-18c8d48a6467_3360x.png?v=1613604857" value="contact us"/>
    <div className='max-w-[80%]  rounded m-auto p-4  grid  md:grid-cols-2 gap-2 mt-16 '>
      <div className="space-y-2">
        <p className='font-medium text-xl'>contact us</p>
        <p className='text-xs'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.</p>
        <div className="flex flex-col gap-4">
  {addressInfo.map((e)=>(
    <>
    <div className="flex flex-row w-full items-center gap-x-4 " key={e.icon}>
      <div className="text-xl">
        {e.icon }
      </div>
      <div className="space-y-1 ">
        <p className='text-xs font-medium'>{e.label}</p>
        <p className='text-xs'>{e.value}</p>
      </div>
    </div>
    </>
  ))}
</div>
      </div>
      <div className="">
      <form action="#" class="space-y-4">
          <div>
              <label htmlFor="email" class="block mb-2 text-sm font-medium ">Your email</label>
              <input type="email" id="email" class="shadow-sm  border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5  " placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label htmlFor="subject" class="block mb-2 text-sm font-medium ">Subject</label>
              <input type="text" id="subject" class="bshadow-sm  border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label htmlFor="message" class="block mb-2 text-sm font-medium">Your message</label>
              <textarea id="message" rows="6" class="bshadow-sm  border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Leave a comment..."></textarea>
          </div>
          <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold  border-b-black bg-brown-400 text-black  ">
Submit
</button>      </form>


      </div>


    </div></>
  )
}

export default ContactForm