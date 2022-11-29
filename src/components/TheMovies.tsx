import React from 'react'
import type {
  PopularMoviesType,
  TopMoviesType,
  UpcomingMoviesType,
} from '../types/movies'
import MediaSlick from './MediaSlick'
import Title from './Title'

type Props = {
  popularMovies: PopularMoviesType
  topMovies: TopMoviesType
  upcomingMovies: UpcomingMoviesType
}

const TheMovies = ({ popularMovies, topMovies, upcomingMovies }: Props) => {
  return (
    <div className="px-10">
      <div className="flex flex-col gap-y-5">
        <Title>Popular Movies</Title>
        <MediaSlick items={popularMovies} />
        <Title>Top Rated Movies</Title>
        <MediaSlick items={topMovies} />
        <Title>Upcoming Movies</Title>
        <MediaSlick items={upcomingMovies} />
      </div>
    </div>
  )
}

export default TheMovies
