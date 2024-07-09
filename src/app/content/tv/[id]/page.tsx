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
const fetchTvData = cache(async (tvId: string) => {
  const [tvData, tvImgResponse, tvTrailerResponse, castResponse] =
    await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/tv/${tvId}?api_key=${process.env.API_KEY}`,
      ),
      fetch(
        `https://api.themoviedb.org/3/tv/${tvId}/images?api_key=${process.env.API_KEY}`,
      ),
      fetch(
        `https://api.themoviedb.org/3/tv/${tvId}/videos?api_key=${process.env.API_KEY}`,
      ),
      fetch(
        `https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=${process.env.API_KEY}`,
      ),
    ]);

  const tv = (await tvData.json()) as MovieResult;
  const tvImages = await tvImgResponse.json();
  const tvTrailer = (await tvTrailerResponse.json()) as TrailerResponse;
  const cast = (await castResponse.json()) as CastResult;

  return { tv, tvImages, tvTrailer, cast };
});

export default async function MoviePage({ params }: Props) {
  const tvId = params.id;
  const { tv, tvImages, tvTrailer, cast } = await fetchTvData(tvId);
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
          content={tvImages.backdrops?.slice(0, 5)}
        />
        <div className="container relative grid grid-cols-1 justify-center lg:grid-cols-2 lg:justify-around">
          <img
            className="h-auto w-auto"
            src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
            alt={tv.title}
          />
          <div className="mr-12 mt-12 flex flex-col items-center justify-between gap-2 lg:items-end">
            <div className="items-centergap-2 flex flex-col lg:items-end">
              <h1 className="text-4xl font-bold">{tv.title}</h1>

              <div className="flex flex-wrap gap-2">
                {tv.genres.map((genre) => (
                  <span
                    className="my-2 bg-persianred px-2 text-center"
                    key={genre.id}
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
              <p className="my-2 bg-darkslategray px-2 text-center">
                Score: {tv.vote_average.toFixed(2)}
              </p>
            </div>

            <div>
              <p className="mb-6 p-2 text-lg">{tv.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Castcrew cast={cast}></Castcrew>
      </div>
      <div className="max-w-auto container md:max-w-[854px] md:px-1 md:py-6">
        <h1 className="mb-2 mt-5 text-center text-3xl">Videos of {tv.title}</h1>
        <VideoCarousel content={tvTrailer.results} />
      </div>
    </section>
  );
}
