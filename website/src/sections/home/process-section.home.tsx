import React from 'react';

export default function ProcessSection() {
  return (
    <section
      id='booking-process'
      className='
        px-4
        py-32
        laptop:px-16
        laptop:py-64
        flex
        justify-center
        items-center
        bg-gray-50
      '
    >
      <header className='text-center'>
        <h1
          className='
            py-6
            text-5xl
            line-clamp-3
            font-bold
            laptop:text-6xl
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
            laptop:text-4xl
            laptop:leading-loose
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
