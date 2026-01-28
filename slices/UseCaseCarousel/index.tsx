"use client";

import { FC, useState } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import UseCaseLottieAnimation from "@/components/UseCaseLottieAnimation";
import Link from "next/link";

export type UseCaseCarouselProps =
  SliceComponentProps<Content.UseCaseCarouselSlice>;

// Step icon SVG components - matching exact Figma exports
const Step1Icon = () => (
  <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_step1)">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.4001 21.3322L12.3226 26.6661L9.2417 32H15.4001L18.4776 26.6661L21.5551 21.3322L24.636 15.9983H30.7911L27.7135 10.6644H21.5551L18.4776 15.9983L15.4001 21.3322Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M27.7132 21.3322L24.6357 26.6661L21.5548 32H27.7132L30.7907 26.6661H36.9491L33.8716 21.3322H27.7132Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.16061 26.6627L9.23812 21.3288L12.319 15.9949L15.3965 10.661L18.474 5.32711H24.6325L21.5549 0H15.3999L0.00219727 26.6627L3.0831 31.9966L6.16061 26.6627Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_step1">
        <rect width="36.9471" height="32" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const Step2Icon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_step2)">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.098 32.6995V37.4451H10.622V32.6995C10.622 30.846 12.125 29.3467 13.975 29.3467H23.466C25.316 29.3467 26.819 30.8495 26.819 32.6995V37.4451H29.343V32.6995C29.343 30.846 30.846 29.3467 32.696 29.3467H37.442V26.8226H32.696C30.843 26.8226 29.343 25.3199 29.343 23.4698V13.9787C29.343 12.1252 30.846 10.6259 32.696 10.6259H32.706H37.442V8.1018H32.696C30.843 8.1018 29.343 6.5991 29.343 4.749V0H26.819V4.7455C26.819 6.5991 25.316 8.0984 23.466 8.0984H13.975C12.122 8.0984 10.622 6.5956 10.622 4.7455V0H8.098V4.7455C8.098 6.5991 6.596 8.0984 4.746 8.0984H4.735H0V10.6224H4.746C6.599 10.6224 8.098 12.1252 8.098 13.9753V18.7208V23.4664C8.098 25.3199 6.596 26.8192 4.746 26.8192H0V29.3433H4.746C6.599 29.3433 8.098 30.846 8.098 32.6961V32.6995ZM26.823 18.7243V13.9787C26.823 12.1252 25.32 10.6259 23.47 10.6259H23.459H18.724H13.979C12.125 10.6259 10.626 12.1286 10.626 13.9787V23.4698C10.626 25.3233 12.129 26.8226 13.979 26.8226H23.47C25.32 26.8226 26.823 25.3199 26.823 23.4698V18.7243Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_step2">
        <rect width="37.4451" height="37.4451" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const Step3Icon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_step3)">
      <path d="M39.605 22.8981L33.302 17.3423V23.2118H17.305V32.401H39.722V22.8981H39.605Z" fill="white"/>
      <path d="M23.211 22.4166H32.4V0H22.898V0.1167L17.342 6.424H23.211V22.4166Z" fill="white"/>
      <path d="M22.416 7.3214H0V16.8279H0.117L6.424 22.3838V16.5106H22.416V7.3214Z" fill="white"/>
      <path d="M16.511 17.3058H7.321V39.7224H16.828V39.6056L22.384 33.302H16.511V17.3058Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_step3">
        <rect width="39.7224" height="39.7224" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

// Tag component for step items
const Tag: FC<{ text: string }> = ({ text }) => (
  <div className="inline-flex items-center gap-2.5 px-4 py-[7px] bg-[#F0F0F0] rounded-[5px]">
    <span className="w-2 h-2 rounded-full bg-[#F02C2C]" />
    <span className="font-mono text-lg text-black">{text}</span>
  </div>
);

