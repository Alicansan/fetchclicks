/* eslint-disable @next/next/no-img-element */
import { MovieResult } from '@/types'
import Image from 'next/image'

interface Props {
  params: {
    id: string
  }
}

export default async function MoviePage({
  params,
}: Props) {
  const movieId = params.id

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  )
  const movie = (await res.json()) as MovieResult
  console.log(movie)
  return (
    <div className='container mx-auto mt-12'>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  )
}
