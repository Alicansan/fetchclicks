import Image from 'next/image'

interface Props {
  params: {
    id: string
  }
}

export default async function MoviePage({
  params,
}: Props) {
  const tvId = params.id

  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${tvId}?api_key=${process.env.API_KEY}`
  )
  const tv = await res.json()

  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
        width={500}
        height={500}
        alt=''
      />
    </div>
  )
}
