"use client";

import { useClientMediaQuery } from "@/hooks/useClientMediaQuery";
import { useState } from "react";

interface VideoSectionProps {
  title: string;
  description?: string;
  videoUrl: string;
  buttonText?: string;
  buttonHref?: string;
  height?: string;
  showOverlay?: boolean;
  showContent?: boolean;
}

export function VideoSection({
  title,
  description,
  videoUrl,
  buttonText = "View Portfolio",
  buttonHref = "#",
  height,
  showOverlay = true,
  showContent = true,
}: VideoSectionProps) {
  // Check if it's a YouTube URL and extract video ID
  const getYouTubeEmbedUrl = (url: string) => {
    const youtubeRegex =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(youtubeRegex);
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=1&loop=1&playlist=${match[1]}&controls=0&showinfo=0&rel=0&modestbranding=1`;
    }
    return url;
  };

  const isYouTube =
    videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");
  const embedUrl = isYouTube ? getYouTubeEmbedUrl(videoUrl) : videoUrl;
  const isMobile = useClientMediaQuery("(max-width: 768px)");

  // Apply aspect ratio only on mobile, or when no height is specified
  const containerStyle = isMobile || !height ? { aspectRatio: "16/9" } : {};

  const containerClasses = height
    ? `relative w-full ${height} overflow-hidden bg-black`
    : "relative w-full overflow-hidden bg-black";

  return (
    <section className={containerClasses} style={containerStyle}>
      {/* Video Background */}
      <div className="absolute inset-0">
        {isYouTube ? (
          <iframe
            src={embedUrl}
            className="w-full h-full object-cover"
            title="Video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Overlay */}
      {showOverlay && <div className="absolute inset-0 bg-black/50" />}

      {/* Content */}
      {showContent && (
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-6 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              {title}
            </h2>
            {description && (
              <p className="text-lg md:text-xl mb-8 text-pretty opacity-90">
                {description}
              </p>
            )}
            <button className="bg-transparent text-white rounded-full border-2 font-semibold px-8 py-3">
              <a href={buttonHref}>{buttonText}</a>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
