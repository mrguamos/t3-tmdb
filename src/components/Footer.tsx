import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { SiThemoviedatabase } from 'react-icons/si'
import { TbBrandVercel } from 'react-icons/tb'

const Footer = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center space-y-5">
      <div className="flex items-center justify-center space-x-2">
        <SiThemoviedatabase className="h-10 w-10 text-teal-500" />
        <span className="text-xl font-semibold">Next Movies</span>
      </div>
      <div className="flex w-full animate-bounce items-center justify-center space-x-5">
        <Link
          href={'https://github.com/mrguamos/t3-tmdb'}
          target={'_blank'}
          aria-label="Check the source code"
        >
          <FaGithub className="h-10 w-10" />
        </Link>
        <Link href={'https://vercel.com/'} target={'_blank'}>
          <TbBrandVercel className="h-10 w-10" aria-label="Powered by vercel" />
        </Link>
      </div>
      <Link
        href={'https://github.com/mrguamos'}
        target={'_blank'}
        aria-label="Github profile"
      >
        <span className="text-sm font-normal">© mrguamos</span>
      </Link>
    </div>
  )
}

export default Footer
