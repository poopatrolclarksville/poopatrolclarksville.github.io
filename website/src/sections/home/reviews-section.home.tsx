import React from 'react';

export default function ReviewsSection() {
  return (
    <section 
      className='
        px-4
        py-32
        flex
        items-center
        justify-center
        bg-gray-50
        tablet:px-16
        laptop:px-0
        laptop:h-96
        laptop:py-64
      '
    >
      <div 
        className='
          laptop:max-w-5xl
          laptop:container
        '
      >
        <figure>
          <blockquote 
            className='
              text-2xl
              laptop:text-4xl
              leading-relaxed
              text-center 
              text-gray-900
            '
          >
            <p 
              className='
                text-clip
                line-clamp-12
                laptop:line-clamp-4
              '
            >
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Nemo expedita voluptas culpa sapiente alias
              molestiae. Numquam corrupti in laborum sed rerum et corporis.
              ”
            </p>
          </blockquote>
          <figcaption className='py-8'>
            <div 
              className='
                mt-4
                flex 
                items-center 
                justify-center
                space-x-3
              '
            >
              <div 
                className='
                  text-xl
                  laptop:text-2xl
                  font-semibold
                  text-gray-900
                '
              >
                John Doe
              </div>
              <svg 
                viewBox='0 0 2 2' 
                width={4} 
                height={4} 
                aria-hidden='true' 
                className='fill-gray-900'>
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div 
                className='
                  text-xl
                text-gray-600
                  font-light
                '
              >
                Weekly Client
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
