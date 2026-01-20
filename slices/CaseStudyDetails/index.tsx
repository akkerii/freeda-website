import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";


// Red dot helper for badges
function RedDot() {
  return (
    <div className="relative shrink-0 size-[8px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <circle cx="4" cy="4" fill="#F02C2C" r="4" />
      </svg>
    </div>
  );
}

// Badge/Tag component with red dot
function Badge({ text }: { text: string }) {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[16px] py-[7px] relative rounded-[5px] shrink-0">
      <RedDot />
      <p className="font-['Space_Mono',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[18px] text-black text-nowrap">
        {text}
      </p>
    </div>
  );
}

// Red circle with step number
function StepNumberBadge({ stepNumber }: { stepNumber: number }) {
  return (
    <div className="absolute left-[27px] top-[26px] size-[76px]">
      {/* Red circle background */}
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
        <circle cx="38" cy="38" fill="#F02C2C" r="38" />
      </svg>
      {/* White number centered */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <span className="font-['Inter',sans-serif] text-[32px] font-semibold text-white italic">
          {stepNumber}
        </span>
      </div>
    </div>
  );
}

/**
 * Props for `CaseStudyDetails`.
 */
export type CaseStudyDetailsProps =
  SliceComponentProps<Content.CaseStudyDetailsSlice>;

/**
 * Component for "CaseStudyDetails" Slices.
 * Alternating image/text sections for case study details
 */
const CaseStudyDetails: FC<CaseStudyDetailsProps> = ({ slice }) => {
  const primary = slice.primary as any;
  const sections = primary.sections || [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-16 md:py-20"
    >
      <div className="content-stretch flex flex-col gap-[72px] items-center relative w-full px-5">
        {/* Title Section */}
        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full max-w-[1087px] px-4 lg:px-0">
          {/* Section Title - Montserrat 50px, leading 1.1, centered */}
          {isFilled.richText(primary.section_title) && (
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
              <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[1.1] not-italic relative shrink-0 text-[32px] md:text-[40px] lg:text-[50px] text-black text-center w-full lg:w-[1064px]">
                <PrismicRichText
                  field={primary.section_title}
                  components={{
                    heading1: ({ children }) => (
                      <h1 className="block mb-0">{children}</h1>
                    ),
                  }}
                />
              </div>
            </div>
          )}

          {/* Section Description - Inter 18px, tracking -0.09px, centered */}
          {isFilled.richText(primary.section_description) && (
            <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] md:text-[18px] text-[rgba(0,0,0,0.65)] text-center tracking-[-0.09px] w-full max-w-[705px]">
              <PrismicRichText
                field={primary.section_description}
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
        {sections.map((section: any, index: number) => {
          const isImageLeft = section.image_position === "left" || index % 2 === 0;
          const stepNumber = index + 1;

          return (
            <div
              key={index}
              className="content-stretch flex flex-col lg:flex-row h-auto lg:h-[560px] items-center justify-between gap-8 lg:gap-0 relative shrink-0 w-full max-w-[1200px]"
            >
              {/* Image Container - 523x560px with red icon badge */}
              <div
                className={`h-[400px] lg:h-[560px] overflow-clip relative rounded-[10px] shrink-0 w-full lg:w-[523px] ${
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
                    className="absolute bg-[#f5f5f5] inset-0 rounded-[10px]"
                  />
                )}

                {/* Red circle with step number - only on image when image is on right */}
                {!isImageLeft && <StepNumberBadge stepNumber={stepNumber} />}
              </div>

              {/* Text Container - 614px width */}
              <div
                className={`content-stretch flex flex-col items-start relative shrink-0 w-full lg:w-[614px] ${
                  isImageLeft ? "order-2" : "order-2 lg:order-1"
                } ${isImageLeft ? "gap-[24px]" : ""}`}
              >
                {/* Step Number Badge - above text for image-left layout */}
                {isImageLeft && (
                  <div className="relative size-[76px] shrink-0">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
                      <circle cx="38" cy="38" fill="#F02C2C" r="38" />
                    </svg>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                      <span className="font-['Inter',sans-serif] text-[32px] font-semibold text-white italic">
                        {stepNumber}
                      </span>
                    </div>
                  </div>
                )}

                {/* Content wrapper with gap-[24px] */}
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                  {/* Section Heading - Montserrat 36px, leading 1.2 */}
                  {isFilled.richText(section.heading) && (
                    <div className="flex flex-col font-['Montserrat',sans-serif] justify-center leading-[1.2] min-w-full not-italic relative shrink-0 text-[36px] text-black w-[min-content]">
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

                  {/* Body Text - Inter 18px, tracking -0.09px/-0.12px */}
                  {isFilled.richText(section.body_text) && (
                    <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[normal] min-w-full not-italic relative shrink-0 text-[0px] text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-[min-content]">
                      <PrismicRichText
                        field={section.body_text}
                        components={{
                          paragraph: ({ children }) => (
                            <p className="mb-0">{children}</p>
                          ),
                          strong: ({ children }) => (
                            <span className="font-['Inter',sans-serif] font-bold not-italic">
                              {children}
                            </span>
                          ),
                        }}
                      />
                    </div>
                  )}

                  {/* Badge Buttons - for steps 2 & 3 (inside gap-[24px] container) - vertical stack */}
                  {!isImageLeft && section.badges && section.badges.length > 0 && (
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                      {section.badges.map((badge: any, badgeIndex: number) => (
                        <Badge key={badgeIndex} text={badge.text || badge} />
                      ))}
                    </div>
                  )}
                </div>

                {/* Badge Buttons separate container - for step 1 (outside, gap-[32px] from text) - horizontal wrap */}
                {isImageLeft && section.badges && section.badges.length > 0 && (
                  <div className="flex flex-row flex-wrap gap-[12px] items-start relative shrink-0 w-full">
                    {section.badges.map((badge: any, badgeIndex: number) => (
                      <Badge key={badgeIndex} text={badge.text || badge} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CaseStudyDetails;
