import { FC } from "react";
import { SliceComponentProps, PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ConstructionExpertise`.
 */
export type ConstructionExpertiseProps = SliceComponentProps<any>;

/**
 * Component for "ConstructionExpertise" Slices.
 */
const ConstructionExpertise: FC<ConstructionExpertiseProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white w-full py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-[1250px] mx-auto px-5 md:px-10 flex flex-col gap-8 md:gap-10 lg:gap-12 items-center">
        {/* Title */}
        {slice.primary.title && (
          <h1 className="font-trap text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[1.1] tracking-[-1.28px] text-black text-center w-full m-0 whitespace-pre-wrap">
            <PrismicText field={slice.primary.title} />
          </h1>
        )}

        {/* Subtitle */}
        {slice.primary.subtitle && (
          <div className="font-inter text-base md:text-xl lg:text-[24px] font-normal leading-[145%] tracking-[-0.12px] text-[rgba(0,0,0,0.65)] text-center max-w-[888px] [&_strong]:font-semibold [&_p]:m-0">
            <PrismicRichText field={slice.primary.subtitle} />
          </div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {slice.primary.cards?.map((item: any, index: number) => (
            <div
              key={index}
              className="flex flex-col gap-6 md:gap-8 items-start relative rounded-[8px]"
            >
              {/* Card Image with Red Dot */}
              <div className="relative w-full">
                {item.card_image?.url && (
                  <div className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[456px] relative rounded-[10px] w-full overflow-hidden">
                    <PrismicNextImage
                      field={item.card_image}
                      className="absolute inset-0 w-full h-full object-cover rounded-[10px]"
                      imgixParams={{ sat: -100 }}
                      fallbackAlt=""
                    />
                  </div>
                )}

                {/* Red Dot - positioned at top-right */}
                <div className="absolute top-4 right-4 md:top-[22px] md:right-[22px] w-[17px] h-[17px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 17 17"
                  >
                    <circle cx="8.5" cy="8.5" fill="#F02C2C" r="8.5" />
                  </svg>
                </div>
              </div>

              {/* Card Title */}
              {item.card_title && (
                <h5 className="font-trap text-xl md:text-2xl font-semibold leading-[1.2] tracking-[-0.48px] text-black text-center w-full m-0">
                  {item.card_title}
                </h5>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        {slice.primary.bottom_text && (
          <p className="font-inter text-base md:text-xl lg:text-[24px] font-normal leading-[145%] tracking-[-0.12px] text-[rgba(0,0,0,0.65)] text-center max-w-[853px] m-0">
            {slice.primary.bottom_text}
          </p>
        )}
      </div>
    </section>
  );
};

export default ConstructionExpertise;
