import React from 'react'
import type { PopularTVSType, TopTVSType, OnAirTVSType } from '../types/tv'

import MediaCarousel from './MediaCarousel'
import Title from './Title'

type Props = {
  popularTVS: PopularTVSType
  topTVS: TopTVSType
  onAirTVS: OnAirTVSType
}

const TheTvShows = ({ popularTVS, topTVS, onAirTVS }: Props) => {
  return (
    <div className="px-5 md:px-10">
      <div className="flex flex-col gap-y-10">
        <Title>Popular TV Shows</Title>
        <MediaCarousel items={popularTVS} />
        <Title>Top Rated TV Shows</Title>
        <MediaCarousel items={topTVS} />
        <Title>On Air TV Shows</Title>
        <MediaCarousel items={onAirTVS} />
      </div>
    </div>
  )
}

export default TheTvShows
