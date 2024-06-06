import DataFetcher from '@/components/DataFetcher'
import React from 'react'

function page() {
  return <div>{/* <DataFetcher /> */}</div>
}

export default page

// const API_KEY = process.env.API_KEY

// interface ParamProp {
//   searchParams: { genre: any }
// }

// export default async function Home({
//   searchParams,
// }: ParamProp) {
//   const genre =
//     searchParams.genre || 'fetchTrending'
//   const endpoint =
//     genre === 'fetchTopRated'
//       ? '/movie/top_rated'
//       : '/trending/all/week'
//   const url = `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US&page=1`

//   try {
//     console.log('Fetching URL:', url) // Log the URL for debugging
//     const res = await fetch(url)
//     const data = await res.json()

//     if (!res.ok) {
//       console.error('API Error:', data) // Log full response for debugging
//       throw new Error(
//         `Failed to fetch data: ${data.status_message}`
//       )
//     }

//     const results = data.results

//     return (
//       <div>
//         {/* Your component logic here */}
//         {results &&
//           results.map((result: any) => (
//             <div key={result.id}>
//               {result.title}
//             </div>
//           ))}
//       </div>
//     )
//   } catch (error) {
//     console.error('Error fetching data:', error)
//     throw new Error('Failed to fetch data')
//   }
// }
