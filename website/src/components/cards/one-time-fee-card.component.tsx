import React from 'react'

const specialFee =  {
  packageType: 'Fee',
  price: 25,
  description: 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.' + 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
}

export default function OneTimeFeeCard() {

  const { packageType, price, description } = specialFee;

  return (
    <article
      className='
        h-96
        w-full
        px-8
        py-4
        border
        border-indigo-50
        shadow-lg
        shadow-gray-200
        rounded-xl
        bg-indigo-50
      '
    >
    <div
      className='
        items-left
        flex
        flex-col
      '
    >
      {/* Card Header */}
      <header>
        <div
          className='
            flex 
            items-center
            justify-between
          '
        >
          <h2
            className='
              font-bold
            text-indigo-600
              text-3xl
            '
          >
            {packageType}
          </h2>
        </div>
      </header>
    
      <p
        className='
        text-gray-600
          pt-8
          text-xl
        '
      >
        <span
          className='
            text-4xl
            font-semibold
            text-gray-900
          '
        >
          {`$ ${price.toPrecision(4)}`} &nbsp;
        </span>
        / One-Time
      </p>

      {/* Decoration */}
      <div
        className='
          boder-black
          w-[30%]
          border-b
          pt-4
        '
      />

      {/* Description */}
      <p
        className='
          text-md
          line-clamp-[5]
          text-clip
          py-6
          font-light
          leading-loose
          text-gray-600
          tablet:text-xl
          laptop:text-2xl
        '
      >
        {description}
      </p>
    </div>
  </article>
  )
}
