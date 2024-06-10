import { MovieResponse } from '@/types'

interface MoviesProp {
  movieData: MovieResponse
}

const Movies = ({ movieData }: MoviesProp) => {
  return (
    <div>
      {movieData.results?.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.overview}</p>
        </div>
      ))}
    </div>
  )
}

export default Movies
