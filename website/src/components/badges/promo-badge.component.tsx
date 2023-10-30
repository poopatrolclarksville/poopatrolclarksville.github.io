import React from 'react'

export default function PromoBadge(
  { label = '' }: { label: string}
) {
  return (
    <div
      className='
        bg-indigo-200
        px-8
        py-4
        text-indigo-900
        rounded-lg
        shadow-lg
        shadow-indigo-100
      '
    >
      <p
        className='
          text-xl
          font-medium
        '
      >
        {label}
      </p>
    </div>
  )
}
