/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

interface Props {
  content: any;
  className?: string;
}

export default function ImageCarousel({ content, className }: Props) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay({ delay: 5000 })],
  );

  return (
    <div className={cn(`embla`, className)} ref={emblaRef}>
      <div className="embla__container">
        {content.map((image: any, index: number) => (
          <div className="embla__slide m-0" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/original/${image.file_path}`}
              width={image.width}
              height={image.height}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
