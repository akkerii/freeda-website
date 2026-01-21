"use client";

import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Articles`.
 */
export type ArticlesProps = SliceComponentProps<Content.ArticlesSlice>;

/**
 * Component for "Articles" Slices.
 */
const Articles: FC<ArticlesProps> = ({ slice }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Reorder items so the active one is always first
  const reorderedItems = slice.primary.items ? [
    slice.primary.items[activeIndex],
    ...slice.primary.items.slice(0, activeIndex),
    ...slice.primary.items.slice(activeIndex + 1)
  ] : [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-12 md:py-16 lg:py-20"
    >
      <div className="w-full max-w-[1250px] mx-auto px-5 md:px-10">
        {/* Title - Responsive font sizes */}
        <h2 className="font-trap text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[1.1] text-black mb-8 md:mb-10 lg:mb-12">
          {slice.primary.title}
        </h2>

        {/* Cards Container - Stack on mobile, row on desktop */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-stretch">
          {reorderedItems.map((item, displayIndex) => {
            const originalIndex = displayIndex === 0 ? activeIndex :
              displayIndex <= activeIndex ? displayIndex - 1 : displayIndex;

            const isActive = displayIndex === 0;

            return (
              <div
                key={originalIndex}
                onClick={() => setActiveIndex(originalIndex)}
                className={`flex flex-col gap-6 md:gap-8 cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "w-full lg:w-[524px] lg:flex-shrink-0"
                    : "w-full lg:flex-1 lg:min-w-[280px] lg:max-w-[388px]"
                }`}
              >
                {/* Card Image - Responsive heights */}
                <div
                  className={`relative w-full overflow-hidden rounded-[10px] transition-all duration-300 ${
                    isActive
                      ? "h-[350px] sm:h-[450px] md:h-[550px] lg:h-[698px]"
                      : "h-[280px] sm:h-[350px] md:h-[400px] lg:h-[483px]"
                  }`}
                >
                  {item.image?.url ? (
                    <PrismicNextImage
                      field={item.image}
                      className="absolute inset-0 object-cover w-full h-full"
                      fallbackAlt=""
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#202020]" />
                  )}
                </div>

                {/* Card Text - Responsive typography */}
                <div className="flex flex-col gap-3 md:gap-4">
                  {/* Card Title */}
                  <h3 className="font-trap text-xl md:text-2xl font-semibold leading-[1.2] text-black">
                    {item.card_title}
                  </h3>

                  {/* Card Description */}
                  <div className="flex flex-col font-inter text-base md:text-lg text-black/55">
                    <p className="font-bold mb-0">Application</p>
                    <PrismicRichText
                      field={item.application}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="leading-[1.5] mb-0">{children}</p>
                        ),
                      }}
                    />
                    <p className="leading-[normal] mb-0 mt-4 font-bold">Documents analysed</p>
                    <PrismicRichText
                      field={item.documents}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="leading-[1.5] mb-0">{children}</p>
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Articles;
