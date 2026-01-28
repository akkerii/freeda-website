"use client";

import { FC, useState, useRef } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

/**
 * Props for `CaseStudyCards`.
 */
export type CaseStudyCardsProps =
  SliceComponentProps<Content.CaseStudyCardsSlice>;

// Icon components
const EditIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.8619 2.86191C17.6434 2.08045 18.9097 2.08045 19.6911 2.86191L21.1381 4.30896C21.9196 5.09042 21.9196 6.35675 21.1381 7.13821L9.41417 18.8621L4.58582 14.0338L16.3098 2.30991C16.3098 2.30991 16.8619 2.86191 16.8619 2.86191Z"
      fill="#F02C2C"
    />
    <path
      d="M2 22H8.49995L2 15.5V22Z"
      fill="#F02C2C"
    />
  </svg>
);

const LockIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
    <path
      d="M7 10V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10"
      fill="#F02C2C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 10H19C20.1046 10 21 10.8954 21 12V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V12C3 10.8954 3.89543 10 5 10ZM12 17C13.1046 17 14 16.1046 14 15C14 13.8954 13.1046 13 12 13C10.8954 13 10 13.8954 10 15C10 16.1046 10.8954 17 12 17Z"
      fill="#F02C2C"
    />
  </svg>
);

const FileIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4C4 2.89543 4.89543 2 6 2H14L20 8V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z"
      fill="#F02C2C"
    />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
      fill="#F02C2C"
    />
  </svg>
);

const getIcon = (iconType: string) => {
  switch (iconType) {
    case "lock":
      return <LockIcon />;
    case "file":
      return <FileIcon />;
    case "check":
      return <CheckIcon />;
    case "edit":
    default:
      return <EditIcon />;
  }
};

/**
 * Component for "CaseStudyCards" Slices.
 */
