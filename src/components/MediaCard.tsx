import Image from 'next/image'
import React, { useState } from 'react'

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

const MediaCard = (props: Props) => {
  const details = props.details
  const getAlt = (alt: string | undefined) => {
    return alt ?? ''
  }
  const [loading, setLoading] = useState(true)
  return (
    <div className="inline-flex h-full flex-col">
      <div className="relative h-40 w-28 flex-shrink-0 border-4 border-zinc-700 md:h-64 md:w-40 lg:h-80 lg:w-52 xl:h-96 xl:w-64">
        {loading ? <div>Loading...</div> : ''}
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${details.poster_path}`}
          alt={getAlt(details.title || details.name)}
          fill
          className="h-96 w-full"
          itemType="webp"
          sizes="33vw"
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </div>
  )
}

export default MediaCard