const UseCaseCarousel: FC<UseCaseCarouselProps> = ({ slice }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const useCases = slice.primary.use_cases || [];
  const selectedCase = useCases[selectedIndex];

  if (useCases.length === 0) return null;

  // Extract tags from rich text list items
  const extractTags = (field: any): string[] => {
    if (!field || !Array.isArray(field)) return [];
    return field
      .filter((item: any) => item.type === "list-item")
      .map((item: any) => item.text || "");
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full bg-white py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="max-w-[1384px] mx-auto px-5 md:px-10 lg:px-[67px]">
        {/* Section Title */}
        <h2 className="font-trap text-3xl md:text-4xl lg:text-[50px] font-semibold text-black mb-6 leading-[1.1]">
          {slice.primary.section_title || "Use cases"}
        </h2>

        {/* Cards Carousel */}
        <div className="flex flex-col lg:flex-row gap-5 mb-16 lg:mb-[72px]">
          {useCases.map((useCase, index) => {
            const isSelected = index === selectedIndex;
            const isComingSoon = useCase.coming_soon;

            return (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`group text-left transition-all duration-300 flex flex-col ${
                  isSelected
                    ? "lg:w-[524px] lg:flex-shrink-0"
                    : "lg:w-[343px] lg:flex-shrink-0"
                }`}
              >
                {/* Card Image */}
                <div
                  className={`relative rounded-[10px] overflow-hidden ${
                    isSelected ? "h-[400px] lg:h-[698px]" : "h-[300px] lg:h-[456px]"
                  } ${isComingSoon ? "mb-4" : "mb-8"}`}
                >
                  {isFilled.image(useCase.card_image) ? (
                    <PrismicNextImage
                      field={useCase.card_image}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#F5F5F5]" />
                  )}

                  {/* Red dot indicator for selected */}
                  {isSelected && !isComingSoon && (
                    <div className="absolute top-4 right-4 w-[26px] h-[26px] rounded-full bg-[#F02C2C]" />
                  )}

                  {/* Coming Soon overlay */}
                  {isComingSoon && (
                    <div className="absolute inset-0 bg-white/80" />
                  )}

                  {/* Read More hover button - only for non-coming-soon cards */}
                  {!isComingSoon && (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <Link
                        href={(useCase as any).link_slug ? `/case-study/${(useCase as any).link_slug}` : '/case-study'}
                        className="inline-flex items-center justify-center px-6 py-3 bg-[#F02C2C] rounded-[9px] font-mono text-[16px] md:text-[18px] text-white no-underline hover:bg-[#d92626] transition-colors whitespace-nowrap"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Read More
                      </Link>
                    </div>
                  )}
                </div>

                {/* Coming Soon Badge */}
                {isComingSoon && (
                  <div className="flex items-center gap-[11px] mb-4">
                    <span className="w-[13px] h-[13px] rounded-full bg-[#F02C2C]" />
                    <span className="font-mono text-[13px] text-black/50 leading-[145%] tracking-[-0.065px]">
                      Coming Soon
                    </span>
                  </div>
                )}

                {/* Card Title */}
                <h3 className="font-trap text-2xl font-semibold text-black mb-4 leading-[120%]">
                  {useCase.card_title}
                </h3>

                {/* Card Description */}
                <div className="text-lg text-black/55 leading-[121%]">
                  <p className="font-bold mb-0">
                    {useCase.application_label || "Application"}
                  </p>
                  <p className="font-normal">
                    {useCase.application_text}
                  </p>

                  <p className="font-bold mt-4 mb-0">
                    {useCase.documents_label || "Documents analysed"}
                  </p>
                  <p className="font-normal">
                    {useCase.documents_text}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Use Case Details */}
        {selectedCase && (
          <div key={`details-${selectedIndex}`} className="flex flex-col gap-[72px]">
            {/* Detail Header */}
            <div className="text-center max-w-[1087px] mx-auto">
              <h3 className="font-trap text-3xl md:text-4xl lg:text-[50px] font-semibold text-black leading-[110%] mb-6">
                {selectedCase.detail_title}
              </h3>
              {isFilled.richText(selectedCase.detail_description) && (
                <div className="text-lg text-black/65 leading-[145%] max-w-[705px] mx-auto [&_p]:m-0 tracking-[-0.09px]">
                  <PrismicRichText field={selectedCase.detail_description} />
                </div>
              )}
            </div>

            {/* Step 1 - Image Left, Content Right */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[111px] items-center">
              {/* Lottie Animation for Step 1 */}
              <UseCaseLottieAnimation
                key={`step1-${selectedIndex}`}
                src="/animations/step1-config.json"
                className="w-full lg:w-auto"
              />

              {/* Content */}
              <div className="flex-1">
                <h4 className="font-trap text-2xl md:text-3xl lg:text-[36px] font-semibold text-black mb-6 leading-[120%]">
                  {selectedCase.step1_title || "Step 1 — Configuration"}
                </h4>
                {isFilled.richText(selectedCase.step1_description) && (
                  <div className="text-lg text-black/55 leading-[121%] mb-8 [&_p]:m-0 [&_strong]:font-bold [&_strong]:text-black/55 tracking-[-0.09px]">
                    <PrismicRichText field={selectedCase.step1_description} />
                  </div>
                )}
                {/* Tags */}
                <div className="flex flex-wrap gap-4">
                  {extractTags(selectedCase.step1_tags).map((tag, i) => (
                    <Tag key={i} text={tag} />
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2 - Content Left, Image Right */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-[111px] items-center">
              {/* Lottie Animation for Step 2 */}
              <UseCaseLottieAnimation
                key={`step2-${selectedIndex}`}
                src="/animations/step2-config.json"
                className="w-full lg:w-auto"
              />

              {/* Content */}
              <div className="flex-1">
                <h4 className="font-trap text-2xl md:text-3xl lg:text-[36px] font-semibold text-black mb-6 leading-[120%]">
                  {selectedCase.step2_title || "Step 2 — Upload your plans and documents"}
                </h4>
                {isFilled.richText(selectedCase.step2_description) && (
                  <div className="text-lg text-black/55 leading-[121%] mb-8 [&_p]:m-0 [&_strong]:font-bold [&_strong]:text-black/55 tracking-[-0.09px]">
                    <PrismicRichText field={selectedCase.step2_description} />
                  </div>
                )}
                {/* Tags */}
                <div className="flex flex-wrap gap-4">
                  {extractTags(selectedCase.step2_tags).map((tag, i) => (
                    <Tag key={i} text={tag} />
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3 - Image Left, Content Right */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[111px] items-center">
              {/* Lottie Animation for Step 3 */}
              <UseCaseLottieAnimation
                key={`step3-${selectedIndex}`}
                src="/animations/step3-config.json"
                className="w-full lg:w-auto"
              />

              {/* Content */}
              <div className="flex-1">
                <h4 className="font-trap text-2xl md:text-3xl lg:text-[36px] font-semibold text-black mb-6 leading-[120%]">
                  {selectedCase.step3_title || "Step 3 — Receive your accessibility reports"}
                </h4>
                {isFilled.richText(selectedCase.step3_description) && (
                  <div className="text-lg text-black/55 leading-[121%] mb-8 [&_p]:m-0 [&_strong]:font-bold [&_strong]:text-black/55 tracking-[-0.09px]">
                    <PrismicRichText field={selectedCase.step3_description} />
                  </div>
                )}
                {/* Tags */}
                <div className="flex flex-wrap gap-4">
                  {extractTags(selectedCase.step3_tags).map((tag, i) => (
                    <Tag key={i} text={tag} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UseCaseCarousel;
