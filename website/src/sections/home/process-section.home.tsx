import React from 'react';

export default function ProcessSection() {
  return (
    <section
      id='booking-process'
      className='
        px-4
        py-32
        desktop:px-0
        desktop:py-64
        flex
        justify-center
        items-center
        bg-gray-50
      '
    >
      <header
        className='
          text-center
        '
      >
        <h1
          className='
            py-6
            text-5xl
            line-clamp-3
            font-bold
          '
        >
          How Does Booking Work?
        </h1>
        <p
          className='
            py-8
            text-3xl
            font-light
            leading-relaxed
            text-gray-600
          '
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Veniam vitae quos porro debitis nemo eos alias,veritatis, 
          doloribus odio iure facere. Repellendus molestiae dolorum 
          quibusdam ad. Ad aliquam dolore excepturi.
        </p>
      </header>
    </section>
  );
}
