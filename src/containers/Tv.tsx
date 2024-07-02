import ItemCards from '@/components/ItemCards'
import { TvResponse } from '@/types'

interface TvProp {
  tvData: TvResponse
}

const Tv = ({ tvData }: TvProp) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3  mb-3 lg:mb-0'>
      {tvData.results?.map((item) => (
        <ItemCards
          key={item.id}
          id={item.id}
          title={item.name}
          overview={item.overview}
          poster_path={item.poster_path}
          vote_avarage={item.vote_average}
          type='tv'
        />
      ))}
    </div>
  )
}

export default Tv
