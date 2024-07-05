/* eslint-disable @next/next/no-img-element */
interface ContentpageProps {
  id: number
  title?: string
  name?: string
  overview: string
  poster_path: string
  vote_avarage: number
  type: 'movie' | 'tv' | 'person'
  backdrop_path?: string
  videos: string[]
  images: string[]
}

const Contentpage = ({
  id,
  title,
  name,
  overview,
  poster_path,
  vote_avarage,
  type,
  backdrop_path,
}: ContentpageProps) => {
  return (
    <div className='container mx-auto mt-12'>
      <div className='buraya background gelecek Büyük ihtimalle karosel olacak ve karosel otomatik geçcek '>
        <div className='absolute grid grid-cols-1 md:grid-cols-3 '>
          <img
            className=' col-span-1'
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
          <div className='col-span-2 '>
            <h1>{title || name}</h1>
            <p className='text-2xl'>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contentpage
