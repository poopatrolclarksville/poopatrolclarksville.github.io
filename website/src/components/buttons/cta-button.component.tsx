import React from 'react'
import { CalendarClock } from 'lucide-react';

export default function CTAButton() {
  return (
    <div
      className='
      z-10
      font-bold
      border-2
      border-gray-50
      text-lg
      rounded-sm
      p-4
      text-md
      w-full
      text-gray-900
      bg-gray-50
      desktop:p-8
      desktop:w-[600px]
      desktop:text-2xl
      desktop:bg-transparent
      desktop:cursor-pointer
      desktop:rounded-lg
      desktop:mt-50
        hover:bg-gray-50
        hover:text-gray-900
    '>
      <a href='#' className='flex items-center justify-between px-4'>
        Book Appointment Now
        <CalendarClock size={32} strokeWidth={2} />
      </a>
    </div>
  )
}
