'use client'
import Trending from '@/containers/Trending'
import { useState, useEffect } from 'react'

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1)
  const [trendingData, setTrendingData] =
    useState<any>(null)

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await fetch(
          '/api/trending'
        )
        const trendingData = await response.json()
        console.log(trendingData)
        setTrendingData(trendingData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchTrending()
  }, [])

  return (
    <>
      <div className='flex justify-center'>
        <div className='w-full'>
          <ul
            className='flex  pt-3 pb-4 justify-center gap-12 '
            role='tablist'
          >
            <li className='  '>
              <a
                className={
                  '  px-5 py-3 ' + (openTab === 1)
                    ? ''
                    : ''
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                data-toggle='tab'
                href='#link1'
                role='tablist'
              >
                Trending
              </a>
            </li>
            <li className='  '>
              <a
                className={
                  ' px-5 py-3 ' + (openTab === 2)
                    ? ''
                    : ''
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                data-toggle='tab'
                href='#link2'
                role='tablist'
              >
                Movie
              </a>
            </li>
            <li className='  '>
              <a
                className={
                  ' px-5 py-3 ' + (openTab === 3)
                    ? ''
                    : ''
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(3)
                }}
                data-toggle='tab'
                href='#link3'
                role='tablist'
              >
                TV
              </a>
            </li>
          </ul>
          <div className='relative grid  justify-center border-2 '>
            <div className='px-4 py-5 flex '>
              <div className=''>
                <div
                  className={
                    openTab === 1
                      ? 'block'
                      : 'hidden'
                  }
                >
                  {trendingData ? (
                    <Trending
                      trendingData={trendingData}
                    />
                  ) : (
                    <p>loading</p>
                  )}
                </div>
                <div
                  className={
                    openTab === 2
                      ? 'block'
                      : 'hidden'
                  }
                >
                  <p>content 2</p>
                </div>
                <div
                  className={
                    openTab === 3
                      ? 'block'
                      : 'hidden'
                  }
                >
                  <p>content 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tabs
