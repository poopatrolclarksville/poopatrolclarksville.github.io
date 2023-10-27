import React from 'react'
import type { NavItem } from '@/types'

export default function ListNavItem(
  { navItem }: { navItem: NavItem }
) {
  const { href, linkText } = navItem;

  return (
    <li>
      <a
        href={href}
        className="
          text-2xl
          font-light
          text-gray-600
        "
      >
        {linkText}
      </a>
    </li>
  )
}
