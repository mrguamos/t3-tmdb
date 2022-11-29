import React from 'react'
import type { PopularTVSType, TopTVSType, OnAirTVSType } from '../types/tv'

import MediaSlick from './MediaSlick'
import Title from './Title'

type Props = {
  popularTVS: PopularTVSType
  topTVS: TopTVSType
  onAirTVS: OnAirTVSType
}

const TheTvShows = ({ popularTVS, topTVS, onAirTVS }: Props) => {
  return (
    <div className="w-full px-10">
      <div className="flex flex-col gap-y-5">
        <Title>Popular TV Shows</Title>
        <MediaSlick items={popularTVS} />
        <Title>Top Rated TV Shows</Title>
        <MediaSlick items={topTVS} />
        <Title>On Air TV Shows</Title>
        <MediaSlick items={onAirTVS} />
      </div>
    </div>
  )
}

export default TheTvShows
