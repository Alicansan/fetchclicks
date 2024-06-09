import { NextResponse } from "next/server"

 const key = process.env.API_KEY


 
 export async function GET() {
   try {
    const trendingResponse = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${key}`)
    if (!trendingResponse.ok) {
      throw new Error(`Http Error! Status: ${trendingResponse.status}` )
    }
    const trendingData = await trendingResponse.json()
    
    return NextResponse.json(trendingData)
   } catch (error) {
    console.log(error)
    return NextResponse.json({error: "Failed to fetch data"}, {status:500})
   }
 } 
 