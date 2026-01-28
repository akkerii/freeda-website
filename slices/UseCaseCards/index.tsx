"use client";

import { FC, useState, useEffect, useRef, useCallback } from "react";
import { isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
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
  const [cardVisibility, setCardVisibility] = useState<number[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Calculate card visibility based on scroll position
  const updateCardVisibility = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerRight = containerRect.right;

    const newVisibility = cardRefs.current.map((cardRef) => {
      if (!cardRef) return 1;

      const cardRect = cardRef.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const cardRight = cardRect.right;

      // Calculate how close the card is to the right edge
      const distanceFromRight = containerRight - cardCenter;
      const fadeZone = 600; // pixels from right edge where fade starts (covers ~2 cards)

      if (distanceFromRight < 0) {
        // Card is past the right edge
        return 0.3;
      } else if (distanceFromRight < fadeZone) {
        // Card is in the fade zone - calculate opacity
        return 0.3 + (distanceFromRight / fadeZone) * 0.7;
      }
      return 1;
    });

    setCardVisibility(newVisibility);
  }, []);

  // Update visibility on scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Initial calculation
    updateCardVisibility();

    container.addEventListener('scroll', updateCardVisibility, { passive: true });
    window.addEventListener('resize', updateCardVisibility, { passive: true });

    return () => {
      container.removeEventListener('scroll', updateCardVisibility);
      window.removeEventListener('resize', updateCardVisibility);
    };
  }, [updateCardVisibility, cards.length]);

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
      className="relative w-full bg-white py-12 md:py-24 overflow-hidden"
    >
      {/* Floating Navigation - Only visible when section is in view */}
      {cards.length > 0 && (
        <div
          className={clsx(
            "fixed right-8 top-1/2 -translate-y-1/2 z-50 transition-opacity duration-300 hidden lg:block",
            isNavVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="bg-[#F2F2F2] rounded-[10px] p-4 flex flex-col gap-5 shadow-lg max-w-[220px]">
            {cards.map((card: any, idx: number) => (
              <button
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={clsx(
                  "font-trap text-[15px] leading-[1.2] text-left transition-colors",
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

      {/* Scaled container for mobile - scales down to fit screen while maintaining desktop layout */}
      {/* Height wrapper compensates for scale transform at each breakpoint */}
      <div className="w-full overflow-hidden h-[750px] sm:h-[1100px] md:h-[1500px] lg:h-[1900px] xl:h-auto">
        <div className="w-[1200px] min-w-[1200px] max-w-[1512px] px-[64px] mx-auto origin-top scale-[0.35] sm:scale-[0.5] md:scale-[0.68] lg:scale-[0.85] xl:scale-100">
        {/* Section Title */}
        {slice.primary.section_title && (
          <h2 className="font-trap text-[50px] font-semibold text-black mb-16 leading-[1.1] pr-[67px]">
            {slice.primary.section_title}
          </h2>
        )}

        {/* Cards Container - Horizontal scrollable layout */}
        <div className="relative">
          {/* Scroll container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 items-start overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Reorder cards so selected is always first */}
            {(() => {
              const reorderedCards = [
                cards[selectedIndex],
                ...cards.filter((_: any, i: number) => i !== selectedIndex)
              ];

              return reorderedCards.map((card: any, displayIndex: number) => {
                const originalIndex = cards.indexOf(card);
                const isSelected = displayIndex === 0;
                const isComingSoon = card.coming_soon;
                // Get visibility based on scroll position (1 = fully visible, lower = faded)
                const visibility = cardVisibility[displayIndex] ?? 1;

                return (
                  <button
                    key={originalIndex}
                    ref={(el) => { cardRefs.current[displayIndex] = el; }}
                    onClick={() => setSelectedIndex(originalIndex)}
                    className={clsx(
                      "flex flex-col gap-8 items-start relative rounded-lg shrink-0 transition-all duration-500 ease-out text-left cursor-pointer",
                      isSelected ? "w-[524px]" : "w-[343px]"
                    )}
                    style={{
                      opacity: visibility,
                    }}
                  >
                  {/* Card Image - Figma specs: selected 524x698, regular 343x456 */}
                  <div
                    className={clsx(
                      "relative overflow-hidden rounded-[10px] w-full shrink-0",
                      isSelected ? "h-[698px]" : "h-[456px]"
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
              });
            })()}
          </div>
        </div>

        {/* Detail View - Dynamic Steps Section */}
        {cards[selectedIndex] && (
          <div className="mt-24 relative min-h-[400px]">
            {/* Detail Title */}
            {cards[selectedIndex].detail_title && (
              <h3 className="font-trap text-[40px] font-semibold text-black mb-4 leading-[1.1] whitespace-pre-line text-center">
                {cards[selectedIndex].detail_title}
              </h3>
            )}

            {/* Detail Description */}
            {cards[selectedIndex].detail_description && (
              <p className="font-inter text-[24px] text-black/55 leading-[1.45] tracking-[-0.12px] mb-16 max-w-[800px] mx-auto text-center">
                {cards[selectedIndex].detail_description}
              </p>
            )}

            {/* Steps Container */}
            <div className="flex flex-col gap-24">
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
                        "flex gap-12 items-start",
                        isImageLeft ? "flex-row" : "flex-row-reverse"
                      )}
                    >
                      {/* Image with Freeda logo badge or Lottie animation */}
                      {/* Lottie animations for first 3 steps of first card */}
                      {selectedIndex === 0 && stepIndex === 0 ? (
                        <UseCaseLottieAnimation
                          src="/animations/step1-config.json"
                          className="w-auto"
                        />
                      ) : selectedIndex === 0 && stepIndex === 1 ? (
                        <UseCaseLottieAnimation
                          src="/animations/step2-config.json"
                          className="w-auto"
                        />
                      ) : selectedIndex === 0 && stepIndex === 2 ? (
                        <UseCaseLottieAnimation
                          src="/animations/step3-config.json"
                          className="w-auto"
                        />
                      ) : step.use_composition ? (
                        <UseCaseImageComposition
                          className="w-auto"
                          mainImage={step.composition_main_image?.url || "/images/use-cases/main-screenshot.png"}
                          cardImage={step.composition_card_image?.url || "/images/use-cases/card-requirements.png"}
                          smallImage={step.composition_small_image?.url || "/images/use-cases/small-frame.png"}
                        />
                      ) : isFilled.image(step.step_image) ? (
                        <div className="relative w-[523px] h-[558px] shrink-0 rounded-[10px] overflow-hidden">
                          <PrismicNextImage
                            field={step.step_image}
                            fill
                            className="object-cover"
                            fallbackAlt=""
                          />
                        </div>
                      ) : (
                        <UseCaseImageComposition className="w-auto" />
                      )}

                      {/* Content */}
                      <div className="flex flex-col gap-6 flex-1">
                        {/* Title */}
                        <h4 className="font-trap text-2xl font-semibold text-black leading-[1.2]">
                          {step.step_title}
                        </h4>

                        {/* Description */}
                        {isFilled.richText(step.step_description) && (
                          <div className="font-inter text-lg text-black/70 leading-relaxed [&_p]:m-0 [&_p]:mb-1 [&_br]:block [&_br]:content-[''] [&_br]:mb-1">
                            <PrismicRichText field={step.step_description} />
                          </div>
                        )}

                        {/* Tags - Vertical layout with section titles above tags */}
                        <div className="flex flex-col gap-4 mt-2">
                          {/* Section 1 - Title above tags */}
                          {step.tags_section1_title && (
                            <p className="font-inter text-base text-black/55 m-0">{step.tags_section1_title}</p>
                          )}
                          {step.tags_section1 && step.tags_section1.split(';').map((tag: string, idx: number) => (
                            <div key={`s1-${idx}`} className="inline-flex items-center gap-[10px] px-4 py-[7px] bg-[#F0F0F0] rounded-[5px]" style={{ width: 'fit-content' }}>
                              <div className="w-[8px] h-[8px] rounded-full bg-[#F02C2C] shrink-0" />
                              <span className="font-mono text-[18px] text-black leading-[1.2]">{tag.trim()}</span>
                            </div>
                          ))}

                          {/* Section 2 - Title above tags */}
                          {step.tags_section2_title && (
                            <p className="font-inter text-base text-black/55 m-0 mt-2">{step.tags_section2_title}</p>
                          )}
                          {step.tags_section2 && step.tags_section2.split(';').map((tag: string, idx: number) => (
                            <div key={`s2-${idx}`} className="inline-flex items-center gap-[10px] px-4 py-[7px] bg-[#F0F0F0] rounded-[5px]" style={{ width: 'fit-content' }}>
                              <div className="w-[8px] h-[8px] rounded-full bg-[#F02C2C] shrink-0" />
                              <span className="font-mono text-[18px] text-black leading-[1.2]">{tag.trim()}</span>
                            </div>
                          ))}

                          {/* Section 3 - Title above tags */}
                          {step.tags_section3_title && (
                            <p className="font-inter text-base text-black/55 m-0 mt-2">{step.tags_section3_title}</p>
                          )}
                          {step.tags_section3 && step.tags_section3.split(';').map((tag: string, idx: number) => (
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
      </div>
    </section>
  );
};

export default UseCaseCards;
