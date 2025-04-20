import { NextResponse } from "next/server"

const key = process.env.API_KEY

export async function GET(request: Request) {
  try {
    // Parse query parameters with defaults
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page') || '1'
    const limit = searchParams.get('limit') || '12'

    // Fetch trending items for the day with pagination parameters
    const trendingResponse = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&page=${page}&limit=${limit}`
    )
    
    if (!trendingResponse.ok) {
      throw new Error(`Http Error! Status: ${trendingResponse.status}`)
    }
    
    const trendingData = await trendingResponse.json()
    
    // Return only the specified number of items
    return NextResponse.json({
      page: Number(page),
      limit: Number(limit),
      total_pages: trendingData.total_pages,
      results: trendingData.results.slice(0, Number(limit))
    })
  } catch (error) {
    console.error('Trending fetch error:', error)
    return NextResponse.json({error: "Failed to fetch data"}, {status:500})
  }
}