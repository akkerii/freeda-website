// @ts-nocheck
"use client";

import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import FadeIn from "@/components/FadeIn";

export type CaseStudyPageHeroProps =
  SliceComponentProps<Content.CaseStudyPageHeroSlice>;

const CaseStudyPageHero: FC<CaseStudyPageHeroProps> = ({ slice }) => {
  const { primary } = slice;
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white py-12 md:py-16 lg:py-20"
    >
      {/* Consistent with other slices: max-w-[1250px] px-5 md:px-10 */}
      <div className="max-w-[1250px] mx-auto px-5 md:px-10">
        {/* Main Container - Two columns on large screens */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Content - Main Hero */}
          <div className="flex-1 flex flex-col">
            {/* Company Logo, Title and Description - All Centered */}
            {/* Figma: Title = Trap 50px SemiBold, line-height 55px */}
            {/* Figma: Description = Inter 18px, line-height 27px (150%), black/65%, max-w 705px */}
            {/* Figma: Gap between title and description = 24px */}
            <FadeIn>
              <div className="flex flex-col items-center gap-[24px]">
                {/* Company Logo - Figma: 137.25x36px */}
                {primary.company_logo?.url && (
                  <div className="flex justify-center">
                    <PrismicNextImage
                      field={primary.company_logo}
                      className="h-[36px] w-auto max-w-[137px] object-contain"
                      fallbackAlt=""
                    />
                  </div>
                )}

                {/* Title - Figma: Trap 50px SemiBold, line-height 55px (110%), center */}
                {primary.title && (
                  <h1 className="font-trap text-[50px] font-semibold leading-[55px] text-black text-center max-w-[1064px]">
                    {primary.title}
                  </h1>
                )}

                {/* Description - Figma: Inter 18px, line-height 27px (150%), black/65%, max-w 705px, center */}
                {primary.description && (
                  <p className="font-inter text-[18px] text-black/65 leading-[27px] max-w-[705px] text-center">
                    {primary.description}
                  </p>
                )}
              </div>
            </FadeIn>

            {/* Images Section */}
            {/* Figma: Container height 656px */}
            {/* Figma: Background image = 524x656px, radius 10px */}
            {/* Figma: Foreground image = 425x528px, radius 10px */}
            {/* Figma: Stats card = 353x184px, bg #F2F2F2, radius 10px, padding 32px */}
            <FadeIn delay={200}>
              <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[656px] mt-[24px]">
                {/* Background Image - Figma: 524x656px, right side */}
                {primary.background_image?.url && (
                  <div className="absolute right-0 top-0 w-[300px] sm:w-[400px] md:w-[480px] lg:w-[524px] h-full rounded-[10px] overflow-hidden">
                    <PrismicNextImage
                      field={primary.background_image}
                      className="w-full h-full object-cover"
                      fallbackAlt=""
                    />
                  </div>
                )}

                {/* Foreground Image - Figma: 425x528px, overlaps from left */}
                {primary.foreground_image?.url && (
                  <div className="absolute left-0 sm:left-[5%] md:left-[10%] lg:left-[15%] top-[73px] w-[250px] sm:w-[320px] md:w-[380px] lg:w-[425px] h-[320px] sm:h-[400px] md:h-[480px] lg:h-[528px] rounded-[10px] overflow-hidden z-10">
                    <PrismicNextImage
                      field={primary.foreground_image}
                      className="w-full h-full object-cover"
                      fallbackAlt=""
                    />
                  </div>
                )}

                {/* Stats Card - Figma: 353x184px, padding 32px, radius 10px, bg #F2F2F2 */}
                <FadeIn delay={400} direction="up">
                  <div className="absolute left-0 bottom-0 bg-[#F2F2F2] rounded-[10px] p-[32px] w-[280px] sm:w-[320px] md:w-[353px] h-auto z-20">
                    {/* Red dot indicator - Figma: 17x17px, positioned top-right */}
                    <div className="absolute right-[32px] top-[32px] w-[17px] h-[17px] rounded-full bg-[#F02C2C]" />

                    {/* Stats Items - Figma: gap 8px */}
                    <div className="flex flex-col gap-[8px]">
                      {/* Annual ROI - Figma: Space Mono 18px + Trap SemiBold for label */}
                      {(primary.annual_roi_label || primary.annual_roi_value) && (
                        <p className="font-mono text-[18px] text-black/55 leading-[26px] tracking-[-0.09px]">
                          <span className="font-trap font-semibold">{primary.annual_roi_label}</span>{" "}
                          <span className="font-mono">{primary.annual_roi_value}</span>
                        </p>
                      )}

                      {/* Productivity Gains */}
                      {(primary.productivity_label || primary.productivity_value) && (
                        <p className="font-mono text-[18px] text-black/55 leading-[26px] tracking-[-0.09px]">
                          <span className="font-trap font-semibold">{primary.productivity_label}</span>{" "}
                          <span className="font-mono">{primary.productivity_value}</span>
                        </p>
                      )}

                      {/* Cities */}
                      {(primary.cities_label || primary.cities_value) && (
                        <p className="font-mono text-[18px] text-black/55 leading-[26px] tracking-[-0.09px]">
                          <span className="font-trap font-semibold">{primary.cities_label}</span>{" "}
                          <span className="font-mono">{primary.cities_value}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </FadeIn>
          </div>

          {/* Right Sidebar - Company Info Panel (Figma: 343px, bg #F2F2F2, padding 16px, radius 5px) */}
          <FadeIn delay={300} direction="right" className="w-full lg:w-[343px] flex-shrink-0">
            <div className="bg-[#F2F2F2] rounded-[5px] p-[16px] overflow-hidden">
              {/* Inner content container (Figma: 309px width) */}
              <div className="flex flex-col w-full max-w-[309px]">
                {/* Header - Logo and arrow on same line */}
                <div className="flex items-center justify-between">
                  {/* Company Logo (Figma: 137.25x36px) */}
                  <div className="flex items-center h-[36px]">
                    {primary.company_logo?.url ? (
                      <PrismicNextImage
                        field={primary.company_logo}
                        className="h-[36px] w-auto max-w-[137px] object-contain"
                        fallbackAlt=""
                      />
                    ) : (
                      <div className="h-[36px] w-[137px] bg-gray-300 rounded" />
                    )}
                  </div>

                  {/* Dropdown arrow - toggles section (Figma: 24x24px) */}
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-[32px] h-[32px] flex items-center justify-center text-black/60 hover:text-black hover:bg-black/5 rounded-full transition-all duration-200 cursor-pointer"
                    aria-label={isExpanded ? "Collapse section" : "Expand section"}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`transition-transform duration-300 ease-out ${isExpanded ? '' : 'rotate-180'}`}
                    >
                      <path
                        d="M6.75 9.25L12 14.75L17.25 9.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Collapsible content with smooth animation */}
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{
                    gridTemplateRows: isExpanded ? '1fr' : '0fr',
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-[24px] pt-[24px]">
                      {/* About the company section */}
                      <div className="flex flex-col">
                        {/* Title (Figma: Inter 18px, regular, black, line-height 27px/150%) */}
                        {primary.about_title && (
                          <p className="font-inter text-[18px] font-normal text-black leading-[1.5] m-0">
                            {primary.about_title}
                          </p>
                        )}
                        {/* Description (Figma: Inter 18px, regular, black/55%, line-height 27px, width 287px) */}
                        {primary.about_description && (
                          <p className="font-inter text-[18px] font-normal text-black/55 leading-[1.5] w-[287px] m-0">
                            {primary.about_description}
                          </p>
                        )}
                      </div>

                      {/* Industrie Section */}
                      <div className="flex flex-col gap-[8px]">
                        {/* Title (Figma: Inter 18px, regular, black, line-height 27px) */}
                        {primary.industry_title && (
                          <p className="font-inter text-[18px] font-normal text-black leading-[1.5] m-0">
                            {primary.industry_title}
                          </p>
                        )}
                        {/* Industry badge (Figma: white bg, radius 5px, padding 10px, gap 10px) */}
                        {primary.industry_type && (
                          <div className="inline-flex items-center gap-[10px] bg-white rounded-[5px] p-[10px] w-fit">
                            {/* Red dot (Figma: 8x8px, #F02C2C) */}
                            <div className="w-[8px] h-[8px] rounded-full bg-[#F02C2C] flex-shrink-0" />
                            {/* Text (Figma: Inter 18px, regular, black, tracking -0.09px, line-height 145%) */}
                            <span className="font-inter text-[18px] font-normal text-black leading-[1.45] tracking-[-0.09px]">
                              {primary.industry_type}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* With Freeda since section */}
                      <div className="flex flex-col gap-[8px]">
                        {/* Title (Figma: Inter 18px, regular, black, line-height 27px) */}
                        {primary.since_title && (
                          <p className="font-inter text-[18px] font-normal text-black leading-[1.5] m-0">
                            {primary.since_title}
                          </p>
                        )}
                        {/* Description (Figma: Inter 18px, regular, black/55%, line-height 27px, width 287px) */}
                        {primary.since_description && (
                          <p className="font-inter text-[18px] font-normal text-black/55 leading-[1.5] w-[287px] m-0">
                            {primary.since_description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPageHero;
