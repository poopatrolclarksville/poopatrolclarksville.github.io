import React from 'react'
import { type LinkDetails } from '@/lib/types'

export default function NavItem(
  { navItem } : { navItem: LinkDetails }
) {

  const { href, text } = navItem;

  return (
    <li>
      <a
        href={href}
        className="
          font-light
          text-gray-50
          tablet:text-xl
          desktop:text-2xl
        "
      >
        <p>{text}</p>
      </a>
  </li>
  )
}
