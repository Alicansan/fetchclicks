/* eslint-disable @next/next/no-img-element */

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface Props {
  content: any;
}

export default function VideoCarousel({ content }: Props) {
  return (
    <div className="mb-6 select-none">
      <Carousel className="items-center">
        {content && (
          <>
            <CarouselContent>
              {content.map((item: any, index: number) => (
                <CarouselItem key={index} className="relative">
                  <div key={index} className="flex justify-center">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.key}`}
                      className="rounded-xl border-2 border-persianred md:h-[421px] md:w-[750px]"
                    />
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
