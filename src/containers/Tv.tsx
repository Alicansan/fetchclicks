import { TvResponse } from '@/types'

interface TvProp {
  tvData: TvResponse
}

const Tv = ({ tvData }: TvProp) => {
  return (
    <div>
      {tvData.results?.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.overview} </p>
        </div>
      ))}
    </div>
  )
}

export default Tv
