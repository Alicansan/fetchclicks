/* eslint-disable @next/next/no-img-element */

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel'

import dynamic from 'next/dynamic'

const YoutubeTrailer = dynamic(
  () => import('@/components/YoutubeTrailers'),
  {
    loading: () => <div>Loading...</div>,
    ssr: false,
  }
)

interface Props {
  content: any
}

export default function VideoCarousel({ content }: Props) {
  return (
    <div className='w-1/2 mx-auto'>
      <Carousel>
        <CarouselContent>
          {content.map((video: any, index: number) => (
            <CarouselItem key={index} className=''>
              <div key={index}>
                <YoutubeTrailer
                  url={`https://www.youtube.com/watch?v=${video.key}`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
