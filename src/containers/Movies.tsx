import ItemCards from '@/components/ItemCards'
import { MovieResponse } from '@/types'

interface MoviesProp {
  movieData: MovieResponse
}

const Movies = ({ movieData }: MoviesProp) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3  mb-3 lg:mb-0'>
      {movieData.results?.map((movie) => (
        <ItemCards
          key={movie.id}
          id={movie.id}
          title={movie.title}
          overview={movie.overview}
          poster_path={movie.poster_path}
          vote_avarage={movie.vote_average}
        />
      ))}
    </div>
  )
}

export default Movies
