"use client";

import { useState } from "react";
import type { ValuePropositionSlice } from "@/prismicio-types";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type ValuePropositionProps = SliceComponentProps<ValuePropositionSlice>;

const ValueProposition = ({ slice }: ValuePropositionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = slice.primary.cards || [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-12 md:py-20 lg:py-28"
    >
      <div className="max-w-[1250px] mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 lg:mb-20">
          <h2 className="font-trap text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold leading-[110%] text-black max-w-[900px] mx-auto">
            {slice.primary.section_heading || "From plans & documents to decisions"}
          </h2>
          <div className="mt-6 md:mt-8 font-inter text-base md:text-[18px] text-black/65 leading-[145%] tracking-[-0.09px] max-w-[705px] mx-auto [&_p]:m-0">
            {slice.primary.section_description && slice.primary.section_description.length > 0 ? (
              <PrismicRichText field={slice.primary.section_description} />
            ) : (
              <p>Freeda analyses plans and cross-references them with technical, project & regulatory documents to detect errors and inconsistencies.</p>
            )}
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* Image - Left Side */}
            <div className="w-full lg:w-[702px] flex-shrink-0">
              <div className="w-full aspect-[702/525]">
                {cards[activeIndex]?.card_image?.url ? (
                  <PrismicNextImage
                    field={cards[activeIndex].card_image}
                    className="w-full h-full object-contain rounded-[10px]"
                    fallbackAlt=""
                  />
                ) : (
                  <div className="w-full h-full bg-[#F2F2F2] rounded-[10px]" />
                )}
              </div>
            </div>

            {/* Cards - Right Side */}
            <div className="w-full lg:w-1/2 flex-shrink-0 overflow-hidden">
              {/* Card List */}
              <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="text-left w-full transition-all duration-300 cursor-pointer"
                  >
                    {/* Card Title */}
                    <h3
                      className={`font-trap text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold leading-[120%] transition-colors duration-300 ${
                        activeIndex === index ? "text-black" : "text-[#8B9187]"
                      }`}
                      style={{
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                        hyphens: "auto",
                        maxWidth: "100%"
                      }}
                    >
                      {card.card_title}
                    </h3>

                    {/* Card Description - Only show for active card */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeIndex === index
                          ? "max-h-[300px] opacity-100 mt-4 md:mt-6"
                          : "max-h-0 opacity-0 mt-0"
                      }`}
                    >
                      <div
                        className="font-inter text-base md:text-lg lg:text-[24px] text-black/55 leading-[145%] tracking-[-0.12px] [&_p]:m-0"
                        style={{
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                          maxWidth: "100%"
                        }}
                      >
                        <PrismicRichText field={card.card_description} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
