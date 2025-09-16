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
      {/* {caption && (
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.43)] z-50 flex flex-col justify-end pb-16 items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-2xl font-bold md:text-5xl">
            {title}
          </span>
          <span className="text-white px-3 md:px-0 md:text-lg mx-auto max-w-xl md:max-w-3xl md:mt-6 text-center">
            {caption}
          </span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className="text-center my-5 mb-2 text-xs md:text-base font-medium px-4 py-[7px] tracking-tighter text-white rounded-3xl border border-1"
          >
            {ctaName}
          </a>
        </div>
      )} */}
      <div className="absolute w-full z-10 flex items-end md:items-center pb-8 justify-center h-full">
        <div className="text-center text-white px-6 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-semibold mb-2 text-balance">
            {title}
          </h2>
          {caption && (
            <p className="text-sm max-w-xs leading-[100%] mx-auto md:text-xl mb-3 text-pretty opacity-90">
              {caption}
            </p>
          )}
          <button className="bg-transparent md:text-base text-xs text-white rounded-full border-2 font-semibold px-4 py-[4.5px] md:px-8 md:py-3">
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
