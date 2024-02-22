import React from 'react'
import { Link } from 'react-router-dom'
import { socials } from '../assets/config'

const Socials = () => {
  return (
    <div className="flex flex-row gap-x-2 w-full ">
            {socials.map((e) => (
              <>
                <Link key={e.id} to={e.path} className="hover:text-orange-950">{e.icon}</Link>
              </>
            ))}
          </div>
  )
}

export default Socials