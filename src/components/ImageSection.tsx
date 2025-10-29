"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ImageItem {
  imageUrl: string;
  imageAlt?: string;
}

interface ImageSectionProps {
  title: string;
  description?: string;
  images: ImageItem[]; // switched to array
  buttonText?: string;
  buttonHref?: string;
  height?: string;
  overlayOpacity?: string;
}

export function ImageSection({
  title,
  description,
  images,
  buttonText = "View Portfolio",
  buttonHref = "#",
  height = "h-96",
  overlayOpacity = "bg-black/60",
}: ImageSectionProps) {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    // avoid window access during SSR
    const onResize = () => setWidth(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // determine visible count & columns based on breakpoints and image count
  const imageCount = images?.length ?? 0;

  let columns = 1;
  let visibleCount = 1;

  if (width >= 1280) {
    // xl: exact number
    columns = Math.max(1, imageCount || 1);
    visibleCount = imageCount || 1;
  } else if (width >= 1024) {
    // lg: max of 4 (but based on image count)
    columns = Math.max(1, Math.min(imageCount || 1, 4));
    visibleCount = columns;
  } else if (width >= 768) {
    // md: max of 3
    columns = Math.max(1, Math.min(imageCount || 1, 3));
    visibleCount = columns;
  } else {
    // mobile: only the first
    columns = 1;
    visibleCount = imageCount > 0 ? 1 : 1;
  }

  const visibleImages = (images &&
    images.slice(0, Math.max(1, visibleCount))) || [
    { imageUrl: "/placeholder.svg", imageAlt: "placeholder" },
  ];

  return (
    <section className={`relative ${height} overflow-hidden`}>
      {/* Background image grid */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full grid"
          // dynamic columns via inline style to avoid Tailwind class generation issues
          style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
        >
          {visibleImages.map((img, idx) => (
            <div key={idx} className="relative w-full h-full">
              <Image
                src={img.imageUrl || "/placeholder.svg"}
                alt={img.imageAlt || "image"}
                fill
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity}`} />

      {/* Content */}
      <div className="relative w-full z-10 flex items-end pb-8 md:pb-16 justify-center h-full">
        <div className="text-center text-white px-6 max-w-2xl">
          <h2 className="text-4xl opacity-60 md:text-5xl font-semibold mb-1 text-balance">
            {title}
          </h2>
          {description && (
            <p className="text-sm leading-4 md:leading-normal max-w-xs md:max-w-3xl opacity-60 mx-auto md:text-xl mb-2 text-pretty">
              {description}
            </p>
          )}
          <button className="bg-transparent md:text-base text-xs text-white rounded-full border-1 opacity-60 font-semibold px-3 py-[2.5px] md:px-8 md:py-3">
            <a href={buttonHref}>{buttonText}</a>
          </button>
        </div>
      </div>
    </section>
  );
}
