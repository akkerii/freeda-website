"use client";

import { useState } from "react";
import type { Content } from "@prismicio/client";
import { isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import FadeIn from "@/components/FadeIn";

export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

// Helper function to convert YouTube URL to embed URL
function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;

  // Match various YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[2].length === 11 ? match[2] : null;

  if (!videoId) return null;

  // Check for timestamp parameter (t= or start=)
  const timeMatch = url.match(/[?&](t|start)=(\d+)/);
  const startTime = timeMatch ? timeMatch[2] : null;

  return `https://www.youtube.com/embed/${videoId}${startTime ? `?start=${startTime}` : ''}`;
}

const Testimonials = ({ slice }: TestimonialsProps) => {
  // Track which testimonial is selected (0 = first card by default)
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // Get the active testimonial data
  const items = (slice.items || []) as any[];
  const primary = slice.primary as any;

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
            <article className="relative w-full lg:w-[343px] h-auto lg:h-[427px] bg-[#F2F2F2] rounded-[10px] p-[33px] flex flex-col flex-shrink-0 overflow-hidden">
              {/* Logo and Quote Section */}
              <div className="flex flex-col gap-6 flex-1 min-h-0">
                {/* Company Logo */}
                {isFilled.image(activeTestimonial.logo) && (
                  <div className="h-[31px] w-full max-w-[153px] flex-shrink-0">
                    <PrismicNextImage
                      field={activeTestimonial.logo}
                      className="h-full w-auto object-contain object-left"
                      fallbackAlt=""
                    />
                  </div>
                )}

                {/* Quote */}
                {isFilled.richText(activeTestimonial.quote) && (
                  <div className="font-inter text-[16px] text-black leading-normal [&_p]:m-0 overflow-y-auto flex-1">
                    <span className="block text-[36px] leading-none mb-1">"</span>
                    <PrismicRichText field={activeTestimonial.quote} />
                  </div>
                )}
              </div>

              {/* Author Info */}
              <div className="flex flex-col gap-[14px] mt-4 flex-shrink-0">
                {/* Author Image */}
                {isFilled.image(activeTestimonial.authorImage) && (
                  <div className="w-[49px] h-[49px] rounded-full overflow-hidden">
                    <PrismicNextImage
                      field={activeTestimonial.authorImage}
                      className="w-full h-full object-cover"
                      fallbackAlt=""
                    />
                  </div>
                )}

                {/* Author Name and Title */}
                {activeTestimonial.authorName && (
                  <p className="font-trap text-[16px] font-semibold uppercase text-black m-0">
                    {activeTestimonial.authorName}
                    {activeTestimonial.authorTitle && ` - ${activeTestimonial.authorTitle}`}
                  </p>
                )}
              </div>
            </article>
          </FadeIn>

          {/* Video - Center */}
          <FadeIn delay={200} className="w-full lg:flex-1">
            <article className="relative h-[250px] md:h-[350px] lg:h-[427px] bg-[#F2F2F2] rounded-[10px] overflow-hidden">
              {/* YouTube Video Embed */}
              {primary.youtube_url && getYouTubeEmbedUrl(primary.youtube_url) ? (
                <div className="absolute inset-0">
                  <iframe
                    src={getYouTubeEmbedUrl(primary.youtube_url)!}
                    title="Testimonial Video"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
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
                    onClick={() => setSelectedIndex(index)}
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

                    {/* Red Dot */}
                    <div className="absolute right-[29px] top-[15px] w-[17px] h-[17px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 17 17">
                        <circle cx="8.5" cy="8.5" fill="#F02C2C" r="8.5" />
                      </svg>
                    </div>

                    {/* Coming Soon Text */}
                    {item.is_coming_soon && (
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-[38px]">
                        <p className="font-inter text-[13px] text-black/30 leading-[1.45] tracking-[-0.065px] text-center m-0">
                          coming soon
                        </p>
                      </div>
                    )}
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
