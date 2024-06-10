import { TrendingResponse } from '@/types'

interface TrendingProp {
  trendingData: TrendingResponse
}

const Trending = ({
  trendingData,
}: TrendingProp) => {
  return (
    <div>
      {trendingData.results.map((item) => (
        <div key={item.id}>
          <h3>
            {item.title || item.name || 'N/A'}
          </h3>
          <p>{item.overview}</p>
        </div>
      ))}
    </div>
  )
}

export default Trending
