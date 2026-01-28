"use client";

import { useRef, useEffect } from "react";
import type { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import FadeIn from "@/components/FadeIn";

export type WorkingWithFreedaProps =
  SliceComponentProps<Content.WorkingWithFreedaSlice>;

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

const WorkingWithFreeda = ({ slice }: WorkingWithFreedaProps) => {
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
    // If there's a direct video URL, use it (priority over image)
    if (isDirectVideo && videoUrl) {
      return (
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />
      );
    }

    // If it's a YouTube URL, embed it with minimal branding (still shows some UI)
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

    // If there's an image (and no video URL), show it
    if (primary.background_image?.url) {
      return (
        <img
          src={primary.background_image.url}
          alt={primary.background_image.alt || ""}
          className="w-full h-full object-cover object-center"
        />
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
        className="w-full h-full object-cover object-center"
      >
        <source src="/videos/working-with-freeda.mp4" type="video/mp4" />
      </video>
    );
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full h-[480px] sm:h-[580px] md:h-[700px] lg:h-[780px] overflow-hidden"
    >
      {/* Background Video/Image - Only left side */}
      <FadeIn direction="right" className="absolute left-0 top-0 bottom-0 right-[300px] sm:right-[310px] md:right-[410px] lg:right-[490px] xl:right-[554px] overflow-hidden">
        <div ref={containerRef} className="w-full h-full">
          {renderVideo()}
        </div>
      </FadeIn>

      {/* Dark Content Box - Right Side (564px width, full height) */}
      <FadeIn direction="left" className="absolute right-0 top-0 bottom-0 w-full sm:w-[330px] md:w-[430px] lg:w-[510px] xl:w-[574px] bg-[#202020] rounded-l-[10px]">
        <div className="flex flex-col gap-8 items-start justify-center h-full w-full px-6 sm:px-8 md:px-10 lg:px-[66px]">
          {/* Title */}
          <h2 className="font-trap font-semibold leading-[110%] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] text-white m-0">
            Working
            <br />
            with Freeda
          </h2>

          {/* Description */}
          <p className="font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-white/65 leading-[145%] m-0 max-w-[432px]">
            {slice.primary.description ||
              "Freeda is designed for teams dealing with complex projects, multiple stakeholders and regulatory constraints. We don't just deliver analyses. We help structure how risk is managed at the design stage."}
          </p>

          {/* CTA Button */}
          {slice.primary.button_text && (
            <a
              href="/case-study"
              className="inline-flex items-center justify-center px-4 py-3 bg-[#F02C2C] rounded-[9px] font-mono text-[14px] sm:text-[16px] leading-[110%] text-white no-underline hover:opacity-90 transition-opacity"
            >
              {slice.primary.button_text}
            </a>
          )}
        </div>
      </FadeIn>
    </section>
  );
};

export default WorkingWithFreeda;
