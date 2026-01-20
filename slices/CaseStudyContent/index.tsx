// @ts-nocheck
"use client";

import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import FadeIn from "@/components/FadeIn";

export type CaseStudyContentProps =
  SliceComponentProps<Content.CaseStudyContentSlice>;

const CaseStudyContent: FC<CaseStudyContentProps> = ({ slice }) => {
  const primary = slice.primary as any;
  const sections = primary.sections || [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white py-12 md:py-16 lg:py-20"
    >
      {/* Consistent with other slices: max-w-[1250px] px-5 md:px-10 */}
      <div className="w-full max-w-[1250px] mx-auto px-5 md:px-10">
        {/* Content sections with 111px gap between them */}
        <div className="flex flex-col gap-[111px]">
          {sections.map((section: any, index: number) => {
            const sectionType = section.section_type || "text_with_heading";
            // Check if image exists and has url
            const hasImage = section.image && (section.image.url || isFilled.image(section.image));

            // Image only section - Figma: full width, height 560px, radius 10px
            if (sectionType === "image" && hasImage) {
              return (
                <FadeIn key={index} delay={index * 100}>
                  <div className="w-full h-[400px] md:h-[500px] lg:h-[560px] rounded-[10px] overflow-hidden">
                    <PrismicNextImage
                      field={section.image}
                      className="w-full h-full object-cover"
                      fallbackAlt=""
                    />
                  </div>
                </FadeIn>
              );
            }

            // Text with heading section
            // Figma: Heading = Trap 36px SemiBold, line-height 120% (43.2px)
            // Figma: Body = Inter 24px Regular, line-height intrinsic (~29px), letter-spacing -0.12px, black/55%
            // Figma: Gap between heading and body = 24px
            if (sectionType === "text_with_heading") {
              return (
                <FadeIn key={index} delay={index * 100}>
                  <div className="flex flex-col gap-[24px]">
                    {/* Heading - Figma: Trap 36px SemiBold, line-height 43.2px */}
                    {section.heading && (
                      <h2 className="font-trap text-[36px] font-semibold leading-[43.2px] text-black">
                        {section.heading}
                      </h2>
                    )}

                    {/* Body Text - Figma: Inter 24px, line-height 29px, letter-spacing -0.12px, black/55% */}
                    {isFilled.richText(section.body_text) && (
                      <div className="font-inter text-[24px] text-black/55 leading-[29px] tracking-[-0.12px]">
                        <PrismicRichText
                          field={section.body_text}
                          components={{
                            paragraph: ({ children }) => (
                              <p className="mb-0">{children}</p>
                            ),
                            strong: ({ children }) => (
                              <strong className="font-bold text-black">
                                {children}
                              </strong>
                            ),
                          }}
                        />
                      </div>
                    )}

                    {/* Section Image - Figma: full width, height 560px, radius 10px */}
                    {hasImage && (
                      <div className="w-full h-[400px] md:h-[500px] lg:h-[560px] rounded-[10px] overflow-hidden mt-[24px]">
                        <PrismicNextImage
                          field={section.image}
                          className="w-full h-full object-cover"
                          fallbackAlt=""
                        />
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            }

            // Text only section (no heading)
            // Figma: Body = Inter 24px Regular, line-height 29px, letter-spacing -0.12px, black/55%
            if (sectionType === "text_only") {
              return (
                <FadeIn key={index} delay={index * 100}>
                  <div className="flex flex-col gap-[24px]">
                    {/* Body Text - Figma: Inter 24px, line-height 29px, letter-spacing -0.12px, black/55% */}
                    {isFilled.richText(section.body_text) && (
                      <div className="font-inter text-[24px] text-black/55 leading-[29px] tracking-[-0.12px]">
                        <PrismicRichText
                          field={section.body_text}
                          components={{
                            paragraph: ({ children }) => (
                              <p className="mb-0">{children}</p>
                            ),
                            strong: ({ children }) => (
                              <strong className="font-bold text-black">
                                {children}
                              </strong>
                            ),
                          }}
                        />
                      </div>
                    )}

                    {/* Section Image - Figma: full width, height 560px, radius 10px */}
                    {hasImage && (
                      <div className="w-full h-[400px] md:h-[500px] lg:h-[560px] rounded-[10px] overflow-hidden">
                        <PrismicNextImage
                          field={section.image}
                          className="w-full h-full object-cover"
                          fallbackAlt=""
                        />
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyContent;
