import React from 'react'
import type { Media } from '../types/media'
import MediaCarousel from './MediaCarousel'
import Title from './Title'

type Props = {
  popularMovies: Media
  topMovies: Media
  upcomingMovies: Media
}

const TheMovies = ({ popularMovies, topMovies, upcomingMovies }: Props) => {
  return (
    <div className="px-5 md:px-10">
      <div className="flex flex-col gap-y-10">
        <Title>Popular Movies</Title>
        <MediaCarousel item={popularMovies} />
        <Title>Top Rated Movies</Title>
        <MediaCarousel item={topMovies} />
        <Title>Upcoming Movies</Title>
        <MediaCarousel item={upcomingMovies} />
      </div>
    </div>
  )
}

export default TheMovies
