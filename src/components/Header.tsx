import React from 'react'
import NextIcon from './NextIcon'
import TMDBIcon from './TMDBIcon'
import Link from 'next/link'
const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center gap-x-10">
        <Link
          href={'https://nextjs.org/'}
          target={'_blank'}
          aria-label="Made using NextJS"
        >
          <NextIcon />
        </Link>
        <Link
          href={'https://www.themoviedb.org/'}
          target={'_blank'}
          aria-label="Data provided by TMDB"
        >
          <TMDBIcon className="w-20" />
        </Link>
      </div>
    </div>
  )
}

export default Header
