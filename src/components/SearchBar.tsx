'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const SearchBar = () => {
  const [term, setTerm] = useState<string>('')
  console.log(term)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // prevent page refresh

    if (!term) return //encode search term to url and redirect
    router.push(`/search/${encodeURI(term)}`)
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='mt-1 hidden md:flex '
      >
        <input
          type='text'
          value={term}
          onChange={(e) =>
            setTerm(e.target.value)
          }
          className='bg-carribbean placeholder:text-champagnepink pl-4 pt-1 placeholder:font-oswald rounded-md  '
          placeholder='Search...'
        />
        <button
          className='ml-3 bg-darkslategray p-2 px-5 rounded-md'
          type='submit'
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
