import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { BiCameraMovie } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center space-y-5">
      <div className="flex items-center justify-center space-x-2">
        <BiCameraMovie className="h-10 w-10 text-teal-500" />
        <span className="text-xl font-semibold">Next Movies</span>
      </div>
      <div className=" flex animate-bounce items-center justify-center">
        <Link href={'https://github.com/mrguamos/t3-tmdb'} target={'_blank'}>
          <FaGithub className="h-10 w-10" />
        </Link>
      </div>
    </div>
  )
}

export default Footer
