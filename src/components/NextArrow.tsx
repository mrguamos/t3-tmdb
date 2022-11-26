import type { CSSProperties } from 'react'
import React from 'react'

type Props = {
  className?: string
  style?: CSSProperties
  onClick?: () => void
}

const NextArrow = ({ className, style, onClick }: Props) => {
  return (
    <button
      className={`absolute right-[-25px] top-[50%] h-10 w-10 bg-black/20 text-teal-300`}
      onClick={onClick}
    >
      {'>'}
    </button>
  )
}

export default NextArrow
