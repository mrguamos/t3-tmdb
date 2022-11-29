import React from 'react'
import type { PopularTVSType, TopTVSType, OnAirTVSType } from '../types/tv'

import EmblaCarousel from './EmblaCarousel'
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
        <EmblaCarousel items={popularTVS} />
        <Title>Top Rated TV Shows</Title>
        <EmblaCarousel items={topTVS} />
        <Title>On Air TV Shows</Title>
        <EmblaCarousel items={onAirTVS} />
      </div>
    </div>
  )
}

export default TheTvShows
