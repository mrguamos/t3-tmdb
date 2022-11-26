import React from 'react'

type Props = {
  children: React.ReactNode
}

const Title = ({ children }: Props) => {
  return (
    <span className="text-center text-xl font-normal text-teal-300 md:text-left">
      {children}
    </span>
  )
}

export default Title
