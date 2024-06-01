import Link from 'next/link'
import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='font-bebas '>
      <div className='bg-red-600 w-max'>
        <label
          htmlFor=''
          className=' flex flex-col gap-1 bg-white w-14 h-2 rounded-lg  
           before:block before:w-14 before:h-2 before:rounded-lg before:content-["\00A0"] before:bg-white
          after:block after:w-14 after:h-2 after:rounded-lg after:content-["\00A0"] after:bg-white '
        >
          <input
            type='checkbox'
            className='appearance-none bg-white w-14 h-2 rounded-lg border-4 -mb-[4px] outline-none '
          />
          <aside>
            <nav></nav>
          </aside>
        </label>
      </div>
      <div className='hidden'>
        <Link
          href={'/'}
          className='flex items-center gap-2  '
        >
          <FaPlayCircle className=' ' />
          <p className='text-2xl font-semibold tracking-[2px] ml-4  inline align-middle'>
            FETCHCLICKS
          </p>
        </Link>
        <nav className=''>
          <Link href={'/'}>Movies</Link>
          <Link href={'/'}>Series</Link>
          <Link href={'/'}>FETCHCLICKS KIDS</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
