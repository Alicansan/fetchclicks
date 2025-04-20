import { NextResponse } from 'next/server'

const key = process.env.API_KEY

export async function GET(request: Request) {
  try {
    // Parse query parameters with defaults
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page') || '1'
    const limit = searchParams.get('limit') || '12'

    // Fetch trending TV shows for the day with pagination parameters
    const tvResponse = await fetch(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}&page=${page}&limit=${limit}`
    )

    if (!tvResponse.ok) {
      throw new Error(`Http Error! Status: ${tvResponse.status}`)
    }

    const tvData = await tvResponse.json()

    // Return only the specified number of items
    return NextResponse.json({
      page: Number(page),
      limit: Number(limit),
      total_pages: tvData.total_pages,
      results: tvData.results.slice(0, Number(limit))
    })
  } catch (error) {
    console.error('TV shows fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    )
  }
}
