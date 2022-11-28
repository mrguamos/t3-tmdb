import React from 'react'
import { MdLiveTv } from 'react-icons/md'
import { BiCameraMovie } from 'react-icons/bi'
import { GoHome } from 'react-icons/go'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div className="mx-10 mb-10 flex justify-evenly border-b-2 border-b-zinc-500 pb-3 text-teal-300">
      <div className="flex  justify-center">
        <Link href={'/'} aria-label="Home">
          <GoHome className="h-10 w-10" />
        </Link>
      </div>

      <div className="flex justify-center">
        <Link href={'/tvs'} aria-label="TV Shows">
          <MdLiveTv className="h-10 w-10" />
        </Link>
      </div>
      <div className="order-zinc-500 flex  justify-center">
        <Link href={'/movies'} aria-label="Movies">
          <BiCameraMovie className="h-10 w-10" />
        </Link>
      </div>
    </div>
  )
}

export default Navigation
