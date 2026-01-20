import { FC } from "react";
import { SliceComponentProps } from "@prismicio/react";

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
      className="bg-white flex flex-col gap-[56px] items-center px-[64px] pt-0 pb-[80px] w-full"
    >
      <div className="flex flex-col gap-[56px] items-center w-full">
        <div className="flex flex-col gap-[24px] items-center w-full">
          {/* Title */}
          {slice.primary.title && (
            <h1 className="font-heading text-[64px] font-semibold leading-[1.1] tracking-[-1.28px] text-[#202020] text-center w-[740px] m-0">
              {slice.primary.title}
            </h1>
          )}

          {/* Subtitle */}
          {slice.primary.subtitle && (
            <p className="font-sans text-[18px] font-normal leading-[145%] tracking-[-0.09px] text-[#202020] text-center w-[705px] m-0">
              {slice.primary.subtitle}
            </p>
          )}
        </div>

        {/* Technology Cards */}
        <div className="flex gap-[47px] items-stretch">
          {slice.primary.cards.map((card: any, index: number) => (
            <article
              key={index}
              className="bg-black/5 flex flex-col items-start overflow-hidden p-0 rounded-[10px] w-[277px] min-h-[160px] shrink-0 relative"
            >
              {/* Card Content */}
              <div className="flex flex-col gap-[8px] items-start p-[32px] w-full relative">
                <h5 className="font-heading text-[24px] font-semibold leading-[1.2] tracking-[-0.48px] text-black m-0 whitespace-pre-line">
                  {card.card_text}
                </h5>

                {/* Red Dot */}
                <div className="absolute left-[245px] top-[23px] w-[17px] h-[17px]">
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
    </section>
  );
};

export default TechnologyCards;
