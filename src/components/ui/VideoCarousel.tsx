/* eslint-disable @next/next/no-img-element */

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

interface Props {
  content: any;
}

export default function VideoCarousel({ content }: Props) {
  return (
    <div className="container relative mx-auto md:px-1 md:py-6">
      <Carousel className="md:mx-12">
        {content && (
          <>
            <CarouselContent>
              {content.map((item: any, index: number) => (
                <CarouselItem key={index} className="relative flex">
                  <div key={index} className="">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.key}`}
                      className="h-[40vh] w-[40vw] rounded-xl border-2 border-persianred md:h-[421px] md:w-[750px]"
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
