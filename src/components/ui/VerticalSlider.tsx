"use client";

import * as React from "react";
import Image from "next/image";
import { Roboto_Condensed } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const roboto = Roboto_Condensed({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export type ImageProps = {
  src: string;
  alt: string;
  id: string;
};

type CarouselDemoProps = {
  propArray: ImageProps[];
};

export default function CarouselDemo({
  propArray,
  title,
  href,
}: CarouselDemoProps & { title: string; href: string }) {
  const pushToRoute = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    window.location.href = `projects/${href}`;
  };

  const variants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      <Carousel className="w-full max-w-[750px] h-[45vh]">
        <CarouselContent>
          {propArray.map(({ src, alt, id }) => (
            <CarouselItem key={id} className="h-[900px]">
              <div className="p-1 h-full">
                <div className="flex flex-col items-start h-full">
                  <motion.h1
                    className={`${roboto.className} text-2xl font-roboto uppercase text-white mb-2.5 mr-[5%] md:mr-0`}
                    variants={variants}
                  >
                    {title}
                  </motion.h1>
                  <motion.div
                    className="object-contain w-full h-[50%] cursor-pointer mt-[-25%] md:mt-0"
                    onClick={pushToRoute}
                    variants={variants}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      key={id}
                      width={1000}
                      height={100}
                    />
                  </motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute right-[45px] top-[-30px] z-10">
          <CarouselPrevious className="absolute right-[-15px] md:right-[-55px] top-12 md:top-10 z-10 -translate-y-1/2 transform" />
          <CarouselNext className="absolute right-[-25px] md:right-[-55px] top-12 md:top-10 z-10 -translate-y-1/2 transform" />
        </div>
      </Carousel>
    </motion.div>
  );
}
