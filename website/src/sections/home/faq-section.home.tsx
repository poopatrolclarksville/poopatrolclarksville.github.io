import React from 'react';
import FAQGrid from '@/components/grids/faq-grid.component';

export default function FAQSection() {
  return (
    <section
      className='
        px-4
        py-16
        flex
        flex-col
        tablet:px-16
        laptop:px-16
        laptop:py-32
      '
    >
      <header
        className='
          text-clamp
          text-center
          px-4
          space-y-16
          tablet:px-0
          laptop:text-left
          laptop:max-w-7xl
          laptop:pr-16
          laptop:space-y-8
        '
      >
        <div>
          <h2
            className='
              font-bold
              text-4xl
              tablet:text-5xl
              laptop:text-7xl 
              text-gray-900
            '
          >
            Frequently Asked Questions.
          </h2>
        </div>
        <p
          className='
          text-3xl
          font-light
          leading-loose
          text-gray-600
          tablet:text-5xl
        '>
          Quis tellus eget adipiscing convallis sit sit eget aliquet 
          quis. Suspendisse eget egestas a elementum pulvinar
          et feugiat blandit at. In mi viverra elit nunc.
        </p>
      </header>
      <div
        className='
          hidden
          border-t-1
          mt-12
          w-[45vw]
          border-t
          laptop:block
        '
      />
      <FAQGrid />
    </section>
  );
}
