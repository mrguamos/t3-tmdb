import React from 'react'
import { FaStar } from 'react-icons/fa'
import type { Credits, MediaDetails } from '../types/media'
import MediaPoster from './MediaPoster'

import { formatter } from '../lib/formatter'
import { dayjs } from '../lib/dayjs'
import CreditCarousel from './CreditCarousel'
import Title from './Title'

type Props = {
  mediaDetails: MediaDetails
  mediaCredits: Credits
}

const MediaInfo = ({ mediaDetails, mediaCredits }: Props) => {
  return (
    <div className="px-5 md:px-10">
      <div className="flex flex-col gap-y-10">
        <div className="relative flex h-[675px] bg-black">
          <div className="absolute right-0 flex h-full w-[70%]">
            <MediaPoster details={mediaDetails}></MediaPoster>
            <div className="absolute h-full w-full bg-gradient-to-r from-black via-transparent/5 to-transparent"></div>
          </div>
          <div className="absolute flex h-full w-[40%] flex-col justify-center gap-10 p-10">
            <span className="text-5xl ">
              {mediaDetails.title || mediaDetails.name}
            </span>
            <div className="flex items-center space-x-2 text-teal-400">
              <div className="flex">
                <span>{mediaDetails.vote_average}</span> <span>/10</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaStar className="h-4 w-4 text-yellow-300" />
                <span>{formatter.format(mediaDetails.vote_count)}</span>
              </div>
              <span>
                {new Date(
                  mediaDetails.release_date || mediaDetails.first_air_date
                ).getFullYear()}
              </span>
              {mediaDetails.runtime ? (
                <span>
                  {dayjs.duration(mediaDetails.runtime, 'minute').format('H')}h{' '}
                  {dayjs.duration(mediaDetails.runtime, 'minute').format('m')}
                  min
                </span>
              ) : (
                <span>Season {mediaDetails.number_of_seasons}</span>
              )}
            </div>
            <span className="font-light">{mediaDetails.overview}</span>
          </div>
        </div>
        <Title>Cast</Title>
        <CreditCarousel item={mediaCredits} />
      </div>
    </div>
  )
}

export default MediaInfo
