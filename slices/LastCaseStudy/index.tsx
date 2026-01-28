"use client";

import { FC, useState, useEffect } from "react";
import { isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "@/prismicio";
import Link from "next/link";

// Icon components
const EditIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.8619 2.86191C17.6434 2.08045 18.9097 2.08045 19.6911 2.86191L21.1381 4.30896C21.9196 5.09042 21.9196 6.35675 21.1381 7.13821L9.41417 18.8621L4.58582 14.0338L16.3098 2.30991C16.3098 2.30991 16.8619 2.86191 16.8619 2.86191Z"
      fill="#F02C2C"
    />
    <path d="M2 22H8.49995L2 15.5V22Z" fill="#F02C2C" />
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
 * Props for `LastCaseStudy`.
 */
export type LastCaseStudyProps = SliceComponentProps<any>;

/**
 * Component for "LastCaseStudy" Slices.
 * Fetches case study cards from a linked case study page.
 */
const LastCaseStudy: FC<LastCaseStudyProps> = ({ slice }) => {
  const [caseStudyCards, setCaseStudyCards] = useState<any[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      // Fetch the case study page with its slices
      if (isFilled.contentRelationship(slice.primary.case_study_page)) {
        const client = createClient();
        try {
          const caseStudyPage = await client.getByID(
            slice.primary.case_study_page.id,
            {
              fetchLinks: [],
            }
          );

          // Find the CaseStudyCards slice in the page
          const caseStudyCardsSlice = caseStudyPage.data.slices?.find(
            (s: any) => s.slice_type === "case_study_cards"
          );

          // Extract the cards from the slice primary.cards
          if (caseStudyCardsSlice && caseStudyCardsSlice.primary?.cards) {
            setCaseStudyCards(caseStudyCardsSlice.primary.cards);
          }
        } catch (error) {
          console.error("Error fetching case study page:", error);
        }
      }
    };

    fetchCaseStudies();
  }, [slice.primary.case_study_page]);

  if (caseStudyCards.length === 0) return null;

  const handleCardClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-[1250px] mx-auto px-5 md:px-10">
        {/* Section Title */}
        {slice.primary.title && (
          <h2 className="font-trap text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-semibold text-black mb-6 leading-[1.1]">
            {slice.primary.title}
          </h2>
        )}

        {/* Carousel Container */}
        <div className="relative w-full">
          {/* Cards Container - Native horizontal scroll */}
          <div
            className="overflow-x-auto scrollbar-hide pb-4 -mx-5 md:-mx-10 px-5 md:px-10"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex gap-4 md:gap-5">
              {caseStudyCards.map((card: any, index: number) => {
                const isSelected = index === selectedIndex;

                return (
                  <button
                    key={index}
                    onClick={() => handleCardClick(index)}
                    className="flex flex-col items-start shrink-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    <div className="h-[380px] sm:h-[450px] md:h-[520px] lg:h-[560px] relative shrink-0 w-full overflow-hidden">
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

                        {/* Label Section (top-right overlay) */}
                        <div className="absolute bg-[#f2f2f2] h-[70px] sm:h-[80px] md:h-[90px] lg:h-[100px] right-0 overflow-hidden rounded-bl-[10px] rounded-tr-[10px] top-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]">
                          {/* Red Dot - always show */}
                          <div className="absolute left-1/2 -translate-x-1/2 w-[12px] md:w-[16px] h-[12px] md:h-[16px] top-3 md:top-[20px]">
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
                          <div className="absolute flex flex-col font-mono justify-center leading-[1.2] left-1/2 text-sm md:text-lg lg:text-[20px] text-black text-center top-[55%] md:top-[60%] -translate-x-1/2 -translate-y-1/2 w-full px-2">
                            <p className="m-0">{card.label}</p>
                          </div>
                        </div>

                        {/* Application Section (bottom overlay) - only show on selected card */}
                        {isSelected && (
                          <div className="absolute bottom-0 left-0 w-full bg-[#f2f2f2] rounded-b-[10px] overflow-hidden">
                            <div className="flex flex-col gap-3 md:gap-4 p-4 md:p-6 lg:p-8">
                              {/* Application Text */}
                              {card.application_description && (
                                <div className="flex flex-col font-inter text-sm md:text-base lg:text-[18px] text-[rgba(0,0,0,0.55)]">
                                  <p className="font-bold mb-1 md:mb-2 text-black">
                                    Application
                                  </p>
                                  <p className="font-normal mb-0 leading-[1.6]">
                                    {card.application_description}
                                  </p>
                                </div>
                              )}

                              {/* Document Tags */}
                              {card.document_tags &&
                                card.document_tags.length > 0 && (
                                  <div className="flex flex-col gap-2 md:gap-3">
                                    <p className="font-inter font-bold text-sm md:text-base lg:text-[18px] text-black m-0">
                                      Document analysed
                                    </p>
                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                      {card.document_tags.map(
                                        (tag: any, tagIndex: number) => (
                                          <div
                                            key={tagIndex}
                                            className="bg-white flex gap-2 items-center px-2 md:px-4 py-1 md:py-2 rounded-[5px]"
                                          >
                                            <div className="shrink-0 w-4 h-4 md:w-6 md:h-6">
                                              {getIcon(tag.icon_type)}
                                            </div>
                                            <p className="font-mono text-xs md:text-sm lg:text-[18px] text-[rgba(0,0,0,0.55)] m-0 whitespace-nowrap leading-normal">
                                              {tag.tag_text}
                                            </p>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                )}

                              {/* Read More button */}
                              <div className="mt-2">
                                <Link
                                  href={card.link_slug ? `/case-study/${card.link_slug}` : '/case-study'}
                                  className="inline-flex items-center justify-center px-6 py-3 bg-[#F02C2C] rounded-[9px] font-mono text-[14px] md:text-[16px] lg:text-[18px] text-white no-underline hover:bg-[#d92626] transition-colors whitespace-nowrap"
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastCaseStudy;
