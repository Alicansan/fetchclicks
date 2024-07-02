'use client'

import { useEffect } from 'react'

interface Props {
  error: any
  reset: () => void
}
export default function Error({
  error,
  reset,
}: Props) {
  console.log(error)
  useEffect(() => {}, [error])

  return (
    <div className='flex flex-col items-center justify-center h-screen text-xl '>
      <h1>Something went wrong!</h1>
      <button
        className='bg-darkslategray  p-3 rounded-md mt-4'
        onClick={reset}
      >
        Try again
      </button>
    </div>
  )
}
