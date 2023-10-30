import React from 'react'
import { type LinkDetails } from '@/lib/types';

export default function ListNavItem(
  { navItem }: { navItem: LinkDetails }
) {

  const { href, text } = navItem;
  
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
        <p>{text}</p>
      </a>
    </li>
  )
}
