import React from 'react'
import type { Media } from '../types/media'
import MediaCarousel from './MediaCarousel'
import Title from './Title'

type Props = {
  popularMovies: Media
  popularTVS: Media
}

const Home = ({ popularMovies, popularTVS }: Props) => {
  return (
    <div className="px-5 md:px-10">
      <div className="flex flex-col gap-y-10">
        <Title>Popular Movies</Title>
        <MediaCarousel item={popularMovies} />
        <Title>Popular TV Shows</Title>
        <MediaCarousel item={popularTVS} />
      </div>
    </div>
  )
}

export default Home
