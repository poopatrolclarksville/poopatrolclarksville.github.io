import React from 'react'
import BookingForm from '@/components/forms/booking-form.component';

export default function MobileBookingSection() {
  return (
    <section className='
      px-4
      py-32
      grid
      grid-cols-1
      gap-16
    '>
      <div className='text-center'>
        <h2 className='
          px-4
          pb-4
          text-5xl
          font-bold
          text-gray-900
        '>
          Ready To Book?
        </h2>
        <p className='
          text-4xl
          font-light
        text-gray-600
          leading-relaxed
        '>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, rem quos? Voluptate asperiores id provident beatae unde esse optio ducimus nulla magnam eum minus at quo ullam, nobis labore a.
        </p>
      </div>
      <BookingForm /> 
    </section>
  );
}
