import React from 'react'
import { FAQuestion } from '@/lib/types'

export default function FAQCard(
  { faq }: { faq: FAQuestion }
) {
  const { title, body } = faq;

  return (    
    <article
      className='
        p-4
        rounded-lg
        border-gray-100
        shadow-xl
        shadow-gray-100
      '
    >
      <h2
        className='
          pb-8
          line-clamp-4
          text-clip
          text-2xl
          font-bold
          text-gray-900
        '
      >
        {title}
      </h2>
      <p
        className='
          text-xl
          font-light
          leading-snug
          text-gray-600
          desktop:line-clamp-[8]
          desktop:text-clip
        '
      >
       {body}
      </p>
    </article>
  )
}
