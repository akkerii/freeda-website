"use client";

import { FC, useState, useEffect } from "react";
import { isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import UseCaseImageComposition from "@/components/UseCaseImageComposition";
import UseCaseLottieAnimation from "@/components/UseCaseLottieAnimation";

// Type will be generated after pushing to Prismic
export type UseCaseCardsProps = SliceComponentProps<any>;

const UseCaseCards: FC<UseCaseCardsProps> = ({ slice }) => {
  const cards = slice.items || [];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  // Track header and footer visibility to hide nav when they're in view
  useEffect(() => {
    const checkVisibility = () => {
      // Find header (Navigation) and footer elements
      const header = document.querySelector('[data-name="Hero"]') ||
                     document.querySelector('header') ||
                     document.querySelector('nav');
      const footer = document.querySelector('[data-name="Footer"]') ||
                     document.querySelector('footer');

      let headerVisible = false;
      let footerVisible = false;

      if (header) {
        const rect = header.getBoundingClientRect();
        // Header is visible if its bottom is below the top of viewport
        headerVisible = rect.bottom > 100;
      }

      if (footer) {
        const rect = footer.getBoundingClientRect();
        // Footer is visible if its top is above the bottom of viewport
        footerVisible = rect.top < window.innerHeight - 100;
      }

      // Show nav only when neither header nor footer is significantly visible
      setIsNavVisible(!headerVisible && !footerVisible);
    };

    // Check on scroll
    window.addEventListener('scroll', checkVisibility, { passive: true });
    // Initial check
    checkVisibility();

    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  if (cards.length === 0) return null;

  // Reorder cards so selected is always first (left position)
  const reorderedCards = [
    cards[selectedIndex],
    ...cards.filter((_: any, i: number) => i !== selectedIndex)
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full bg-white py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Floating Navigation - Only visible when section is in view */}
      {cards.length > 0 && (
        <div
          className={clsx(
            "fixed right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-50 transition-opacity duration-300",
            isNavVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="bg-[#F2F2F2] rounded-[10px] p-3 md:p-4 flex flex-col gap-4 md:gap-5 shadow-lg max-w-[180px] md:max-w-[220px]">
            {cards.map((card: any, idx: number) => (
              <button
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={clsx(
                  "font-trap text-[13px] md:text-[15px] leading-[1.2] text-left transition-colors",
                  idx === selectedIndex
                    ? "font-bold text-black"
                    : "font-semibold text-[#D2D2D2] hover:text-black/50"
                )}
              >
                {card.card_title}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-[67px]">
        {/* Section Title */}
        {slice.primary.section_title && (
          <h2 className="font-trap text-3xl md:text-4xl lg:text-[50px] font-semibold text-black mb-10 md:mb-16 leading-[1.1]">
            {slice.primary.section_title}
          </h2>
        )}

        {/* Cards Container - Horizontal layout matching Figma */}
        <div className="flex flex-col lg:flex-row gap-5 items-start">
          {reorderedCards.map((card: any, displayIndex: number) => {
            const isSelected = displayIndex === 0; // First card is always selected
            const isComingSoon = card.coming_soon;
            const originalIndex = cards.indexOf(card);

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

        {/* Detail View - Dynamic Steps Section */}
        {cards[selectedIndex] && (
          <div className="mt-16 md:mt-20 lg:mt-24 relative min-h-[400px]">
            {/* Detail Title */}
            {cards[selectedIndex].detail_title && (
              <h3 className="font-trap text-2xl md:text-3xl lg:text-[40px] font-semibold text-black mb-4 leading-[1.1] whitespace-pre-line text-center">
                {cards[selectedIndex].detail_title}
              </h3>
            )}

            {/* Detail Description */}
            {cards[selectedIndex].detail_description && (
              <p className="font-inter text-lg md:text-xl lg:text-[24px] text-black/55 leading-[1.45] tracking-[-0.12px] mb-12 md:mb-16 max-w-[800px] mx-auto text-center">
                {cards[selectedIndex].detail_description}
              </p>
            )}

            {/* Steps Container */}
            <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
              {/* Filter and render steps for the selected card */}
              {slice.primary.steps
                ?.filter((step: any) => step.card_id === cards[selectedIndex].card_id)
                .map((step: any, stepIndex: number) => {
                  // Skip if step doesn't have a title
                  if (!step.step_title) return null;

                  // Alternate layout: odd steps (1,3,5) = Image Left, even steps (2,4,6) = Image Right
                  const stepNum = stepIndex + 1;
                  const isImageLeft = stepNum % 2 === 1;

                  return (
                    <div
                      key={stepIndex}
                      className={clsx(
                        "flex flex-col gap-8 lg:gap-12 items-start",
                        isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                      )}
                    >
                      {/* Image with Freeda logo badge or Lottie animation */}
                      {/* Hardcode Lottie for first step of first card */}
                      {selectedIndex === 0 && stepIndex === 0 ? (
                        <UseCaseLottieAnimation
                          src="/animations/step1-config.json"
                          className="w-full lg:w-auto"
                        />
                      ) : step.use_composition ? (
                        <UseCaseImageComposition
                          className="w-full lg:w-auto"
                          mainImage={step.composition_main_image?.url || "/images/use-cases/main-screenshot.png"}
                          cardImage={step.composition_card_image?.url || "/images/use-cases/card-requirements.png"}
                          smallImage={step.composition_small_image?.url || "/images/use-cases/small-frame.png"}
                        />
                      ) : isFilled.image(step.step_image) ? (
                        <div className="relative w-full lg:w-[523px] h-[400px] lg:h-[558px] shrink-0 rounded-[10px] overflow-hidden">
                          <PrismicNextImage
                            field={step.step_image}
                            fill
                            className="object-cover"
                            fallbackAlt=""
                          />
                        </div>
                      ) : (
                        <UseCaseImageComposition className="w-full lg:w-auto" />
                      )}

                      {/* Content */}
                      <div className="flex flex-col gap-6 flex-1">
                        {/* Title */}
                        <h4 className="font-trap text-xl md:text-2xl font-semibold text-black leading-[1.2]">
                          {step.step_title}
                        </h4>

                        {/* Description */}
                        {isFilled.richText(step.step_description) && (
                          <div className="prose prose-lg text-black/70 leading-relaxed">
                            {step.step_description.map((block: any, idx: number) => {
                              if (block.type === 'paragraph') {
                                return <p key={idx} className="font-inter text-lg text-black/70 mb-4">{block.text}</p>;
                              }
                              if (block.type === 'list-item') {
                                return <li key={idx} className="font-inter text-lg text-black/70">{block.text}</li>;
                              }
                              return null;
                            })}
                          </div>
                        )}

                        {/* Tags - Vertical layout, one per line with red dot */}
                        <div className="flex flex-col gap-4 mt-2">
                          {step.tags_section1 && step.tags_section1.split(',').map((tag: string, idx: number) => (
                            <div key={`s1-${idx}`} className="inline-flex items-center gap-[10px] px-4 py-[7px] bg-[#F0F0F0] rounded-[5px]" style={{ width: 'fit-content' }}>
                              <div className="w-[8px] h-[8px] rounded-full bg-[#F02C2C] shrink-0" />
                              <span className="font-mono text-[18px] text-black leading-[1.2]">{tag.trim()}</span>
                            </div>
                          ))}
                          {step.tags_section2 && step.tags_section2.split(',').map((tag: string, idx: number) => (
                            <div key={`s2-${idx}`} className="inline-flex items-center gap-[10px] px-4 py-[7px] bg-[#F0F0F0] rounded-[5px]" style={{ width: 'fit-content' }}>
                              <div className="w-[8px] h-[8px] rounded-full bg-[#F02C2C] shrink-0" />
                              <span className="font-mono text-[18px] text-black leading-[1.2]">{tag.trim()}</span>
                            </div>
                          ))}
                          {step.tags_section3 && step.tags_section3.split(',').map((tag: string, idx: number) => (
                            <div key={`s3-${idx}`} className="inline-flex items-center gap-[10px] px-4 py-[7px] bg-[#F0F0F0] rounded-[5px]" style={{ width: 'fit-content' }}>
                              <div className="w-[8px] h-[8px] rounded-full bg-[#F02C2C] shrink-0" />
                              <span className="font-mono text-[18px] text-black leading-[1.2]">{tag.trim()}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UseCaseCards;
