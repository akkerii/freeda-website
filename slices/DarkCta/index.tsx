"use client";

import type { DarkCtaSlice } from "@/prismicio-types";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import FadeIn from "@/components/FadeIn";

export type DarkCtaProps = SliceComponentProps<DarkCtaSlice>;

const DarkCta = ({ slice }: DarkCtaProps) => {
  return (
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

      {/* Image Composition Container - Figma: 886px x 735px */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[32%] lg:top-[354px] w-[95%] sm:w-[90%] md:w-[85%] lg:w-[886px] h-[450px] sm:h-[550px] md:h-[650px] lg:h-[735px]">

        {/* Building Background - Right side, overflows */}
        <FadeIn delay={200}>
          <div className="absolute left-[50%] lg:left-[302px] top-0 w-[70%] lg:w-[584px] h-full rounded-[10px] overflow-hidden">
            <img
              src="/images/dark-cta-building.png"
              alt="Modern building architecture"
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>

        {/* Floor Plan Card Group - Contains all overlapping elements */}
        {/* Positioned to match Figma: card group at x=0, containing 523x560 area */}
        <div className="absolute left-0 top-[15%] lg:top-[108px] w-[62%] lg:w-[523px] h-[72%] lg:h-[560px]">

          {/* Floor Plan Background Card */}
          <FadeIn delay={250}>
            <div className="absolute inset-0 rounded-[10px] overflow-hidden bg-[#f5f5f5]">
              <img
                src="/images/dark-cta-floorplan.png"
                alt="Floor plan analysis"
                className="w-[110%] h-[132%] object-cover object-center -translate-x-[5%] -translate-y-[17%] grayscale"
              />
            </div>
          </FadeIn>

          {/* Freeda Logo Badge - Figma: left-[27px] top-[26px] */}
          <FadeIn delay={300}>
            <div className="absolute left-[5%] lg:left-[27px] top-[4%] lg:top-[26px] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[76px] lg:h-[76px] z-20">
              <img
                src="/images/freeda-badge-circle.svg"
                alt=""
                className="absolute inset-0 w-full h-full"
              />
              <img
                src="/images/freeda-f-icon.svg"
                alt="Freeda"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%]"
              />
            </div>
          </FadeIn>

          {/* Tooltip Card - Figma: left-[147px] top-[42px] w-[354px] */}
          <FadeIn delay={350}>
            <div className="absolute left-[28%] lg:left-[147px] top-[7%] lg:top-[42px] w-[68%] lg:w-[354px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] z-50">
              <img
                src="/images/dark-cta-tooltip.png"
                alt="Kitchen wheelchair turning circle requirement"
                className="w-full h-auto"
              />
            </div>
          </FadeIn>

          {/* PDF Report - Figma: left-[14px] top-[210px] w-[495px] h-[324px] */}
          <FadeIn delay={400}>
            <div className="absolute left-[2.5%] lg:left-[14px] top-[37%] lg:top-[210px] w-[95%] lg:w-[495px] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] z-30">
              <img
                src="/images/dark-cta-pdf-report.png"
                alt="Detailed accessibility report"
                className="w-full h-auto rounded-[5px]"
              />
            </div>
          </FadeIn>

          {/* Architecture Image - Figma: left-[303px] top-[61px] w-[280px] h-[297px] */}
          <FadeIn delay={450}>
            <div className="absolute left-[58%] lg:left-[303px] top-[11%] lg:top-[61px] w-[54%] lg:w-[280px] h-[53%] lg:h-[297px] rounded-[10px] overflow-hidden z-40 hidden sm:block">
              <img
                src="/images/dark-cta-architecture.png"
                alt="Staircase architecture"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          {/* Red Circle Indicator - Figma: left-[372px] top-[178px] size-[65px] */}
          <FadeIn delay={480}>
            <div className="absolute left-[71%] lg:left-[372px] top-[32%] lg:top-[178px] w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] lg:w-[65px] lg:h-[65px] z-[25] hidden sm:block">
              <img
                src="/images/dark-cta-red-circle.svg"
                alt="Non-compliant indicator"
                className="w-full h-full"
              />
            </div>
          </FadeIn>
        </div>

      </div>

      {/* CTA Button - Centered, 116px from bottom of section */}
      <FadeIn delay={500}>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[60px] sm:bottom-[80px] md:bottom-[100px] lg:bottom-[116px] z-40">
          <PrismicNextLink
            field={slice.primary.button_link}
            className="inline-flex items-center justify-center px-[16px] py-[12px] bg-[#F02C2C] rounded-[9px] font-mono text-[14px] sm:text-[16px] font-normal leading-[1.1] text-white capitalize no-underline hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            {slice.primary.button_text || "→ Explore Use Cases & Cases Study"}
          </PrismicNextLink>
        </div>
      </FadeIn>

      {/* Use Case Points - Right side */}
      {slice.items && slice.items.length > 0 && (
        <div className="absolute right-[3%] lg:right-[80px] top-[18%] lg:top-[160px] hidden md:flex flex-col gap-[50px] lg:gap-[70px] z-20">
          {slice.items.map((item, index) => (
            <FadeIn key={index} delay={600 + index * 100}>
              <div className="flex flex-col items-center gap-2">
                {/* Red dot */}
                <div className="w-[10px] h-[10px] lg:w-[12px] lg:h-[12px] rounded-full bg-[#F02C2C] flex-shrink-0" />
                {/* Label */}
                <span className="font-mono text-[12px] lg:text-[14px] text-white leading-[1.4] text-center whitespace-pre-line">
                  {item.use_case_label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      )}
    </section>
  );
};

export default DarkCta;