const CaseStudyCards: FC<CaseStudyCardsProps> = ({ slice }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const cards = slice.primary.cards as any[] || [];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);

  if (cards.length === 0) return null;

  const selectedCard = cards[selectedIndex] as any;

  const handleCardClick = (index: number, cardElement: HTMLButtonElement | null) => {
    setSelectedIndex(index);

    // Scroll the clicked card into view smoothly
    if (cardElement && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardRect = cardElement.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      // Check if card is partially hidden on the right
      if (cardRect.right > containerRect.right) {
        cardElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
      // Check if card is partially hidden on the left
      else if (cardRect.left < containerRect.left) {
        cardElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full py-16"
    >
      <div className="flex flex-col gap-6 items-start mx-auto max-w-[1500px] px-5 md:px-8 lg:px-[40px]">
        {/* Section Title */}
        {slice.primary.section_title && (
          <h1 className="font-heading text-[54px] font-semibold leading-[1.1] text-black m-0">
            {slice.primary.section_title}
          </h1>
        )}

        {/* Carousel Container - shows 2 cards + peek of third */}
        <div className="relative w-full">
          {/* Cards Container - Native horizontal scroll */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex gap-5 pr-[200px]">
              {cards.map((card: any, index: number) => {
                const isSelected = index === selectedIndex;

                return (
                  <div
                    key={index}
                    className="group flex flex-col items-start shrink-0 w-[380px] md:w-[450px] lg:w-[524px] text-left relative"
                  >
                    <button
                      ref={(el) => { cardRefs.current[index] = el; }}
                      onClick={(e) => handleCardClick(index, e.currentTarget)}
                      className="w-full cursor-pointer transition-opacity"
                    >
                      <div className="h-[560px] md:h-[650px] lg:h-[750px] relative shrink-0 w-full overflow-hidden">
                        {/* Main Card Container */}
                        <div className="absolute inset-0 overflow-hidden rounded-[10px]">
                          {/* Card Image */}
                          {isFilled.image(card.image) && (
                            <div className="absolute inset-0">
                              <PrismicNextImage
                                field={card.image}
                                fill
                                className="object-cover"
                                fallbackAlt=""
                              />
                            </div>
                          )}

                          {/* Read More button on image - for cards without Application section */}
                          {!(isSelected && card.show_details) && (
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                              <Link
                                href={card.link_slug ? `/case-study/${card.link_slug}` : '/case-study'}
                                className="inline-flex items-center justify-center px-6 py-3 bg-[#F02C2C] rounded-[9px] font-mono text-[16px] md:text-[18px] text-white no-underline hover:bg-[#d92626] transition-colors whitespace-nowrap"
                                onClick={(e) => e.stopPropagation()}
                              >
                                Read More
                              </Link>
                            </div>
                          )}

                          {/* Label Section (top-right overlay) */}
                          <div className="absolute bg-[#f2f2f2] h-[80px] md:h-[100px] right-0 overflow-hidden rounded-bl-[10px] rounded-tr-[10px] top-0 w-[160px] md:w-[200px]">
                            {/* Red Dot - always show */}
                            <div className="absolute left-1/2 -translate-x-1/2 w-[14px] md:w-[16px] h-[14px] md:h-[16px] top-[16px] md:top-[20px]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 16 16"
                              >
                                <circle cx="8" cy="8" fill="#F02C2C" r="8" />
                              </svg>
                            </div>

                            {/* Label Text */}
                            <div className="absolute flex flex-col font-mono justify-center leading-[1.2] left-1/2 -translate-x-1/2 text-[16px] md:text-[20px] text-black text-center top-[50px] md:top-[60px] w-[150px] md:w-[180px]">
                              <p className="m-0">{card.label}</p>
                            </div>
                          </div>

                          {/* Application Section (bottom overlay) - only show on selected card with details */}
                          {isSelected && card.show_details && (
                            <div className="absolute bottom-0 left-0 w-full bg-[#f2f2f2] rounded-b-[10px] overflow-hidden">
                              <div className="flex flex-col gap-4 p-6 md:p-8">
                                {/* Application Text */}
                                {card.application_description && (
                                  <div className="flex flex-col font-inter text-[16px] md:text-[18px] text-[rgba(0,0,0,0.55)]">
                                    <p className="font-bold mb-2 text-black">Application</p>
                                    <p className="font-normal mb-0 leading-[1.6]">
                                      {card.application_description}
                                    </p>
                                  </div>
                                )}

                                {/* Document Tags */}
                                {card.document_tags && card.document_tags.length > 0 && (
                                  <div className="flex flex-col gap-3">
                                    <p className="font-inter font-bold text-[16px] md:text-[18px] text-black m-0">Document analysed</p>
                                    <div className="flex flex-col gap-2 md:gap-3">
                                      {card.document_tags.map((tag: any, tagIndex: number) => (
                                        <div
                                          key={tagIndex}
                                          className="bg-white flex gap-[10px] items-center px-3 md:px-4 py-2 rounded-[5px] w-fit"
                                        >
                                          <div className="shrink-0 w-5 h-5 md:w-6 md:h-6">
                                            {getIcon(tag.icon_type)}
                                          </div>
                                          <p className="font-mono text-[16px] md:text-[18px] text-[rgba(0,0,0,0.55)] m-0 whitespace-nowrap leading-normal">
                                            {tag.tag_text}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Read More button - always visible when details are shown */}
                                <div className="mt-2">
                                  <Link
                                    href={card.link_slug ? `/case-study/${card.link_slug}` : '/case-study'}
                                    className="inline-flex items-center justify-center px-6 py-3 bg-[#F02C2C] rounded-[9px] font-mono text-[16px] md:text-[18px] text-white no-underline hover:bg-[#d92626] transition-colors whitespace-nowrap"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    Read More
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Details Section - Hero and Content sections shown below cards for selected card - HIDDEN FOR NOW (uncomment to re-enable) */}
        {false && selectedCard && selectedCard.show_details && (
          <div className="w-full flex flex-col gap-16">

            {/* Hero Section (sec1) */}
            <div className="w-full bg-white py-16 rounded-[10px]">
              <div className="content-stretch flex flex-col gap-[40px] items-center relative w-full px-5">
                {/* Logo */}
                {isFilled.image(selectedCard.logo) && (
                  <div className="h-[36px] relative shrink-0 w-[137.25px]">
                    <PrismicNextImage
                      field={selectedCard.logo}
                      className="object-contain"
                      fallbackAlt=""
                    />
                  </div>
                )}

                <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
                  {/* Title and Description */}
                  <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
                    {/* Heading */}
                    {isFilled.richText(selectedCard.hero_heading) && (
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                        <div className="flex flex-col font-trap font-semibold justify-center leading-[1.1] not-italic relative shrink-0 text-[50px] text-black text-center max-w-[1064px]">
                          <PrismicRichText
                            field={selectedCard.hero_heading}
                            components={{
                              heading1: ({ children }) => (
                                <h1 className="block mb-0">{children}</h1>
                              ),
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    {isFilled.richText(selectedCard.hero_description) && (
                      <div className="flex flex-col font-inter font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.65)] text-center tracking-[-0.09px] max-w-[705px]">
                        <PrismicRichText
                          field={selectedCard.hero_description}
                          components={{
                            paragraph: ({ children }) => (
                              <p className="leading-[1.45] m-0">{children}</p>
                            ),
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Images Composition */}
                  <div className="h-[656px] relative shrink-0 w-full max-w-[977px]">
                    {/* Background image - right side */}
                    {isFilled.image(selectedCard.background_image) && (
                      <div className="absolute h-[656px] left-[453px] rounded-[10px] top-0 w-[524px]">
                        <PrismicNextImage
                          field={selectedCard.background_image}
                          fill
                          className="object-cover rounded-[10px]"
                          fallbackAlt=""
                        />
                      </div>
                    )}

                    {/* Foreground image - center */}
                    {isFilled.image(selectedCard.foreground_image) && (
                      <div className="absolute h-[528px] left-[177px] rounded-[10px] top-[73px] w-[425px]">
                        <PrismicNextImage
                          field={selectedCard.foreground_image}
                          fill
                          className="object-cover rounded-[10px]"
                          fallbackAlt=""
                        />
                      </div>
                    )}

                    {/* Metrics Card */}
                    {selectedCard.show_metrics && (
                      <article className="absolute bg-[#ededed] content-stretch flex flex-col h-[184px] items-start left-0 overflow-clip p-0 rounded-[10px] top-[273px] w-[353px]">
                        <div className="relative shrink-0 w-full">
                          <div className="content-stretch flex flex-col font-mono gap-[8px] items-start leading-[0] not-italic p-[32px] relative text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
                            {/* Annual ROI */}
                            {selectedCard.annual_roi && (
                              <div className="flex flex-col justify-center relative shrink-0 w-full">
                                <p className="leading-[1.45] m-0">
                                  <span className="font-trap font-semibold not-italic">Annual ROI:</span>
                                  <span>{` ${selectedCard.annual_roi}`}</span>
                                </p>
                              </div>
                            )}

                            {/* Productivity gains */}
                            {selectedCard.productivity_gains && (
                              <div className="flex flex-col justify-center relative shrink-0 w-full">
                                <p className="leading-[1.45] m-0">
                                  <span className="font-trap font-semibold not-italic">Productivity gains:</span>
                                  <span>{` ${selectedCard.productivity_gains}`}</span>
                                </p>
                              </div>
                            )}

                            {/* Cities */}
                            {selectedCard.cities && (
                              <div className="flex flex-col justify-center relative shrink-0 w-full">
                                <p className="leading-[1.45] m-0">
                                  <span className="font-trap font-semibold not-italic">Cities:</span>
                                  <span>{` ${selectedCard.cities}`}</span>
                                </p>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Red dot indicator */}
                        <div className="absolute left-[321px] size-[17px] top-[17px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                            <circle cx="8.5" cy="8.5" fill="#F02C2C" r="8.5" />
                          </svg>
                        </div>
                      </article>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Details Section (sec2) */}
            <div className="w-full bg-white py-16 rounded-[10px]">
              <div className="content-stretch flex flex-col gap-[72px] items-center relative w-full px-5">
                {/* Title Section */}
                <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full max-w-[1087px]">
                  {/* Content Title */}
                  {isFilled.richText(selectedCard.content_title) && (
                    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                      <div className="flex flex-col font-trap font-semibold justify-center leading-[1.1] not-italic relative shrink-0 text-[50px] text-black text-center tracking-[-1.25px] max-w-[1064px]">
                        <PrismicRichText
                          field={selectedCard.content_title}
                          components={{
                            heading1: ({ children }) => (
                              <h1 className="block mb-0">{children}</h1>
                            ),
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Content Description */}
                  {isFilled.richText(selectedCard.content_description) && (
                    <div className="flex flex-col font-inter font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.65)] text-center tracking-[-0.09px] max-w-[705px]">
                      <PrismicRichText
                        field={selectedCard.content_description}
                        components={{
                          paragraph: ({ children }) => (
                            <p className="leading-[1.45] m-0">{children}</p>
                          ),
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Content Sections - Alternating layout */}
                {selectedCard.content_sections?.map((section: any, index: number) => {
                  const isImageLeft = section.image_position === "left";

                  return (
                    <div
                      key={index}
                      className="flex flex-col lg:flex-row h-auto items-stretch gap-8 lg:gap-[60px] w-full"
                    >
                      {/* Image Container */}
                      <div
                        className={`h-[400px] lg:h-[560px] overflow-clip relative rounded-[10px] w-full lg:w-[40%] lg:shrink-0 ${
                          isImageLeft ? "order-1" : "order-1 lg:order-2"
                        }`}
                      >
                        {isFilled.image(section.image) ? (
                          <PrismicNextImage
                            field={section.image}
                            fill
                            className="object-cover rounded-[10px]"
                            fallbackAlt=""
                          />
                        ) : (
                          <div
                            aria-label="Product detail"
                            className="absolute bg-[#ededed] inset-0 rounded-[10px]"
                          />
                        )}
                      </div>

                      {/* Text Container */}
                      <div
                        className={`flex flex-col justify-center w-full lg:flex-1 ${
                          isImageLeft ? "order-2 lg:pl-[40px]" : "order-2 lg:order-1 lg:pr-[40px]"
                        }`}
                      >
                        <div className="flex flex-col gap-[24px] items-start w-full">
                          {/* Section Heading */}
                          {isFilled.richText(section.heading) && (
                            <div className="flex flex-col font-trap font-semibold leading-[1.2] text-[36px] text-black w-full">
                              <PrismicRichText
                                field={section.heading}
                                components={{
                                  heading2: ({ children }) => (
                                    <h2 className="block mb-0">{children}</h2>
                                  ),
                                }}
                              />
                            </div>
                          )}

                          {/* Body Text */}
                          {isFilled.richText(section.body_text) && (
                            <div className="flex flex-col font-inter font-normal leading-[1.5] text-[24px] text-[rgba(0,0,0,0.55)] tracking-[-0.12px] w-full">
                              <PrismicRichText
                                field={section.body_text}
                                components={{
                                  paragraph: ({ children }) => (
                                    <p className="mb-0">{children}</p>
                                  ),
                                  strong: ({ children }) => (
                                    <span className="font-inter font-bold">
                                      {children}
                                    </span>
                                  ),
                                  em: ({ children }) => (
                                    <span className="font-inter italic">{children}</span>
                                  ),
                                }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudyCards;
