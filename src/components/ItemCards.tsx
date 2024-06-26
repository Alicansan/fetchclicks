/* eslint-disable @next/next/no-img-element */
interface IcemCardsProp {
  id: number
  title?: string
  name?: string
  overview: string
  poster_path: string
  vote_avarage: number
}

const ItemCards = ({
  id,
  title,
  name,
  overview,
  poster_path,
  vote_avarage,
}: IcemCardsProp) => {
  return (
    <div
      key={id}
      className='relative mb-4 lg:mb-0'
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <div className='z-20 absolute opacity-0 h-full bottom-0  p-2 bg-black bg-opacity-70 bg-gradient-to-t from-black to-transparent hover:opacity-100 transition delay-150 duration-100 ease-in-out'>
        <div className='text-2xl mb-2 '>
          {title || name}
        </div>
        <div>Rating: {vote_avarage}</div>
        <div className='font-thin mt-2 mx-4'>
          {overview}
        </div>
      </div>
    </div>
  )
}

export default ItemCards
