import React from 'react'
import type { PopularMoviesType } from '../types/movies'
import type { PopularTVSType } from '../types/tv'
import MediaSlick from './MediaSlick'
import Title from './Title'

type Props = {
  popularMovies: PopularMoviesType
  popularTVS: PopularTVSType
}

const Home = ({ popularMovies, popularTVS }: Props) => {
  return (
    <div className="px-5 md:px-10">
      <div className="flex flex-col gap-y-5">
        <Title>Popular Movies</Title>
        <MediaSlick items={popularMovies} />
        <Title>Popular TV Shows</Title>
        <MediaSlick items={popularTVS} />
      </div>
    </div>
  )
}

export default Home
