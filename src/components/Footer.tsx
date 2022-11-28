import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="mt-10 flex animate-bounce items-center justify-center">
      <Link href={'https://github.com/mrguamos/t3-tmdb'} target={'_blank'}>
        <FaGithub className="h-10 w-10" />{' '}
      </Link>
    </div>
  )
}

export default Footer
