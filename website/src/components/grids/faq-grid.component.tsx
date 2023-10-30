import React from 'react'

import FAQCard from '@/components/cards/faq-card.component'
import { FAQS } from '@/config/faqs.config';

export default function FAQGrid() {
  return (
    <div
      className='
        py-16
        grid
        grid-cols-1
        gap-y-16
        laptop:grid-cols-2
        laptop:gap-8
      '
    >
    {FAQS.map((faq) => <FAQCard faq={faq}/>)}
  </div>
  )
}
