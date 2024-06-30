import ItemCards from '@/components/ItemCards'
import { MovieResponse } from '@/types'

interface MoviesProp {
  movieData: MovieResponse
}

const Movies = ({ movieData }: MoviesProp) => {
  return (
    <div>
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
