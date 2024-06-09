import { NextResponse } from "next/server"

 const key = process.env.API_KEY


 
 export async function getMovie() {
   try {
    const movieResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}`)
    if (!movieResponse.ok) {
      throw new Error(`Http Error! Status: ${movieResponse.status}` )
    }
    const movieData = await movieResponse.json()
    return NextResponse.json(movieData)
   } catch (error) {
    console.log(error)
    return NextResponse.json({error: "Failed to fetch data"}, {status:500})
   }
 }
 