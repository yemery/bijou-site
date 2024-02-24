import React from 'react'
import { addressInfo } from '../../assets/config'

const ContactForm = () => {
  return (
    <div className='max-w-[80%]  rounded m-auto p-4  grid grid-cols-2 gap-2 mt-24'>
      <div className="flex flex-col gap-5">
        <p className='font-medium'>contact us</p>
        <p className='text-sm'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.</p>
        <div className="flex flex-col gap-4">
  {addressInfo.map((e)=>(
    <>
    <div className="flex flex-row w-full items-center gap-x-4 ">
      <div className="text-xl">
        {e.icon }
      </div>
      <div className="gap-y-1 flex flex-col">
        <p className='text-xs font-medium'>{e.label}</p>
        <p className='text-xs'>{e.value}</p>
      </div>
    </div>
    </>
  ))}
</div>
      </div>
      <div className="">
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium ">Your email</label>
              <input type="email" id="email" class="shadow-sm  border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5  " placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium ">Subject</label>
              <input type="text" id="subject" class="bshadow-sm  border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium">Your message</label>
              <textarea id="message" rows="6" class="bshadow-sm  border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Leave a comment..."></textarea>
          </div>
          <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold  border-b-black bg-brown-400 text-black  ">
Submit
</button>      </form>


      </div>


    </div>
  )
}

export default ContactForm