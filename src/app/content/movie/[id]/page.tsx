/* eslint-disable @next/next/no-img-element */

import Castcrew from "@/components/Castcrew";
import ImageCarousel from "@/components/ImageCarousel";
import VideoCarousel from "@/components/VideoCarousel";
import { CastResult, MovieResult, TrailerResponse } from "@/types";
import { cache } from "react";

interface Props {
  params: {
    id: string;
  };
}

// Cache results to avoid multiple fetches
const fetchMovieData = cache(async (movieId: string) => {
  const [movieData, movImgResponse, movTrailerResponse, castResponse] =
    await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`,
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${process.env.API_KEY}`,
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.API_KEY}`,
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.API_KEY}`,
      ),
    ]);

  const movie = (await movieData.json()) as MovieResult;
  const movieImages = await movImgResponse.json();
  const movieTrailer = (await movTrailerResponse.json()) as TrailerResponse;
  const cast = (await castResponse.json()) as CastResult;

  return { movie, movieImages, movieTrailer, cast };
});

export default async function MoviePage({ params }: Props) {
  const movieId = params.id;
  const { movie, movieImages, movieTrailer, cast } =
    await fetchMovieData(movieId);
  const crewCastDirector: any = cast?.crew?.filter(
    (cast) => cast.job === "Director",
  );
  const crewCastWriter: any = cast?.crew?.filter(
    (cast) => cast.job === "Writer",
  );

  return (
    <section className="mx-auto">
      <div className="relative mt-12">
        <ImageCarousel
          className="-z-10 hidden h-full w-full brightness-[0.2] lg:absolute lg:flex"
          content={movieImages.backdrops?.slice(0, 5)}
        />
        <div className="container relative grid grid-cols-1 justify-center lg:grid-cols-2 lg:justify-around">
          <img
            className="h-auto w-auto"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="mr-12 mt-12 flex flex-col items-center justify-between gap-2 lg:items-end">
            <div className="items-centergap-2 flex flex-col lg:items-end">
              <h1 className="text-4xl font-bold">{movie.title}</h1>
              <span>Released on {movie.release_date.toString()}</span>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    className="my-2 bg-persianred px-2 text-center"
                    key={genre.id}
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
              <p className="my-2 bg-darkslategray px-2 text-center">
                Score: {movie.vote_average.toFixed(2)}
              </p>
            </div>
            <div>
              <p>
                Director:{" "}
                {crewCastDirector.map((director: any) => (
                  <span key={director.id}>{director.name} </span>
                ))}
              </p>
              <p>
                Writer:{" "}
                {crewCastWriter.map((writer: any) => (
                  <span key={writer.id}>{writer.name} </span>
                ))}
              </p>
            </div>
            <div>
              <p className="mb-6 p-2 text-lg">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-auto container md:max-w-[854px] md:px-1 md:py-6">
        <h1 className="mb-4 mt-5 text-center text-3xl">
          Trailers and sneak peeks of {movie.title}
        </h1>
        <VideoCarousel content={movieTrailer.results} />
      </div>
      <div className="container my-6 border-t-2 border-champagnepink">
        <h1 className="my-6 text-center text-2xl">Cast of {movie.title}</h1>
        <Castcrew cast={cast}></Castcrew>
      </div>
    </section>
  );
}
