/* eslint-disable @next/next/no-img-element */
import ImageCarousel from '@/components/ui/ImageCarousel'
import VideoCarousel from '@/components/ui/VideoCarousel'
import { MovieResult, TrailerResponse } from '@/types'
import { cache } from 'react'

interface Props {
  params: {
    id: string
  }
}

// Cache results to avoid multiple fetches
const fetchMovieData = cache(async (movieId: string) => {
  const [res, movImgResponse, movTrailerResponse] =
    await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${process.env.API_KEY}`
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.API_KEY}`
      ),
    ])

  const movie = (await res.json()) as MovieResult
  const movieImages = await movImgResponse.json()
  const movieTrailer =
    (await movTrailerResponse.json()) as TrailerResponse

  return { movie, movieImages, movieTrailer }
})

export default async function MoviePage({ params }: Props) {
  const movieId = params.id
  const { movie, movieImages, movieTrailer } =
    await fetchMovieData(movieId)

  return (
    <div className='container  mt-12 '>
      <ImageCarousel
        content={movieImages.backdrops?.slice(0, 5)}
      />
      <img
        className='mx-auto'
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <VideoCarousel content={movieTrailer.results} />
    </div>
  )
}
