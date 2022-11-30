import Image from 'next/image'
import React, { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import type { MediaDetails } from '../types/media'

type Props = {
  details: MediaDetails
}

const MediaPoster = ({ details }: Props) => {
  const [loading, setLoading] = useState(true)
  return (
    <div className="flex h-full w-full flex-shrink-0 flex-col space-y-2">
      <div className="relative h-full w-full flex-shrink-0">
        {loading ? (
          <div className="flex h-full items-center justify-center">
            <FaSpinner className="h-5 w-5 animate-spin" />
          </div>
        ) : (
          ''
        )}
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_ORIGINAL_IMAGE_BASE_URL}${details.backdrop_path}`}
          alt={details.title || details.name}
          fill
          itemType="webp"
          className="h-full w-full"
          sizes="33vw"
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </div>
  )
}

export default MediaPoster
