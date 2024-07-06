/* eslint-disable @next/next/no-img-element */
import ImageCarousel from "@/components/ui/ImageCarousel";
import VideoCarousel from "@/components/ui/VideoCarousel";
import { MovieResult, TrailerResponse } from "@/types";
import { cache } from "react";

interface Props {
  params: {
    id: string;
  };
}

// Cache results to avoid multiple fetches
const fetchMovieData = cache(async (movieId: string) => {
  const [movieData, movImgResponse, movTrailerResponse] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`,
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${process.env.API_KEY}`,
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.API_KEY}`,
    ),
  ]);

  const movie = (await movieData.json()) as MovieResult;
  const movieImages = await movImgResponse.json();
  const movieTrailer = (await movTrailerResponse.json()) as TrailerResponse;

  return { movie, movieImages, movieTrailer };
});

export default async function MoviePage({ params }: Props) {
  const movieId = params.id;
  const { movie, movieImages, movieTrailer } = await fetchMovieData(movieId);

  return (
    <div className="relative mt-12">
      <ImageCarousel
        className="absolute -z-10 h-full w-full brightness-[0.2]"
        content={movieImages.backdrops?.slice(0, 5)}
      />
      <div className="container grid grid-cols-2 justify-around">
        <img
          className="ring-5 h-auto w-auto"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="mr-12 mt-12 flex flex-col items-end justify-between gap-2">
          <div className="flex flex-col items-end gap-2">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <span>Released on {movie.release_date.toString()}</span>
            <p>
              {movie.genres.map((genre) => (
                <p
                  className="my-2 bg-darkslategray px-2 text-center"
                  key={genre.id}
                >
                  {genre.name}
                </p>
              ))}
            </p>
          </div>
          <div>
            <p className="p-2 text-lg">{movie.overview}</p>
          </div>
        </div>
      </div>
      {/* <VideoCarousel content={movieTrailer.results} /> */}
    </div>
  );
}
