"use client";

import type { DarkCtaSlice } from "@/prismicio-types";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import FadeIn from "@/components/FadeIn";

export type DarkCtaProps = SliceComponentProps<DarkCtaSlice>;

const DarkCta = ({ slice }: DarkCtaProps) => {
  return (
    <div className="relative mb-[60px] sm:mb-[70px] md:mb-[80px] lg:mb-[100px]">
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative bg-[#202020] w-full h-[700px] sm:h-[800px] md:h-[900px] lg:h-[995px] overflow-hidden"
    >
      {/* Content Container - Header */}
      <div className="relative z-10 flex flex-col items-center pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[120px] px-5 md:px-[64px]">
        <FadeIn>
          <div className="flex flex-col items-center gap-[16px] w-full">
            {/* Title */}
            {slice.primary.title && (
              <h2 className="font-trap text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-semibold leading-[1.1] text-white text-center m-0 w-full max-w-[740px] capitalize">
                {slice.primary.title}
              </h2>
            )}

            {/* Description */}
            {slice.primary.description && (
              <div className="font-inter text-[14px] sm:text-[16px] lg:text-[18px] font-normal leading-[1.45] tracking-[-0.09px] text-white/65 text-center w-full max-w-[705px] [&_p]:m-0">
                <PrismicRichText field={slice.primary.description} />
              </div>
            )}
          </div>
        </FadeIn>
      </div>

      {/* Image Composition - Single image from Prismic */}
      <FadeIn delay={200} direction="none">
        <div className="absolute left-1/2 -translate-x-1/2 top-[32%] lg:top-[354px] w-[95%] sm:w-[90%] md:w-[85%] lg:w-[886px] h-[450px] sm:h-[550px] md:h-[650px] lg:h-[735px]">
          {slice.primary.image?.url && (
            <PrismicNextImage
              field={slice.primary.image}
              className="w-full h-full object-contain object-top"
              fallbackAlt=""
            />
          )}
        </div>
      </FadeIn>

      {/* Use Case Points - Right side, aligned with image right edge */}
      {slice.items && slice.items.length > 0 && (
        <div className="absolute right-[3%] lg:right-[calc(50%-520px)] top-[18%] lg:top-[120px] hidden md:flex flex-col gap-[50px] lg:gap-[47px] z-20">
          {slice.items.map((item, index) => (
            <FadeIn key={index} delay={600 + index * 100}>
              <div className="flex flex-col items-center w-[160px] h-[93px]">
                {/* Red dot */}
                <div className="w-[19px] h-[19px] rounded-full bg-[#F02C2C] flex-shrink-0" />
                {/* Label */}
                <span className="font-mono font-bold text-[18px] text-white leading-[1.45] text-center mt-[16px] w-full">
                  {item.use_case_label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      )}
    </section>

      {/* Grey background area for button */}
      <div className="absolute bottom-0 left-0 right-0 h-[60px] sm:h-[70px] md:h-[80px] lg:h-[100px] bg-[#F2F2F2] -mb-[60px] sm:-mb-[70px] md:-mb-[80px] lg:-mb-[100px]" />

      {/* CTA Button - Outside section so it can overflow into white space */}
      <FadeIn delay={500} direction="none">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-50px] sm:bottom-[-55px] md:bottom-[-60px] lg:bottom-[-70px] z-40">
          <PrismicNextLink
            field={slice.primary.button_link}
            className="inline-flex items-center justify-center px-[16px] sm:px-[20px] md:px-[24px] py-[10px] sm:py-[12px] md:py-[16px] bg-[#F02C2C] rounded-[9px] font-mono text-[11px] sm:text-[13px] md:text-[16px] lg:text-[18px] font-normal leading-[1.2] text-white capitalize no-underline hover:opacity-90 transition-opacity text-center max-w-[280px] sm:max-w-none sm:whitespace-nowrap"
          >
            {slice.primary.button_text || "→ Explore Use Cases & Cases Study"}
          </PrismicNextLink>
        </div>
      </FadeIn>
    </div>
  );
};

export default DarkCta;
