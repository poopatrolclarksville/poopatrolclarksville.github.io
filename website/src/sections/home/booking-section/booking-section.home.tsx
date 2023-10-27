import React from 'react'

import BookingForm from '@/components/forms/booking-form.component';
import MobileBookingSection from './mobile-booking-section.home';

export default function BookingSection() {

  let isMobileOrTabletDevice = window.innerWidth < 600;
  
  return isMobileOrTabletDevice ? <MobileBookingSection /> : 
    (
      <section className='
      px-4
      py-32
      desktop:px-16
      desktop:py-64
      desktop:grid
      desktop:grid-cols-2
    '>
      <BookingForm /> 
      <div className='
        flex
        flex-col
      '>
        <h2 className='
          text-xl
          desktop:text-6xl
          font-light
          pb-4
        '>
          Ready To Book?
        </h2>
        <p className='
          text-4xl
          font-extralight
        text-gray-600
          leading-relaxed
          max-w-2xl
          w-full
        '>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, rem quos? Voluptate asperiores id provident beatae unde esse optio ducimus nulla magnam eum minus at quo ullam, nobis labore a.
        </p>
      </div>
    </section>
  );
}
