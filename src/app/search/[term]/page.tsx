import { notFound } from 'next/navigation'
import { useEffect, useState } from 'react'

type Props = {
  params: {
    term: string
  }
}

function Search({ params: { term } }: Props) {
  if (!term) notFound()

  const [results, setResults] = useState<any[]>(
    []
  ) //hodls the search results

  const [isLoading, setIsLoading] =
    useState<boolean>(true) //holds the loading state

  const [error, setError] = useState<
    string | null
  >(null) //holds the error state

  const termToUse = decodeURI(term) //decoding the seeach term

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setIsLoading(true)

        const response = await fetch(
          `https://api.themoviedb.org/3/search/multi?query=${termToUse}&include_adult=false&language=en-US&page=1`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer 0c7f3bc0a6eed5d16f7e2de13906753a',
            },
          }
        )

        const data = await response.json()

        setResults(data.results)
      } catch (err) {
        setError(
          'Arama sonuçları yüklenirken bir hata oluştu.'
        )
      } finally {
        setIsLoading(false)
      }
    }

    // Arama isteğini yapma
    fetchSearchResults()
  }, [termToUse])

  return <div>{termToUse}</div>
}

export default Search
