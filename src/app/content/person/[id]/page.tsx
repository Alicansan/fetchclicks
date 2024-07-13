import ImageCarousel from "@/components/ImageCarousel";
import { PersonCreditsResult, PersonImagesResult, PersonResult } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { cache } from "react";

interface PersonProps {
  params: {
    id: string;
  };
}

const fetchPersonData = cache(async (person_id: string) => {
  const [personResponse, personImagesResponse, personCreditsResponse] =
    await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/person/${person_id}?api_key=${process.env.API_KEY}`,
      ),
      fetch(
        `https://api.themoviedb.org/3/person/${person_id}/images?api_key=${process.env.API_KEY}`,
      ),
      fetch(
        `https://api.themoviedb.org/3/person/${person_id}/combined_credits?api_key=${process.env.API_KEY}`,
      ),
    ]);
  const person = (await personResponse.json()) as PersonResult;
  const personImages =
    (await personImagesResponse.json()) as PersonImagesResult;
  const personCredits =
    (await personCreditsResponse.json()) as PersonCreditsResult;

  return { person, personImages, personCredits };
});

const PersonPage = async ({ params }: any) => {
  const personId = params.id;
  const { person, personImages, personCredits } =
    await fetchPersonData(personId);
  var today = new Date();
  var born = new Date(person.birthday);
  return (
    <div className="my-16 grid grid-cols-1 gap-4 md:container md:grid-cols-2 md:items-center">
      <div className="mb-24">
        <h1 className="mb-6 flex text-center text-3xl font-bold">
          {person.name}
        </h1>
        <div className="h-[500px] w-[400px]">
          <ImageCarousel content={personImages.profiles} />
        </div>
      </div>
      <div className="flex-flex-col text-2xl">
        <p className="mb-4">Age: {today.getFullYear() - born.getFullYear()}</p>
        <p className="mb-4">Place of birth: {person.place_of_birth}</p>
        <p className="mb-4">
          Gender: {person.gender === 2 ? "Male" : "Female"}
        </p>
        <p>Biography: {person.biography}</p>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-4 border-b border-t border-champagnepink py-4 md:grid-cols-2 lg:col-span-2">
        <h2 className="col-span-2 text-start text-4xl">Known for</h2>
        {personCredits.cast.map((cast) => (
          <Link href={`/content/movie/${cast.id}`} key={cast.id}>
            <div
              className="m-auto flex flex-col items-center justify-center gap-2"
              key={cast.id}
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500/${cast.poster_path}`}
                alt={cast.name}
                width={100}
                height={100}
              />
              <h2 className="">
                As {cast.character} in the{" "}
                <span className="underline">{cast.original_title}</span>
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PersonPage;
