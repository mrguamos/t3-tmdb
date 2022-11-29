import React from 'react'
import type {
  PopularMoviesType,
  TopMoviesType,
  UpcomingMoviesType,
} from '../types/movies'
import EmblaCarousel from './EmblaCarousel'
import Title from './Title'

type Props = {
  popularMovies: PopularMoviesType
  topMovies: TopMoviesType
  upcomingMovies: UpcomingMoviesType
}

const TheMovies = ({ popularMovies, topMovies, upcomingMovies }: Props) => {
  return (
    <div className="w-full px-10">
      <div className="flex flex-col gap-y-5">
        <Title>Popular Movies</Title>
        <EmblaCarousel items={popularMovies} />
        <Title>Top Rated Movies</Title>
        <EmblaCarousel items={topMovies} />
        <Title>Upcoming Movies</Title>
        <EmblaCarousel items={upcomingMovies} />
      </div>
    </div>
  )
}

export default TheMovies
