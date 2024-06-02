const API_KEY = process.env.API_KEY

interface ParamProp {
  searchParams: { genre: any }
}

export default async function Home({
  searchParams,
}: ParamProp) {
  const genre =
    searchParams.genre || 'fetchTrending'
  const endpoint =
    genre === 'fetchTopRated'
      ? '/movie/top_rated'
      : '/trending/all/week'
  const url = `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US&page=1`

  try {
    console.log('Fetching URL:', url) // Log the URL for debugging
    const res = await fetch(url)
    const data = await res.json()

    if (!res.ok) {
      throw new Error(
        `Failed to fetch data: ${data.status_message}`
      )
    }

    const results = data.results

    return <div></div> // Your component logic here
  } catch (error) {
    console.error('Error fetching data:', error)
    throw new Error('Failed to fetch data')
  }
}
