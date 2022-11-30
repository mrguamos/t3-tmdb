import Image from 'next/image'
import React, { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import type { Cast } from '../types/media'

type Props = {
  details: Cast
}

const CastCard = (props: Props) => {
  const details = props.details
  const [loading, setLoading] = useState(true)
  return (
    <div className="inline-flex h-full w-full flex-shrink-0 flex-col space-y-2">
      <div className="relative h-40 w-28 flex-shrink-0 md:h-52 md:w-36 lg:h-64 lg:w-40 xl:h-72 xl:w-48">
        {loading ? (
          <div className="flex h-full items-center justify-center">
            <FaSpinner className="h-5 w-5 animate-spin" />
          </div>
        ) : (
          ''
        )}
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${details.profile_path}`}
          alt={details.name}
          fill
          className="h-full rounded-md shadow-2xl transition duration-300 hover:z-50 hover:scale-110"
          itemType="webp"
          sizes="33vw"
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <span className="truncate">{details.name}</span>
    </div>
  )
}

export default CastCard
