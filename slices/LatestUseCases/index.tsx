"use client";

import { FC, useState, useEffect } from "react";
import { isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "@/prismicio";
import clsx from "clsx";

/**
 * Props for `LatestUseCases`.
 */
export type LatestUseCasesProps = SliceComponentProps<any>;

/**
 * Component for "LatestUseCases" Slices.
 */
const LatestUseCases: FC<LatestUseCasesProps> = ({ slice }) => {
  const [useCaseCards, setUseCaseCards] = useState<any[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const fetchUseCases = async () => {
      // Fetch the use cases page with its slices
      if (isFilled.contentRelationship(slice.primary.use_cases_page)) {
        const client = createClient();
        try {
          const useCasesPage = await client.getByID(
            slice.primary.use_cases_page.id,
            {
              fetchLinks: [],
            }
          );

          // Find the UseCaseCards slice in the page
          const useCaseCardsSlice = useCasesPage.data.slices?.find(
            (s: any) => s.slice_type === "use_case_cards"
          );

          // Extract the cards from the slice items
          if (useCaseCardsSlice && useCaseCardsSlice.items) {
            setUseCaseCards(useCaseCardsSlice.items);
          }
        } catch (error) {
          console.error("Error fetching use cases page:", error);
        }
      }
    };

    fetchUseCases();
  }, [slice.primary.use_cases_page]);

  if (useCaseCards.length === 0) return null;

  // Reorder cards so selected is always first (left position)
  const reorderedCards = [
    useCaseCards[selectedIndex],
    ...useCaseCards.filter((_: any, i: number) => i !== selectedIndex)
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full bg-white py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-[67px]">
        {/* Section Title */}
        {slice.primary.title && (
          <h2 className="font-trap text-3xl md:text-4xl lg:text-[50px] font-semibold text-black mb-10 md:mb-16 leading-[1.1]">
            {slice.primary.title}
          </h2>
        )}

        {/* Cards Container - Horizontal layout matching UseCaseCards */}
        <div className="flex flex-col lg:flex-row gap-5 items-start">
          {reorderedCards.map((card: any, displayIndex: number) => {
            const isSelected = displayIndex === 0; // First card is always selected
            const isComingSoon = card.coming_soon;
            const originalIndex = useCaseCards.indexOf(card);

            return (
              <button
                key={originalIndex}
                onClick={() => setSelectedIndex(originalIndex)}
                className={clsx(
                  "flex flex-col gap-8 items-start relative rounded-lg shrink-0 transition-all duration-500 ease-in-out text-left cursor-pointer hover:opacity-90",
                  isSelected
                    ? "w-full lg:w-[524px]"
                    : "w-full lg:w-[343px] lg:min-w-[336px] lg:max-w-[388px]"
                )}
              >
                {/* Card Image - Figma specs: selected 524x698, regular 343x456 */}
                <div
                  className={clsx(
                    "relative overflow-hidden rounded-[10px] w-full shrink-0",
                    isSelected ? "h-[500px] lg:h-[698px]" : "h-[400px] lg:h-[456px]"
                  )}
                >
                  {isFilled.image(card.card_image) ? (
                    <PrismicNextImage
                      field={card.card_image}
                      fill
                      className="object-cover"
                      priority={displayIndex === 0}
                      fallbackAlt=""
                    />
                  ) : (
                    <div className="w-full h-full bg-[#F5F5F5]" />
                  )}

                  {/* Red dot indicator for selected card - 26x26px, top-right */}
                  {isSelected && !isComingSoon && (
                    <div className="absolute top-[22px] right-[22px] w-[26px] h-[26px] rounded-full bg-[#F02C2C]" />
                  )}

                  {/* Coming Soon overlay - rgba(255,255,255,0.8) */}
                  {isComingSoon && (
                    <div className="absolute inset-0 bg-white/80 rounded-[10px]" />
                  )}
                </div>

                {/* Coming Soon Badge - 13px red dot + Space Mono text */}
                {isComingSoon && (
                  <div className="flex items-center gap-[11px]">
                    <div className="w-[13px] h-[13px] rounded-full bg-[#F02C2C]" />
                    <p className="font-mono text-[13px] text-black/50 leading-[1.45] tracking-[-0.065px] m-0">
                      Coming Soon
                    </p>
                  </div>
                )}

                {/* Card Text Content - gap 16px */}
                <div className="flex flex-col gap-4 items-start w-full">
                  {/* Card Title - Trap SemiBold 24px, line-height 120% */}
                  <h5 className="font-trap text-2xl font-semibold text-black leading-[1.2] m-0">
                    {card.card_title}
                  </h5>

                  {/* Card Description - Inter 18px, opacity 55% */}
                  <div className="flex flex-col text-lg text-black/55 leading-[normal]">
                    {/* Application */}
                    <p className="font-inter font-bold m-0">Application</p>
                    <p className="font-inter font-normal m-0 mb-4">
                      {card.application_text}
                    </p>

                    {/* Documents Analysed */}
                    <p className="font-inter font-bold m-0">Documents analysed</p>
                    <p className="font-inter font-normal m-0">
                      {card.documents_text}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatestUseCases;
