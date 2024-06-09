import { NextResponse } from "next/server"

 const key = process.env.API_KEY


 
 export async function getTv() {
   try {
    const tvResponse = await fetch(`https://api.thetvdb.org/3/discover/tv?api_key=${key}`)
    if (!tvResponse.ok) {
      throw new Error(`Http Error! Status: ${tvResponse.status}` )
    }
    const tvData = await tvResponse.json()
    return NextResponse.json(tvData)
   } catch (error) {
    console.log(error)
    return NextResponse.json({error: "Failed to fetch data"}, {status:500})
   }
 }
 