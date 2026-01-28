"use client";

import type { LogoCloudSlice } from "@/prismicio-types";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import FadeIn from "@/components/FadeIn";

export type LogoCloudProps = SliceComponentProps<LogoCloudSlice>;

const LogoCloud = ({ slice }: LogoCloudProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white py-8 md:py-12 overflow-hidden"
    >
      <FadeIn>
        {slice.primary.title && (
          <p className="font-trap text-center text-lg sm:text-xl md:text-2xl font-semibold text-black/55 tracking-[-0.02em] leading-[110%] mb-6 md:mb-8 px-5">
            {slice.primary.title}
          </p>
        )}
      </FadeIn>

      {/* Marquee - Infinite horizontal scroll */}
      <FadeIn delay={200}>
        <div className="relative w-full overflow-hidden pb-10 sm:pb-8">
          {/* Case Study badge - Mobile: centered, Desktop: left */}
          <a
            href="/case-study"
            className="absolute left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 lg:left-[10%] bottom-0 z-10 bg-[#F2F2F2] px-2 py-1 rounded-[2px] flex items-center justify-center hover:bg-[#E8E8E8] transition-colors"
          >
            <span className="font-inter font-semibold text-[12px] text-[#8B9187] leading-[1.2] whitespace-nowrap">
              Case Study
            </span>
          </a>

          {/* Case Study badge - Right (hidden on mobile) */}
          <a
            href="/case-study"
            className="absolute right-4 lg:right-[10%] bottom-0 z-10 bg-[#F2F2F2] px-2 py-1 rounded-[2px] hidden sm:flex items-center justify-center hover:bg-[#E8E8E8] transition-colors"
          >
            <span className="font-inter font-semibold text-[12px] text-[#8B9187] leading-[1.2] whitespace-nowrap">
              Case Study
            </span>
          </a>

          <div className="flex animate-marquee hover:pause">
            {/* Repeat logo sets multiple times to ensure full width coverage */}
            {[0, 1, 2, 3].map((setIndex) => (
              <div key={`set-${setIndex}`} className="flex items-center gap-12 md:gap-[72px] shrink-0 pr-12 md:pr-[72px]">
                {slice.items.map((item, index) => (
                  <div key={`${setIndex}-${index}`} className="shrink-0 flex items-center justify-center h-10 md:h-14 lg:h-16">
                    {item.logo?.url && (
                      <PrismicNextImage
                        field={item.logo}
                        className="h-full w-auto max-w-[150px] md:max-w-[180px] lg:max-w-[200px] object-contain grayscale opacity-70"
                        fallbackAlt=""
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default LogoCloud;
