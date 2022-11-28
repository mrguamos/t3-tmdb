import React from 'react'
import { MdLiveTv } from 'react-icons/md'
import { BiCameraMovie } from 'react-icons/bi'
import { GoHome } from 'react-icons/go'

const Navigation = () => {
  return (
    <div className="mx-10 mb-10 flex justify-evenly border-b-2 border-b-zinc-500 pb-3 text-teal-300">
      <div className="flex w-full justify-center hover:cursor-pointer">
        <GoHome className="h-10 w-10" />
      </div>
      <div className="flex w-full justify-center hover:cursor-pointer">
        <MdLiveTv className="h-10 w-10" />
      </div>
      <div className="order-zinc-500 flex w-full justify-center hover:cursor-pointer">
        <BiCameraMovie className="h-10 w-10" />
      </div>
    </div>
  )
}

export default Navigation
