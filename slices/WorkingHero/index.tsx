"use client";

import { useRef, useEffect } from "react";
import type { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Navigation from "@/components/Navigation";

export type WorkingHeroProps = SliceComponentProps<Content.WorkingHeroSlice>;

// Helper to extract YouTube video ID
const getYouTubeVideoId = (url: string): string | null => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// Check if URL is a direct video file
const isDirectVideoUrl = (url: string): boolean => {
  if (!url) return false;
  const videoExtensions = /\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i;
  return videoExtensions.test(url);
};

const WorkingHero = ({ slice }: WorkingHeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const primary = slice.primary as any;

  // Get video URL from Prismic or use default
  const videoUrl = primary.video_url || "";
  const youtubeId = getYouTubeVideoId(videoUrl);
  const isDirectVideo = isDirectVideoUrl(videoUrl);

  // Autoplay video on scroll
  useEffect(() => {
    if (!videoRef.current || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Render video content
  const renderVideo = () => {
    // If there's a direct video URL, use it (priority)
    if (isDirectVideo && videoUrl) {
      return (
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      );
    }

    // If it's a YouTube URL, embed it with minimal branding
    if (youtubeId) {
      return (
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&fs=0&iv_load_policy=3`}
            className="absolute pointer-events-none border-0"
            style={{
              top: "50%",
              left: "50%",
              width: "200%",
              height: "200%",
              transform: "translate(-50%, -50%)",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            allowFullScreen={false}
            title="Background video"
          />
        </div>
      );
    }

    // Default: use local video file
    return (
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/working-with-freeda.mp4" type="video/mp4" />
      </video>
    );
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full h-auto min-h-[500px] sm:h-[700px] md:h-[850px] lg:h-[982px] overflow-hidden"
    >
      {/* Navigation */}
      <Navigation theme="light" />

      {/* Full Background Video */}
      <div ref={containerRef} className="absolute inset-0">
        {renderVideo()}
      </div>

      {/* Dark Content Box - Overlaid on Right Side */}
      <div className="absolute right-0 bottom-0 w-full sm:w-[320px] md:w-[420px] lg:w-[500px] xl:w-[564px] h-auto sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[537px] bg-[#202020] rounded-t-[10px] sm:rounded-tr-none sm:rounded-tl-[10px]">
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-start justify-center h-full px-5 py-6 sm:px-8 sm:py-0 md:px-12 lg:px-[66px]">
          {/* Title */}
          <div className="flex flex-col font-trap font-semibold leading-[1.1] text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] text-white tracking-[-1.6px]">
            <h1 className="block mb-0">Working</h1>
            <h1 className="block">with Freeda</h1>
          </div>

          {/* Description */}
          <p className="font-inter font-normal text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-white/65 leading-[1.45] tracking-[-0.12px] max-w-[432px]">
            {slice.primary.description ||
              "Freeda is designed for teams dealing with complex projects, multiple stakeholders and regulatory constraints. We don't just deliver analyses. We help structure how risk is managed at the design stage."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkingHero;
