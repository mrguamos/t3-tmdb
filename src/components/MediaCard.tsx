import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FaSpinner, FaStar } from 'react-icons/fa'
import { formatter } from '../lib/formatter'
import type { MediaDetails } from '../types/media'

type Props = {
  details: MediaDetails
}

const MediaCard = (props: Props) => {
  const router = useRouter()
  const details = props.details
  const [loading, setLoading] = useState(true)
  return (
    <div className="inline-flex h-full w-full flex-shrink-0 flex-col space-y-2">
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
          alt={details.title || details.name}
          fill
          className="h-full rounded-md shadow-2xl transition duration-300 hover:z-50 hover:scale-110 hover:cursor-pointer"
          itemType="webp"
          sizes="33vw"
          onLoadingComplete={() => setLoading(false)}
          onClick={() => {
            const path = details.name ? '/tvs' : '/movies'
            router.push(`${path}/${details.id}`)
          }}
        />
      </div>
      <span className="truncate">{details.name || details.title}</span>
      <div className="flex items-center space-x-2">
        <div className="flex">
          <span>{details.vote_average}</span> <span>/10</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaStar className="h-4 w-4 text-yellow-300" />
          <span>{formatter.format(details.vote_count)}</span>
        </div>
      </div>
    </div>
  )
}

export default MediaCard
