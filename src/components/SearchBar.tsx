'use client'

import { cn } from '@/lib/utils'
import { Router } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const SearchBar = () => {
  const [term, setTerm] = useState<string>('')
  const router = useRouter()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/search/${term}`)
  }

  return (
    <div className='flex justify-between items-center'>
      <form
        className='flex justify-between items-center'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          value={term}
          onChange={(e) =>
            setTerm(e.target.value)
          }
          className='bg-carribbean placeholder:text-champagnepink pl-4 pt-1 placeholder:font-oswald rounded-md font-oswald w-28  md:w-full lg:w-full '
          placeholder='Search...'
        />
        <button
          className='ml-3 bg-darkslategray p-2 px-5 rounded-md hidden md:block lg:block h-full disabled:bg-slate-500'
          type='submit'
          disabled={!term}
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
