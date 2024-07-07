import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import Link from "next/link";

const GetData = async () => {
  const key = process.env.API_KEY;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US`,
      { cache: "no-cache" },
    );
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();
    const results = data.results;
    const randomIndex = Math.floor(Math.random() * results.length);
    const movie = results[randomIndex];
    return { results, movie };
  } catch (error) {
    console.error("Failed to catch upcoming movies list", error);
    return { results: [], movie: null };
  }
};

async function Banner() {
  const { results, movie } = await GetData();
  return (
    <div className="relative z-10 bg-none md:px-1 md:py-6">
      <Carousel className="md:mx-12">
        {movie && (
          <>
            <CarouselContent>
              {results.map((item: any, index: number) => (
                <CarouselItem key={index} className="relative flex">
                  <Image
                    className="h-auto w-full object-cover"
                    width={1200}
                    height={675}
                    alt="title"
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  />
                  <div className="absolute bottom-[0%] left-[1%] z-20 w-full bg-gradient-to-t from-black to-transparent p-4">
                    <Link href={`/content/movie/${item.id}`}>
                      <h1 className="inline font-bebas text-5xl uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-darkslategray">
                        {item.title}
                      </h1>
                    </Link>
                    <p>{item.release_date}</p>
                    <span className="my-2 bg-darkslategray px-2 text-center">
                      Score {item.vote_average.toFixed(2)}
                    </span>
                    <p className="mt-12 hidden font-extralight md:flex">
                      {item.overview}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </>
        )}
      </Carousel>
    </div>
  );
}

export default Banner;
