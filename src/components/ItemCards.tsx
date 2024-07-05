import Link from 'next/link'

/* eslint-disable @next/next/no-img-element */
interface ItemCardsProp {
  id: number
  title?: string
  name?: string
  overview: string
  poster_path: string
  vote_avarage: number
  type: 'movie' | 'tv' | 'person'
  backdrop_path?: string
}

const ItemCards = ({
  id,
  title,
  name,
  overview,
  poster_path,
  vote_avarage,
  type,
  backdrop_path,
}: ItemCardsProp) => {
  return (
    <Link href={`/content/${type}/${id}`}>
      <div
        key={id}
        className='relative mb-4 lg:mb-0 border-2 border-darkslategray'
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <div className='flex flex-col justify-between z-20 absolute opacity-0 h-full bottom-0  p-2 border-2 border-darkslategray hover:border-champagnepink bg-black bg-opacity-70 bg-gradient-to-t from-black to-transparent hover:opacity-100 transition delay-150 duration-100 ease-in-out '>
          <div className='m-2 text-clip'>
            <div>Rating: {vote_avarage}</div>
            <p className='font-thin mt-2 mx-4 text-clip'>
              {overview}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ItemCards
