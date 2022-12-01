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
        <div className="relative flex aspect-[4/3] w-full bg-black md:aspect-[2/1] lg:aspect-[25/9]">
          <div className="absolute right-0 flex h-full w-full lg:w-[70%]">
            <MediaPoster details={mediaDetails}></MediaPoster>
            <div
              className="absolute h-full w-full bg-gradient-to-t from-black via-transparent/5 to-transparent
            lg:bg-gradient-to-r lg:from-black lg:via-transparent/5 lg:to-transparent"
            ></div>
          </div>
          <div className="absolute flex h-full w-full flex-col items-center justify-end gap-5 p-10 lg:w-[50%] lg:items-start lg:justify-center lg:gap-10 xl:w-[40%]">
            <span className="text-center text-xl sm:text-2xl lg:text-left xl:text-4xl ">
              {mediaDetails.title || mediaDetails.name}
            </span>
            <div className="flex space-x-2 text-teal-400 lg:items-center">
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
            <span className="hidden font-light  lg:block">
              {mediaDetails.overview}
            </span>
          </div>
        </div>
        <Title>Cast</Title>
        <CreditCarousel item={mediaCredits} />
      </div>
    </div>
  )
}

export default MediaInfo
