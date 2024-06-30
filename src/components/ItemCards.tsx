/* eslint-disable @next/next/no-img-element */
interface IcemCardsProp {
  id: number
  title: string
  overview: string
  poster_path: string
  vote_avarage: number
}

const ItemCards = ({
  id,
  title,
  overview,
  poster_path,
  vote_avarage,
}: IcemCardsProp) => {
  return (
    <div key={id}>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <div className=''>
        <div>{title}</div>
        <div>{overview}</div>
        <div>{vote_avarage}</div>
      </div>
    </div>
  )
}

export default ItemCards
