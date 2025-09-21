"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

const TraditionalArt: React.FC<{
  media: {
    mediaOne: string | StaticImageData;
    mediaTwo: string | StaticImageData;
    mediaThree: string | StaticImageData;
  };
  title: string;
  link: string;
  ctaName: string;
  caption: string;
}> = ({ caption, title, link, ctaName, media }) => {
  return (
    <section className="relative w-full overflow-hidden md:h-[608px] group">
      <div className="absolute w-full z-10 flex items-end md:items-center pb-8 justify-center h-full">
        <div className="text-center text-white px-6 max-w-2xl">
          <h2 className="text-4xl opacity-60 md:text-5xl font-semibold mb-2 text-balance">
            {title}
          </h2>
          {caption && (
            <p className="text-sm opacity-60 max-w-xs leading-[100%] mx-auto md:text-xl mb-3 text-pretty">
              {caption}
            </p>
          )}
          <button className="bg-transparent md:text-base text-xs text-white rounded-full border-1 opacity-60 font-semibold px-3 py-[5px] md:px-8 md:py-3">
            <a href={link}>{ctaName}</a>
          </button>
        </div>
      </div>
      {media && (
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="relative w-full h-[370px] md:h-[608px]">
            <Image
              className="object-cover object-center h-auto w-full"
              alt={"Traditional Character"}
              src={media.mediaOne}
              fill
              quality={80}
            />
          </div>
          <div className="relative hidden md:block w-full h-[240px] md:h-[608px]">
            <Image
              className="object-cover object-center h-auto w-full"
              alt={"Traditional Character"}
              src={media.mediaTwo}
              fill
              quality={100}
            />
          </div>
          <div className="relative w-full hidden md:block h-[240px] md:h-[608px]">
            <Image
              className="object-cover object-center h-auto w-full"
              alt={"Traditional Character"}
              src={media.mediaThree}
              fill
              quality={100}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TraditionalArt;
