type Props = {
  params: {
    id: number
  }
  searchParams: {
    genre: string
  }
}

function Genre({
  params: { id },
  searchParams: { genre },
}: Props) {
  return (
    <div>
      {' '}
      {id} {genre}{' '}
    </div>
  )
}

export default Genre
