import React from 'react'
import { MdLiveTv } from 'react-icons/md'
import { BiCameraMovie } from 'react-icons/bi'
import { GoHome } from 'react-icons/go'
import NavigationIcon from './NavigationIcon'

const Navigation = () => {
  return (
    <div className="mx-10 mb-10 flex justify-evenly border-b-2 border-b-zinc-500 pb-3 ">
      <div className="flex  justify-center">
        <NavigationIcon href="/" Icon={GoHome} />
      </div>

      <div className="flex justify-center">
        <NavigationIcon href="/tvs" Icon={MdLiveTv} />
      </div>
      <div className="order-zinc-500 flex  justify-center">
        <NavigationIcon href="/movies" Icon={BiCameraMovie} />
      </div>
    </div>
  )
}

export default Navigation
