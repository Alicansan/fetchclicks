'use client'
import { notFound } from 'next/navigation'
import { useEffect, useState } from 'react'

type Props = {
  params: {
    term: string
  }
}
const key = process.env.API_KEY
function Search({ params: { term } }: Props) {
  if (!term) notFound()

  const [results, setResults] = useState<any[]>(
    []
  ) //hodls the search results

  const [isLoading, setIsLoading] =
    useState<boolean>(false) //holds the loading state

  const [error, setError] = useState<
    string | null
  >(null) //holds the error state

  const termToUse = decodeURI(term) //decoding the seeach term

  useEffect(() => {}, [])

  useEffect(() => {
    const fetchSearchResults = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/multi?query=${termToUse}&include_adult=false&language=en-US&page=1`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${key}`,
            },
          }
        )
        const data = await response.json()
        setResults(data.results)
      } catch (err: any) {
        setError(err)
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    // Arama isteğini yapma
    fetchSearchResults()
  }, [termToUse])

  if (!term) notFound()

  return (
    <div>
      <h1>{termToUse}</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {error && <p>{error}</p>}
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            {result.title || result.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search
