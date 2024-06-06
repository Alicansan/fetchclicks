const GetData = async () => {
  const key = process.env.API_KEY

  const truncate = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num)
    } else {
      return str
    }
  }
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
    )
    if (!response.ok) {
      throw new Error(
        `HTTP Error! Status: ${response.status}`
      )
    }
    const data = await response.json()

    const results = data.results

    const randomIndex = Math.floor(
      Math.random() * results.length
    )

    const movie = results[randomIndex]

    console.log(results)

    return { movie, truncate }
  } catch (error) {
    console.error(
      'Failed to catch upcoming movies',
      error
    )
    return { movie: null, truncate: null }
  }
}

async function Banner() {
  const { movie, truncate } = await GetData()
  return (
    <div>
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          />

          <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Banner
