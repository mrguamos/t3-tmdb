import Image from 'next/image'
import React, { useState } from 'react'
import { FaSpinner, FaStar } from 'react-icons/fa'

type Details = {
  id: number
  title?: string
  name?: string
  poster_path: string
  vote_count: number
  vote_average: number
}

type Props = {
  details: Details
}

const formatter = Intl.NumberFormat('en', { notation: 'compact' })

const MediaCard = (props: Props) => {
  const details = props.details
  const getAlt = (alt: string | undefined) => {
    return alt ?? ''
  }
  const [loading, setLoading] = useState(true)
  return (
    <div className="inline-flex h-full w-28 flex-shrink-0 flex-col space-y-2 md:w-40 lg:w-52 xl:w-64">
      <div className="relative h-40 w-28 flex-shrink-0 md:h-64 md:w-40 lg:h-80 lg:w-52 xl:h-96 xl:w-64">
        {loading ? (
          <div className="flex h-full items-center justify-center">
            <FaSpinner className="h-5 w-5 animate-spin" />
          </div>
        ) : (
          ''
        )}
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${details.poster_path}`}
          alt={getAlt(details.title || details.name)}
          fill
          className="h-96 w-full rounded-md shadow-2xl"
          itemType="webp"
          sizes="33vw"
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <span className="truncate">{details.name || details.title}</span>
      <div className="flex w-full items-center space-x-2">
        <span>{details.vote_average}</span>
        <FaStar className="h-4 w-4 text-yellow-300" />
        <span>{formatter.format(details.vote_count)}</span>
      </div>
    </div>
  )
}

export default MediaCard
