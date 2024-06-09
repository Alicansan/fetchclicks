interface TrendingProp {
  trendingData: any
}

const Trending = ({
  trendingData,
}: TrendingProp) => {
  return (
    <div>
      {trendingData.results.map((item: any) => (
        <div key={item.id}>
          <h3>{item.title || item.name}</h3>
          <p>{item.overview}</p>
        </div>
      ))}
    </div>
  )
}

export default Trending
