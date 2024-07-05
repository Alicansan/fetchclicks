/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

interface Props {
  content: any
}

export default function ImageCarousel({ content }: Props) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay({ delay: 5000 })]
  )

  return (
    <div
      className='embla -z-10 mx-auto brightness-[0.1]    absolute border-4 border-black '
      ref={emblaRef}
    >
      <div className='embla__container'>
        {content.map((image: any, index: number) => (
          <div className='embla__slide' key={index}>
            <img
              src={`https://image.tmdb.org/t/p/original/${image.file_path}`}
              width={image.width}
              height={image.height}
              alt=''
            />
          </div>
        ))}
      </div>
    </div>
  )
}
