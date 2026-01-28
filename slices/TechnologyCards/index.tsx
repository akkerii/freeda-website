import { FC } from "react";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `TechnologyCards`.
 */
export type TechnologyCardsProps = SliceComponentProps<any>;

/**
 * Component for "TechnologyCards" Slices.
 */
const TechnologyCards: FC<TechnologyCardsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white w-full pt-12 md:pt-16 lg:pt-20 pb-4 md:pb-5 lg:pb-6"
    >
      <div className="max-w-[1250px] mx-auto px-5 md:px-10">
        <div className="flex flex-col gap-10 md:gap-14 items-center w-full">
          <div className="flex flex-col gap-6 items-center w-full">
            {/* Title */}
            {slice.primary.title && (
              <h1 className="font-trap text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[1.1] tracking-[-1.28px] text-[#202020] text-center max-w-[740px] m-0">
                {slice.primary.title}
              </h1>
            )}

            {/* Subtitle */}
            {slice.primary.subtitle && (
              <p className="font-inter text-base md:text-lg font-normal leading-[145%] tracking-[-0.09px] text-[#202020] text-center max-w-[705px] m-0">
                {slice.primary.subtitle}
              </p>
            )}
          </div>

          {/* Technology Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
            {slice.primary.cards?.map((card: any, index: number) => (
              <article
                key={index}
                className="bg-black/5 flex flex-col items-start overflow-hidden rounded-[10px] min-h-[180px] md:min-h-[200px] relative"
              >
                {/* Card Content */}
                <div className="flex flex-col gap-3 items-start p-6 md:p-8 w-full relative">
                  {/* Icon from Prismic */}
                  {card.icon?.url && (
                    <div className="w-[56px] h-[56px] mb-1">
                      <PrismicNextImage
                        field={card.icon}
                        className="w-full h-full object-contain"
                        fallbackAlt=""
                      />
                    </div>
                  )}

                  <h5 className="font-trap text-xl md:text-2xl font-semibold leading-[1.2] tracking-[-0.48px] text-black m-0 whitespace-pre-line pr-6">
                    {card.card_text}
                  </h5>

                  {/* Red Dot */}
                  <div className="absolute right-4 md:right-6 top-4 md:top-6 w-[17px] h-[17px]">
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
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyCards;
