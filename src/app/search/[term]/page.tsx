import ItemCards from '@/components/ItemCards'
import {
  MovieResult,
  MultiSearchResponse,
  PersonResult,
  TvResult,
} from '@/types'

interface SearchPageProps {
  params: {
    term: string
  }
}

export default async function SearchPage({
  params,
}: SearchPageProps) {
  const searchTerm = params.term

  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&query=${searchTerm}&include_adult=false&language=en-US&page=1`
  )
  const data =
    (await res.json()) as MultiSearchResponse

  return (
    <div className='container mx-auto mt-12'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3  mb-3 lg:mb-0'>
        {data.results?.map((result) => {
          const type = result.media_type as
            | 'movie'
            | 'tv'
            | 'person'

          if (type === 'tv') {
            const tvResult = result as TvResult
            return (
              <ItemCards
                key={tvResult.id}
                id={tvResult.id}
                title={tvResult.name}
                overview={tvResult.overview}
                poster_path={tvResult.poster_path}
                vote_avarage={
                  tvResult.vote_average
                }
                type='tv'
              />
            )
          } else if (type === 'person') {
            const personResult =
              result as PersonResult
            return (
              <ItemCards
                key={personResult.id}
                id={personResult.id}
                title={personResult.name}
                overview={''} // PersonResult may not have an overview
                poster_path={
                  personResult.profile_path ?? ''
                }
                vote_avarage={
                  personResult.popularity
                }
                type='person'
              />
            )
          } else {
            const movieResult =
              result as MovieResult
            return (
              <ItemCards
                key={movieResult.id}
                id={movieResult.id}
                title={movieResult.title}
                overview={movieResult.overview}
                poster_path={
                  movieResult.poster_path
                }
                vote_avarage={
                  movieResult.vote_average
                }
                type='movie'
              />
            )
          }
        })}
      </div>
    </div>
  )
}
