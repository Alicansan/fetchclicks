/* eslint-disable @next/next/no-img-element */
import ReactPlayer from 'react-player'
import {
  Backdrop,
  MovieResult,
  TrailerResponse,
} from '@/types'
import Image from 'next/image'
import YouTube from 'react-youtube'
import dynamic from 'next/dynamic'
// import YoutubeTrailer from '@/components/YoutubeTrailers'
const YoutubeTrailer = dynamic(
  () => import('@/components/YoutubeTrailers'),
  {
    loading: () => <div>Loading...</div>,
    ssr: false,
  }
)

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

  const movImgResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${process.env.API_KEY}`
  )
  0
  const movieImages = await movImgResponse.json()

  const movTrailerResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.API_KEY}`
  )
  0
  const movieTrailer =
    (await movTrailerResponse.json()) as TrailerResponse

  return (
    <div className='container mx-auto mt-12'>
      {movieTrailer.results
        .slice(0, 3)
        .map((trailer) => (
          <YoutubeTrailer
            key={trailer.id}
            url={`https://www.youtube.com/watch?v=${trailer.key}`}
          />
        ))}
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        {movieImages.backdrops
          ?.slice(0, 12)
          .map((path: Backdrop, key: number) => (
            <img
              key={key}
              src={`https://image.tmdb.org/t/p/original/${path.file_path}`}
              width={path.width}
              height={path.height}
              alt=''
            />
          ))}
      </div>
      <div></div>
    </div>
  )
}
