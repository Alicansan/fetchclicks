import ItemCards from '@/components/ItemCards'
import { TrendingResponse } from '@/types'

interface TrendingProp {
  trendingData: TrendingResponse
}

const Trending = ({
  trendingData,
}: TrendingProp) => {
  return (
    <div className='grid md:grid-cols-3 lg:rid-cols-4 gap-3 grid-cols-1 mb-3 lg:mb-0'>
      {trendingData.results?.map((trending) => (
        <ItemCards
          key={trending.id}
          id={trending.id}
          name={trending.name}
          overview={trending.overview}
          poster_path={trending.poster_path}
          vote_avarage={trending.vote_average}
        />
      ))}
    </div>
  )
}

export default Trending
