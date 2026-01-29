"use client";

import { FC, useState, useEffect, useRef } from "react";
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
  const [isNavVisible, setIsNavVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll to content section
  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
      className="relative w-full bg-white py-24 overflow-x-auto"
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
                onClick={() => {
                  setSelectedIndex(idx);
                  scrollToContent();
                }}
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

      {/* Section Title */}
      <div className="max-w-[1512px] mx-auto px-4 sm:px-8 lg:px-[64px]">
        {slice.primary.section_title && (
          <h2 className="font-trap text-[28px] sm:text-[36px] lg:text-[50px] font-semibold text-black mb-8 lg:mb-16 leading-[1.1]">
            {slice.primary.section_title}
          </h2>
        )}
      </div>

      {/* Detail View - Dynamic Steps Section - NOW ABOVE THE CAROUSEL */}
      {cards[selectedIndex] && (
        <div ref={contentRef} className="mt-12 lg:mt-24 relative min-h-[200px] lg:min-h-[400px] max-w-[1512px] mx-auto px-4 sm:px-8 lg:px-[64px] scroll-mt-8">
          {/* Detail Title */}
          {cards[selectedIndex].detail_title && (
            <h3 className="font-trap text-[24px] sm:text-[32px] lg:text-[40px] font-semibold text-black mb-2 lg:mb-4 leading-[1.1] whitespace-pre-line text-center">
              {cards[selectedIndex].detail_title}
            </h3>
          )}

          {/* Detail Description */}
          {cards[selectedIndex].detail_description && (
            <p className="font-inter text-[16px] sm:text-[18px] lg:text-[24px] text-black/55 leading-[1.45] tracking-[-0.12px] mb-8 lg:mb-16 max-w-[800px] mx-auto text-center">
              {cards[selectedIndex].detail_description}
            </p>
          )}

          {/* Steps Container */}
          <div className="flex flex-col gap-12 lg:gap-24">
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
                      "flex flex-col lg:flex-row gap-6 lg:gap-12 items-start",
                      isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                    )}
                  >
                    {/* Lottie animations for all 3 steps of ALL use cases */}
                    {stepIndex === 0 ? (
                      <UseCaseLottieAnimation
                        key={`step1-${selectedIndex}`}
                        src="/animations/step1-config.json"
                        className="w-full lg:w-auto"
                      />
                    ) : stepIndex === 1 ? (
                      <UseCaseLottieAnimation
                        key={`step2-${selectedIndex}`}
                        src="/animations/step2-config.json"
                        className="w-full lg:w-auto"
                      />
                    ) : stepIndex === 2 ? (
                      <UseCaseLottieAnimation
                        key={`step3-${selectedIndex}`}
                        src="/animations/step3-config.json"
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
                      <div className="relative w-full lg:w-[523px] h-[280px] sm:h-[350px] lg:h-[558px] shrink-0 rounded-[10px] overflow-hidden">
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
                    <div className="flex flex-col gap-4 lg:gap-6 flex-1">
                      {/* Title */}
                      <h4 className="font-trap text-xl lg:text-2xl font-semibold text-black leading-[1.2]">
                        {step.step_title}
                      </h4>

                      {/* Description */}
                      {isFilled.richText(step.step_description) && (
                        <div className="font-inter text-base lg:text-lg text-black/70 leading-relaxed [&_p]:m-0 [&_p]:mb-1 [&_br]:block [&_br]:content-[''] [&_br]:mb-1">
                          <PrismicRichText field={step.step_description} />
                        </div>
                      )}

                      {/* Tags - Vertical layout with section titles above tags */}
                      <div className="flex flex-col gap-3 lg:gap-4 mt-1 lg:mt-2">
                        {/* Section 1 - Title above tags */}
                        {step.tags_section1_title && (
                          <p className="font-inter text-sm lg:text-base text-black/55 m-0">{step.tags_section1_title}</p>
                        )}
                        {step.tags_section1 && step.tags_section1.split(';').map((tag: string, idx: number) => (
                          <div key={`s1-${idx}`} className="inline-flex items-center gap-2 lg:gap-[10px] px-3 lg:px-4 py-1.5 lg:py-[7px] bg-[#F0F0F0] rounded-[5px]" style={{ width: 'fit-content' }}>
                            <div className="w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] rounded-full bg-[#F02C2C] shrink-0" />
                            <span className="font-mono text-[14px] lg:text-[18px] text-black leading-[1.2]">{tag.trim()}</span>
                          </div>
                        ))}

                        {/* Section 2 - Title above tags */}
                        {step.tags_section2_title && (
                          <p className="font-inter text-sm lg:text-base text-black/55 m-0 mt-1 lg:mt-2">{step.tags_section2_title}</p>
                        )}
                        {step.tags_section2 && step.tags_section2.split(';').map((tag: string, idx: number) => (
                          <div key={`s2-${idx}`} className="inline-flex items-center gap-2 lg:gap-[10px] px-3 lg:px-4 py-1.5 lg:py-[7px] bg-[#F0F0F0] rounded-[5px]" style={{ width: 'fit-content' }}>
                            <div className="w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] rounded-full bg-[#F02C2C] shrink-0" />
                            <span className="font-mono text-[14px] lg:text-[18px] text-black leading-[1.2]">{tag.trim()}</span>
                          </div>
                        ))}

                        {/* Section 3 - Title above tags */}
                        {step.tags_section3_title && (
                          <p className="font-inter text-sm lg:text-base text-black/55 m-0 mt-1 lg:mt-2">{step.tags_section3_title}</p>
                        )}
                        {step.tags_section3 && step.tags_section3.split(';').map((tag: string, idx: number) => (
                          <div key={`s3-${idx}`} className="inline-flex items-center gap-2 lg:gap-[10px] px-3 lg:px-4 py-1.5 lg:py-[7px] bg-[#F0F0F0] rounded-[5px]" style={{ width: 'fit-content' }}>
                            <div className="w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] rounded-full bg-[#F02C2C] shrink-0" />
                            <span className="font-mono text-[14px] lg:text-[18px] text-black leading-[1.2]">{tag.trim()}</span>
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

    </section>
  );
};

export default UseCaseCards;
