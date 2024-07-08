/* eslint-disable jsx-a11y/alt-text */
import { CastResult } from "@/types";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/* eslint-disable @next/next/no-img-element */

interface CastProps {
  cast: CastResult;
}

const Castcrew = ({ cast }: CastProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="container max-w-4xl select-none"
    >
      <CarouselContent>
        {cast &&
          cast.cast.slice(0, 12).map((item: any, index: number) => (
            <CarouselItem
              key={index}
              className="flex flex-col items-center shadow-2xl md:basis-1/2 lg:basis-1/3"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt={item.name}
                width={98}
                height={145}
                className="mt-2 border-2 border-persianred"
              />
              <p className="my-2 flex-wrap text-center text-xl">{item.name}</p>
              <p className="flex-wrap text-center"> {item.character}</p>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

export default Castcrew;
