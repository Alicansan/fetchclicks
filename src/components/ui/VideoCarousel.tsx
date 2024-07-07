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
    <div className="inline h-auto w-[100vw] items-center">
      <Carousel>
        <CarouselContent>
          {content.map((video: any, index: number) => (
            <CarouselItem key={index}>
              <div key={index} className="items*center flex justify-center">
                <iframe
                  src={`https://www.youtube.com/embed/${video.key}`}
                  className="h-[40vh] w-[70vw] rounded-xl border-2 border-persianred md:h-[421px] md:w-[750px]"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
