import React from 'react'
import type {
  PopularMoviesType,
  TopMoviesType,
  UpcomingMoviesType,
} from '../types/movies'
import PopularCarousel from './PopularCarousel'
import Title from './Title'

type Props = {
  popularMovies: PopularMoviesType
  topMovies: TopMoviesType
  upcomingMovies: UpcomingMoviesType
}

const TheMovies = ({ popularMovies, topMovies, upcomingMovies }: Props) => {
  return (
    <div className="overflow-x-hidden px-5 md:px-10">
      <div className="flex flex-col gap-y-5">
        <Title>Popular Movies</Title>
        <PopularCarousel items={popularMovies} />
        <Title>Top Rated Movies</Title>
        <PopularCarousel items={topMovies} />
        <Title>Upcoming Movies</Title>
        <PopularCarousel items={upcomingMovies} />
      </div>
    </div>
  )
}

export default TheMovies
