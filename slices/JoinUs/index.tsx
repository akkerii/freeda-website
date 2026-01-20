// @ts-nocheck
"use client";

import type { JoinUsSlice } from "@/prismicio-types";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import FadeIn from "@/components/FadeIn";

export type JoinUsProps = SliceComponentProps<JoinUsSlice>;

const JoinUs = ({ slice }: JoinUsProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white py-10 md:py-14"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col items-center">
        {/* Title */}
        <FadeIn>
          {slice.primary.title && (
            <h2 className="font-trap text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold leading-[1.2] tracking-[-0.96px] text-black text-center m-0 mb-4 md:mb-6">
              {slice.primary.title}
            </h2>
          )}
        </FadeIn>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-5 w-full">
          {/* Left Column */}
          <FadeIn delay={100} direction="left" className="flex flex-col gap-4 md:gap-5 flex-1 lg:max-w-[650px]">
            {/* Image 1 */}
            {slice.primary.image_1?.url && (
              <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-[5px] overflow-hidden">
                <PrismicNextImage
                  field={slice.primary.image_1}
                  className="w-full h-full object-cover"
                  fallbackAlt=""
                />
              </div>
            )}

            {/* Text Card */}
            {(slice.primary.card_title || slice.primary.card_description) && (
              <div className="w-full min-h-[140px] md:min-h-[166px] bg-black/5 rounded-[5px] p-5 md:p-6 flex flex-col gap-3 md:gap-4">
                {slice.primary.card_title && (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#F02C2C]" />
                    <span className="font-trap text-xl sm:text-2xl md:text-3xl font-semibold tracking-[-0.36px] text-black">
                      {slice.primary.card_title}
                    </span>
                  </div>
                )}
                {slice.primary.card_description && (
                  <p className="font-inter text-base sm:text-lg md:text-xl font-medium leading-[1.45] tracking-[-0.09px] text-black/55 m-0">
                    {slice.primary.card_description}
                  </p>
                )}
              </div>
            )}
          </FadeIn>

          {/* Right Column */}
          <FadeIn delay={200} direction="right" className="flex flex-col flex-1 lg:max-w-[450px]">
            {/* Image 2 */}
            {slice.primary.image_2?.url && (
              <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-[5px] overflow-hidden">
                <PrismicNextImage
                  field={slice.primary.image_2}
                  className="w-full h-full object-cover"
                  fallbackAlt=""
                />
              </div>
            )}

            {/* CTA Button - aligned with text card */}
            {slice.primary.button_text && (
              <div className="flex-1 flex items-end justify-end mt-4 md:mt-5">
                <PrismicNextLink
                  field={slice.primary.button_link}
                  className="inline-flex items-center justify-center h-[50px] px-4 bg-[#F02C2C] text-white font-mono text-base md:text-lg rounded-[5px] hover:bg-[#d92626] transition-colors"
                >
                  {slice.primary.button_text}
                </PrismicNextLink>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
