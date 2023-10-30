import React, { ReactNode } from 'react'

interface IconListItemProps {
  icon: ReactNode,
  text: string
}

export default function IconListItem({
  icon, text
}: IconListItemProps) {
  return (
    <div
      className='
        text-md 
        line-clamp-2
        flex
        items-start
        justify-between
        text-clip
        font-light
        text-gray-600
        tablet:text-xl
      '
    >
      {icon}
      <li className='pl-4'>
        {text}
      </li>
    </div>
  )
}
