"use client";

import { useState, useRef, useEffect } from "react";
import type { Content } from "@prismicio/client";
import { isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import FadeIn from "@/components/FadeIn";

export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

// Helper function to extract Google Drive file ID
function getGoogleDriveFileId(url: string): string | null {
  if (!url) return null;
  // Match patterns like:
  // https://drive.google.com/file/d/FILE_ID/view
  // https://drive.google.com/file/d/FILE_ID/preview
  // https://drive.google.com/open?id=FILE_ID
  const regExp = /drive\.google\.com\/(?:file\/d\/|open\?id=)([a-zA-Z0-9_-]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

// Helper function to check if URL is a direct video file
function isDirectVideoUrl(url: string): boolean {
  if (!url) return false;
  const videoExtensions = /\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i;
  return videoExtensions.test(url);
}

// Helper function to get video embed URL (supports YouTube and Google Drive)
function getVideoEmbedUrl(url: string, autoplay: boolean = false): string | null {
  if (!url) return null;

  // Check YouTube
  const youtubeId = getYouTubeVideoId(url);
  if (youtubeId) {
    // Check for timestamp parameter (t= or start=)
    const timeMatch = url.match(/[?&](t|start)=(\d+)/);
    const startTime = timeMatch ? timeMatch[2] : null;
    const params = new URLSearchParams();
    if (startTime) params.set('start', startTime);
    if (autoplay) {
      params.set('autoplay', '1');
      params.set('mute', '1'); // Required for autoplay in most browsers
    }
    const paramString = params.toString();
    return `https://www.youtube.com/embed/${youtubeId}${paramString ? `?${paramString}` : ''}`;
  }

  // Check Google Drive
  const googleDriveId = getGoogleDriveFileId(url);
  if (googleDriveId) {
    return `https://drive.google.com/file/d/${googleDriveId}/preview`;
  }

  // Return original URL if already an embed URL
  return url;
}

const Testimonials = ({ slice }: TestimonialsProps) => {
  // Track which testimonial is selected (0 = first card by default)
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  // Track if video is playing
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLElement>(null);
  const featuredCardRef = useRef<HTMLElement>(null);

  // Handle card selection with scroll on mobile
  const handleCardSelect = (index: number) => {
    setSelectedIndex(index);
    // On mobile (< 1024px), scroll to the featured card
    if (typeof window !== 'undefined' && window.innerWidth < 1024 && featuredCardRef.current) {
      setTimeout(() => {
        featuredCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  // Get the active testimonial data
  const items = (slice.items || []) as any[];
  const primary = slice.primary as any;

  // Get YouTube thumbnail if available
  const youtubeId = primary.youtube_url ? getYouTubeVideoId(primary.youtube_url) : null;
  const videoThumbnail = youtubeId ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : null;
  const isDirectVideo = primary.youtube_url ? isDirectVideoUrl(primary.youtube_url) : false;

  // Autoplay on scroll for direct video files
  useEffect(() => {
    if (!isDirectVideo || !videoRef.current || !videoContainerRef.current) return;

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
      { threshold: 0.5 }
    );

    observer.observe(videoContainerRef.current);
    return () => observer.disconnect();
  }, [isDirectVideo]);

  // Autoplay on scroll for YouTube videos
  useEffect(() => {
    if (isDirectVideo || !youtubeId || !videoContainerRef.current) return;
    const googleDriveId = primary.youtube_url ? getGoogleDriveFileId(primary.youtube_url) : null;
    if (googleDriveId) return; // Skip for Google Drive

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVideoPlaying) {
            setIsVideoPlaying(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoContainerRef.current);
    return () => observer.disconnect();
  }, [isDirectVideo, youtubeId, isVideoPlaying, primary.youtube_url]);

  // Get active testimonial - ensure we have items and valid index
  const activeItem = items[selectedIndex];
  const activeTestimonial = activeItem
    ? {
        logo: activeItem.company_logo,
        quote: activeItem.quote,
        authorImage: activeItem.author_image,
        authorName: activeItem.author_name,
        authorTitle: activeItem.author_title,
        videoUrl: activeItem.video_url,
      }
    : {
        logo: primary.featured_logo,
        quote: primary.featured_quote,
        authorImage: primary.author_image,
        authorName: primary.author_name,
        authorTitle: primary.author_title,
        videoUrl: null,
      };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative bg-white py-12 md:py-16"
    >
      <div className="w-full mx-auto px-5 md:px-10 lg:px-16 xl:px-24">
        {/* Title */}
        <FadeIn>
          {primary.title && (
            <h2 className="font-trap text-3xl md:text-[38px] font-semibold leading-[1.16] text-black text-center mb-10 md:mb-14">
              {primary.title}
            </h2>
          )}
        </FadeIn>

        {/* Layout Container */}
        <div className="flex flex-col lg:flex-row gap-5 items-stretch">
          {/* Featured Testimonial Card - Left */}
          <FadeIn delay={100} direction="left">
            <article
              ref={featuredCardRef}
              className="relative w-full lg:w-[343px] h-auto lg:min-h-[427px] bg-[#F2F2F2] rounded-[10px] p-[24px] lg:p-[28px] flex flex-col flex-shrink-0 scroll-mt-4"
            >
              {/* Logo and Quote Section */}
              <div className="flex flex-col gap-4 flex-1">
                {/* Company Logo */}
                {isFilled.image(activeTestimonial.logo) && (
                  <div className="h-[28px] w-full max-w-[140px] flex-shrink-0">
                    <PrismicNextImage
                      field={activeTestimonial.logo}
                      className="h-full w-auto object-contain object-left"
                      fallbackAlt=""
                    />
                  </div>
                )}

                {/* Quote */}
                {isFilled.richText(activeTestimonial.quote) && (
                  <div className="font-inter text-[14px] lg:text-[15px] text-black leading-[1.5] [&_p]:m-0 flex-1">
                    <span className="block text-[28px] leading-none mb-1">"</span>
                    <PrismicRichText field={activeTestimonial.quote} />
                  </div>
                )}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 mt-4 flex-shrink-0">
                {/* Author Image */}
                {isFilled.image(activeTestimonial.authorImage) && (
                  <div className="w-[40px] h-[40px] rounded-full overflow-hidden flex-shrink-0">
                    <PrismicNextImage
                      field={activeTestimonial.authorImage}
                      className="w-full h-full object-cover"
                      fallbackAlt=""
                    />
                  </div>
                )}

                {/* Author Name and Title */}
                {activeTestimonial.authorName && (
                  <p className="font-trap text-[13px] lg:text-[14px] font-semibold uppercase text-black m-0">
                    {activeTestimonial.authorName}
                    {activeTestimonial.authorTitle && ` - ${activeTestimonial.authorTitle}`}
                  </p>
                )}
              </div>
            </article>
          </FadeIn>

          {/* Video - Center */}
          <FadeIn delay={200} className="w-full lg:flex-1">
            <article
              ref={videoContainerRef}
              className="relative h-[250px] md:h-[350px] lg:h-[427px] bg-[#1a1a1a] rounded-[10px] overflow-hidden"
            >
              {primary.youtube_url ? (
                /* Direct video file - autoplay on scroll */
                isDirectVideo ? (
                  <video
                    ref={videoRef}
                    src={primary.youtube_url}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  />
                ) : getGoogleDriveFileId(primary.youtube_url) ? (
                  /* Google Drive: show embed directly */
                  <div className="absolute inset-0">
                    <iframe
                      src={getVideoEmbedUrl(primary.youtube_url)!}
                      title="Testimonial Video"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : isVideoPlaying ? (
                  /* YouTube/Vimeo playing state */
                  <div className="absolute inset-0">
                    <iframe
                      src={getVideoEmbedUrl(primary.youtube_url, true)!}
                      title="Testimonial Video"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  /* YouTube/Vimeo thumbnail with play button */
                  <div
                    className="absolute inset-0 cursor-pointer group"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    {/* Thumbnail */}
                    {videoThumbnail && (
                      <img
                        src={videoThumbnail}
                        alt="Video thumbnail"
                        className="w-full h-full object-cover"
                      />
                    )}
                    {/* Play button - YouTube style */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[68px] h-[48px] bg-[#FF0000] rounded-[12px] flex items-center justify-center group-hover:bg-[#cc0000] transition-colors">
                        <svg className="w-[24px] h-[24px] text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-[#F02C2C]" viewBox="0 0 100 100" fill="currentColor">
                    <polygon points="30,20 30,80 80,50" />
                  </svg>
                </div>
              )}
            </article>
          </FadeIn>

          {/* Side Cards - Right Column - Clickable (hide selected one) */}
          <FadeIn delay={300} direction="right">
            <div className="flex flex-col gap-5 w-full lg:w-[280px] flex-shrink-0 lg:pt-[210px]">
              {/* Only show non-selected testimonial cards */}
              {items.map((item: any, index: number) => {
                // Skip the currently selected item
                if (index === selectedIndex) return null;

                return (
                  <button
                    key={index}
                    onClick={() => handleCardSelect(index)}
                    className="relative h-[101px] rounded-[10px] p-8 flex items-center justify-start transition-all cursor-pointer bg-[#EDEDED] hover:bg-[#E0E0E0]"
                  >
                    {/* Company Logo */}
                    <div className="h-[48px] w-[110px]">
                      {isFilled.image(item.company_logo) ? (
                        <PrismicNextImage
                          field={item.company_logo}
                          className="h-full w-auto object-contain object-left"
                          fallbackAlt=""
                        />
                      ) : (
                        <span className="text-sm text-black/50">No logo</span>
                      )}
                    </div>

                    {/* Coming Soon + Red Dot - Side by side, centered */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      {item.is_coming_soon && (
                        <p className="font-inter text-[12px] text-black/30 leading-[1.2] tracking-[-0.065px] m-0 whitespace-nowrap">
                          coming soon
                        </p>
                      )}
                      <div className="w-[13px] h-[13px] flex-shrink-0">
                        <svg className="block size-full" fill="none" viewBox="0 0 17 17">
                          <circle cx="8.5" cy="8.5" fill="#F02C2C" r="8.5" />
                        </svg>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
