import { NextResponse } from "next/server";

const key = process.env.API_KEY;

export async function GET(request: Request) {
  try {
    // Parse query parameters with defaults
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page') || '1'
    const limit = searchParams.get('limit') || '12'

    // Fetch trending movies for the day with pagination parameters
    const movieResponse = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&page=${page}&limit=${limit}`
    );

    if (!movieResponse.ok) {
      throw new Error(`Http Error! Status: ${movieResponse.status}`);
    }

    const movieData = await movieResponse.json();

    // Return only the specified number of items
    return NextResponse.json({
      page: Number(page),
      limit: Number(limit),
      total_pages: movieData.total_pages,
      results: movieData.results.slice(0, Number(limit))
    });
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
