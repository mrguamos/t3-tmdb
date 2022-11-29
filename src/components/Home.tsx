import React from 'react'
import type { PopularMoviesType } from '../types/movies'
import type { PopularTVSType } from '../types/tv'
import EmblaCarousel from './EmblaCarousel'
import Title from './Title'

type Props = {
  popularMovies: PopularMoviesType
  popularTVS: PopularTVSType
}

const Home = ({ popularMovies, popularTVS }: Props) => {
  return (
    <div className="w-full px-10">
      <div className="flex flex-col gap-y-5">
        <Title>Popular Movies</Title>
        <EmblaCarousel items={popularMovies} />
        <Title>Popular TV Shows</Title>
        <EmblaCarousel items={popularTVS} />
        <EmblaCarousel items={popularMovies} />
      </div>
    </div>
  )
}

export default Home
