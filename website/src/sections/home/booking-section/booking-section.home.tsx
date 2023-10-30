import React from 'react'

import BookingForm from '@/components/forms/booking-form.component';
import MobileBookingSection from './mobile-booking-section.home';

export default function BookingSection() {

  let isMobileOrTabletDevice = window.innerWidth <= 1279; 
  
  return isMobileOrTabletDevice ? <MobileBookingSection /> : 
    (
      <section 
        className='
          px-4
          py-32
          laptop:px-16
          laptop:py-64
          laptop:grid
          laptop:grid-cols-2
        '
      >
      <BookingForm /> 
      <div className='
        flex
        flex-col
        space-y-16
        tablet:space-y-16
      '>
        <h2 className='
          text-xl
          laptop:text-6xl
          desktop:text-7xl
          font-bold
        '>
          Ready To Book?
        </h2>
        <p className='
          text-3xl
          font-light
        text-gray-600
          laptop:max-w-2xl
          laptop:text-4xl
          laptop:leading-relaxed
        '>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, rem quos? Voluptate asperiores id provident beatae unde esse optio ducimus nulla magnam eum minus at quo ullam, nobis labore a.
        </p>
      </div>
    </section>
  );
}
