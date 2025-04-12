"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const SliderCarousel = () => {
  return (
    <Carousel
      className="rounded-lg"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="rounded-lg">
        <CarouselItem className="rounded-lg">
          <div className="relative min-h-[600px] w-full">
            <Image
              className="rounded-lg object-cover object-center shadow"
              src="/library/l1.jpg"
              fill
              alt="Regent Cafe"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="rounded-lg">
          <div className="relative min-h-[600px] w-full">
            <Image
              className="rounded-lg object-cover object-center shadow"
              src="/library/l2.jpg"
              fill
              alt="Regent Cafe"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="rounded-lg">
          <div className="relative min-h-[600px] w-full">
            <Image
              className="rounded-lg object-cover object-center shadow"
              src="/library/l3.jpg"
              fill
              alt="Regent Cafe"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default SliderCarousel;
