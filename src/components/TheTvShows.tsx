import React from 'react'
import type { Media } from '../types/media'

import MediaCarousel from './MediaCarousel'
import Title from './Title'

type Props = {
  popularTVS: Media
  topTVS: Media
  onAirTVS: Media
}

const TheTvShows = ({ popularTVS, topTVS, onAirTVS }: Props) => {
  return (
    <div className="px-5 md:px-10">
      <div className="flex flex-col gap-y-10">
        <Title>Popular TV Shows</Title>
        <MediaCarousel item={popularTVS} />
        <Title>Top Rated TV Shows</Title>
        <MediaCarousel item={topTVS} />
        <Title>On Air TV Shows</Title>
        <MediaCarousel item={onAirTVS} />
      </div>
    </div>
  )
}

export default TheTvShows
