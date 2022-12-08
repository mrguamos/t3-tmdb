import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import type { IconType } from 'react-icons'

type Props = {
  href: string
  Icon: IconType
}

const NavigationIcon = (props: Props) => {
  const router = useRouter()
  const { Icon } = props
  return (
    <div className="flex justify-center">
      <Link href={props.href} aria-label="TV Shows">
        {router.asPath === props.href ? (
          <Icon className="h-10 w-10 text-white" />
        ) : (
          <Icon className="h-10 w-10 text-teal-300" />
        )}
      </Link>
    </div>
  )
}

export default NavigationIcon
