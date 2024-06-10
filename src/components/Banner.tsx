import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel'

const GetData = async () => {
  const key = process.env.API_KEY

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US`,
      { cache: 'no-cache' }
    )
    if (!response.ok) {
      throw new Error(
        `HTTP Error! Status: ${response.status}`
      )
    }
    const data = await response.json()
    const results = data.results
    const randomIndex = Math.floor(
      Math.random() * results.length
    )
    const movie = results[randomIndex]
    return { results, movie }
  } catch (error) {
    console.error(
      'Failed to catch upcoming movies list',
      error
    )
    return { results: [], movie: null }
  }
}

async function Banner() {
  const { results, movie } = await GetData()
  return (
    <div className=' md:py-6 md:px-1 bg-none  relative z-10'>
      <Carousel className='md:mx-12'>
        {movie && (
          <>
            <CarouselContent>
              {results.map(
                (item: any, index: number) => (
                  <CarouselItem
                    key={index}
                    className='relative flex '
                  >
                    <Image
                      className='w-full h-auto object-cover'
                      width={1200}
                      height={675}
                      alt='title'
                      src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                    />
                    <div className='absolute w-full  z-20 bottom-[0%] left-[1%] p-4 bg-gradient-to-t from-black to-transparent'>
                      <h1 className='font-bebas text-5xl uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                        {item.title}
                      </h1>
                      <p>{item.release_date}</p>
                      <p>
                        TMDB Score{' '}
                        {item.vote_average}
                      </p>
                      <p className='font-extralight hidden md:flex mt-12'>
                        {item.overview}
                      </p>
                    </div>
                  </CarouselItem>
                )
              )}
            </CarouselContent>
            <CarouselPrevious className='hidden md:flex' />
            <CarouselNext className='hidden md:flex' />
          </>
        )}
      </Carousel>
    </div>
  )
}

export default Banner
