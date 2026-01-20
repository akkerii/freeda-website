"use client";

import type { DarkCtaSlice } from "@/prismicio-types";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import FadeIn from "@/components/FadeIn";

export type DarkCtaProps = SliceComponentProps<DarkCtaSlice>;

const DarkCta = ({ slice }: DarkCtaProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative bg-[#202020] overflow-hidden"
    >
      {/* Content Container */}
      <div className="relative z-10 max-w-[1512px] mx-auto px-5 md:px-[64px] pt-[50px] md:pt-[80px] pb-0">
        {/* Header Section */}
        <FadeIn>
          <div className="flex flex-col items-center gap-[12px] mb-[40px]">
            {/* Title */}
            {slice.primary.title && (
              <h2 className="font-trap text-2xl sm:text-3xl md:text-[40px] lg:text-[48px] font-semibold leading-[110%] tracking-[-0.02em] text-white text-center m-0 whitespace-pre-line">
                {slice.primary.title}
              </h2>
            )}

            {/* Description */}
            {slice.primary.description && (
              <div className="font-inter text-sm sm:text-base md:text-[16px] lg:text-[18px] font-normal leading-[145%] tracking-[-0.09px] text-white/65 text-center max-w-[650px] [&_p]:m-0">
                <PrismicRichText field={slice.primary.description} />
              </div>
            )}
          </div>
        </FadeIn>

        {/* Main Content Area - Image Group + Use Cases on Right */}
        <div className="relative">
          {/* Image and Use Cases Container */}
          <div className="relative w-full">
            {/* Main composed image - compact size like Figma, cropped to show ~90% */}
            <FadeIn delay={200}>
              <div className="relative w-full max-w-[950px] mx-auto overflow-hidden h-[400px] md:h-[600px]">
                <img
                  src={slice.primary.image?.url || "/images/dark-cta-hero.svg"}
                  alt={slice.primary.image?.alt || "Use Cases Composition"}
                  className="w-full h-full object-cover object-top"
                />

                {/* CTA Button - centered horizontally, overlapping bottom of image */}
                {slice.primary.button_text && (
                  <div className="hidden xl:flex absolute left-1/2 -translate-x-1/2 bottom-[15%] z-10">
                    <PrismicNextLink
                      field={slice.primary.button_link}
                      className="inline-flex items-center justify-center px-[24px] py-[14px] bg-[#F02C2C] rounded-[9px] font-mono text-[18px] font-normal leading-[110%] text-white no-underline hover:opacity-90 transition-opacity"
                    >
                      {slice.primary.button_text}
                    </PrismicNextLink>
                  </div>
                )}
              </div>
            </FadeIn>

            {/* Use Cases List - Desktop: positioned along right side of building image */}
            {slice.items && slice.items.length > 0 && (
              <div className="hidden xl:flex flex-col justify-between absolute right-[10.5%] top-[-25ni%] bottom-[8%]">
                {slice.items.map((item, index) => (
                  <FadeIn key={index} delay={300 + index * 100} direction="left">
                    <div className="flex flex-col items-center w-[160px]">
                      {/* Red Dot - above text */}
                      <div className="w-[18px] h-[18px] rounded-full bg-[#F02C2C] flex-shrink-0 mb-3" />
                      {/* Label - center aligned */}
                      <span className="font-mono text-[16px] font-bold leading-[145%] text-white text-center whitespace-pre-line">
                        {item.use_case_label}
                      </span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            )}
          </div>

          {/* Mobile CTA Button */}
          {slice.primary.button_text && (
            <FadeIn delay={300}>
              <div className="flex xl:hidden justify-center mt-6 mb-6">
                <PrismicNextLink
                  field={slice.primary.button_link}
                  className="inline-flex items-center justify-center px-[16px] py-[12px] bg-[#F02C2C] rounded-[9px] font-mono text-sm sm:text-base md:text-[16px] font-normal leading-[110%] text-white no-underline hover:opacity-90 transition-opacity"
                >
                  {slice.primary.button_text}
                </PrismicNextLink>
              </div>
            </FadeIn>
          )}

          {/* Mobile Use Cases - Below image */}
          {slice.items && slice.items.length > 0 && (
            <FadeIn delay={400}>
              <div className="flex xl:hidden flex-wrap justify-center gap-6 py-6">
                {slice.items.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-[16px] h-[16px] rounded-full bg-[#F02C2C] flex-shrink-0 mb-2" />
                    <span className="font-mono text-[14px] sm:text-[16px] font-bold leading-[145%] text-white text-center max-w-[120px]">
                      {item.use_case_label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
};

export default DarkCta;
