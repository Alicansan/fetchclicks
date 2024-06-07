'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaPlayCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const [query, setQuery] = useState('')

  async function handleSearch(e: any) {
    e.preveventDefault()
  }

  return (
    <header className='relative z-50 font-bebas px-2 flex flex-row  overflow-hidden  md:w-full md:mx-auto md:max-w-[89rem] md:h-full  '>
      {/* Sidebar */}
      <div className='fixed'>
        <div
          onClick={handleClick}
          className='flex flex-col justify-center items-center w-12 h-12 md:hidden top-0 left-0   bg-transparent hover:cursor-pointer'
        >
          <button>
            <div className='relative'>
              <span
                className={`bg-champagnepink block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5
          ${
            isOpen
              ? 'rotate-45 translate-y-1'
              : '-translate-y-0.5'
          } `}
              ></span>
              <span
                className={`bg-champagnepink block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5
          ${
            isOpen ? 'opacity-0' : 'opacity-100  '
          }`}
              ></span>
              <span
                className={`bg-champagnepink block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5
          ${
            isOpen
              ? '-rotate-45 -translate-y-1'
              : 'translate-y-0.5'
          } `}
              ></span>
            </div>
          </button>
        </div>
        <div
          className={`  shadow-2xl bg-persianred flex- flex-col pt-20  fixed   top-0 left-0 h-[2000px] px-12 -z-10 md:hidden ${
            isOpen
              ? 'ease-out duration-300'
              : '-translate-x-60 ease-in duration-300'
          }`}
        >
          <nav className='flex flex-col mt-10 items-center text-2xl '>
            <Link href={'/'}>Trending</Link>
            <Link href={'/'}>Top Rated</Link>
            <Link href={'/'}>Series</Link>
          </nav>
        </div>
      </div>
      {/* Sidebar */}

      <div className=' flex flex-row mt-1.5 ml-12 md:ml-0  justify-between text-2xl w-full drop-shadow-2xl '>
        <Link
          href={`${isOpen ? '' : '/'}`}
          className='flex items-center gap-2  '
        >
          <FaPlayCircle className=' ' />
          <p className=' text-2xl font-semibold tracking-[2px] mt-1  inline align-middle [text-shadow:_5px_5px_0_rgb(0_0_0_/_90%)]'>
            FETCHCLICKS
          </p>
        </Link>
        <div className=''>
          <form
            onSubmit={handleSearch}
            className='mt-1 hidden md:flex '
          >
            <input
              type='text'
              value={query}
              onChange={(e) =>
                setQuery(e.target.value)
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
        <nav className=' gap-12  md:flex hidden mt-3'>
          <Link
            href={'/'}
            className='[text-shadow:_5px_5px_0_rgb(0_0_0_/_90%)]'
          >
            Trending
          </Link>
          <Link
            href={'/'}
            className='[text-shadow:_5px_5px_0_rgb(0_0_0_/_90%)] text-nowrap'
          >
            Top Rated
          </Link>
          <Link
            href={'/'}
            className='[text-shadow:_5px_5px_0_rgb(0_0_0_/_90%)]'
          >
            Series
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
