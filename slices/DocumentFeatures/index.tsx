"use client";

import { useState } from "react";
import type { DocumentFeaturesSlice } from "@/prismicio-types";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import FadeIn from "@/components/FadeIn";

export type DocumentFeaturesProps = SliceComponentProps<DocumentFeaturesSlice>;

const DocumentFeatures = ({ slice }: DocumentFeaturesProps) => {
  // Track the selected feature index (null means show the main feature)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Calculate total number of features (main + items)
  const totalFeatures = 1 + (slice.items?.length || 0);
  // Calculate the actual index (0 for main, 1+ for items)
  const actualIndex = selectedIndex === null ? 0 : selectedIndex + 1;

  // Calculate gradient position based on selected index
  const gradientPosition = (actualIndex / (totalFeatures - 1)) * 100;

  // Get the currently active feature data
  const primary = slice.primary as any;
  const items = slice.items as any[];

  // Build array of all features for image stacking
  const allFeatures = [
    { feature_image: primary.left_section_image, index: null },
    ...items.map((item: any, idx: number) => ({ feature_image: item.feature_image, index: idx }))
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative bg-white py-10 md:py-14"
    >
      <div className="relative z-10 max-w-[1250px] mx-auto px-5 md:px-6">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col items-center gap-6 md:gap-8 mb-10 md:mb-14">
            {primary.title && (
              <h2 className="font-trap text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] text-black text-center max-w-[884px] m-0 whitespace-pre-line">
                {primary.title}
              </h2>
            )}
            {primary.description && (
              <div className="text-sm sm:text-base md:text-lg text-black/65 leading-[1.45] tracking-[-0.09px] text-center max-w-[705px] [&_p]:m-0">
                <PrismicRichText field={primary.description} />
              </div>
            )}
          </div>
        </FadeIn>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10">
          {/* Left - Image Section with Crossfade */}
          <FadeIn delay={100} direction="left" className="w-full lg:w-[702px] flex-shrink-0 relative">
            <div className="relative overflow-hidden rounded-[10px]">
              {/* Stack all images - control visibility with opacity */}
              {allFeatures.map((feature, i) => (
                feature.feature_image?.url && (
                  <PrismicNextImage
                    key={i}
                    field={feature.feature_image}
                    className={`w-full h-auto transition-opacity duration-500 ease-in-out ${
                      i === 0 ? "" : "absolute inset-0"
                    } ${
                      feature.index === selectedIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                    fallbackAlt=""
                  />
                )
              ))}
            </div>
          </FadeIn>

          {/* Vertical Red Line with Dynamic Gradient */}
          <div className="hidden lg:block flex-shrink-0 w-[2px] h-[278px] relative">
            <div
              className="absolute inset-0 transition-all duration-500 ease-in-out"
              style={{
                background: `linear-gradient(to bottom,
                  rgba(236, 6, 6, 0.1) 0%,
                  rgba(236, 6, 6, 1) ${gradientPosition}%,
                  rgba(236, 6, 6, 0.1) 100%)`
              }}
            />
          </div>

          {/* Right - Content */}
          <FadeIn delay={200} direction="right" className="w-full lg:flex-1 flex flex-col gap-8 lg:gap-10 overflow-hidden">
            {/* Main Feature - Clickable */}
            <div className="flex flex-col">
              {primary.main_feature_title && (
                <button
                  onClick={() => setSelectedIndex(null)}
                  className={`font-trap text-left text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold leading-[1.2] tracking-[-2px] m-0 whitespace-pre-line transition-all duration-300 ease-out cursor-pointer hover:text-black ${
                    selectedIndex === null ? "text-black" : "text-[#8B9187]"
                  }`}
                >
                  {primary.main_feature_title}
                </button>
              )}
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  selectedIndex === null ? "max-h-[500px] opacity-100 mt-4 md:mt-6" : "max-h-0 opacity-0 mt-0"
                }`}
              >
                {primary.main_feature_description && (
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/55 tracking-[-0.12px] [&_p]:m-0">
                    <PrismicRichText field={primary.main_feature_description} />
                  </div>
                )}
              </div>
            </div>

            {/* Secondary Features - Clickable */}
            {items.map((item: any, index: number) => (
              <div key={index} className="flex flex-col">
                <button
                  onClick={() => setSelectedIndex(index)}
                  className={`font-trap text-left text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold leading-[1.2] tracking-[-2px] m-0 transition-all duration-300 ease-out cursor-pointer hover:text-black ${
                    selectedIndex === index ? "text-black" : "text-[#8B9187]"
                  }`}
                >
                  {item.feature_title}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    selectedIndex === index ? "max-h-[500px] opacity-100 mt-4 md:mt-6" : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  {item.feature_description && (
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/55 tracking-[-0.12px] [&_p]:m-0">
                      <PrismicRichText field={item.feature_description} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </FadeIn>
        </div>

        {/* CTA Button */}
        <FadeIn delay={300}>
          <div className="flex justify-center mt-10 md:mt-14">
            <a
              href="https://form.typeform.com/to/QsXZbKn1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#F02C2C] rounded-[9px] font-mono text-[14px] sm:text-[16px] leading-[1.1] text-white capitalize no-underline hover:bg-[#d92626] transition-colors"
            >
              Discuss a project
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default DocumentFeatures;
