import React from 'react'
import type { PopularMoviesType } from '../types/movies'
import type { PopularTVSType } from '../types/tv'
import PopularCarousel from './PopularCarousel'

type Props = {
  popularMovies: PopularMoviesType
  popularTVS: PopularTVSType
}

const Home = ({ popularMovies, popularTVS }: Props) => {
  return (
    <div className="px-10">
      <div className="flex w-full flex-col gap-y-5">
        <span className="text-center text-2xl font-normal md:text-left">
          Popular Movies
        </span>
        <PopularCarousel items={popularMovies} />
        <span className="text-center text-2xl font-normal md:text-left">
          Popular TV Shows
        </span>
        <PopularCarousel items={popularTVS} />
      </div>
    </div>
  )
}

export default Home
