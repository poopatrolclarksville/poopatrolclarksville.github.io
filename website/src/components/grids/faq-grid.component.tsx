import React from 'react'

import FAQCard from '@/components/cards/faq-card.component'
import { FAQS } from '@/config/faqs.config';

export default function FAQGrid() {
  return (
    <div
      className='
        grid
        grid-cols-1
        gap-y-16
        desktop:grid-cols-2
        gdesktop:gap-8
        py-16
      '
    >
    {FAQS.map((faq) => <FAQCard faq={faq}/>)}
  </div>
  )
}
