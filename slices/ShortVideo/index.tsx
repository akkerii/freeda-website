"use client";

import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ShortVideo`.
 */
export type ShortVideoProps = SliceComponentProps<Content.ShortVideoSlice>;

/**
 * Component for "ShortVideo" Slices.
 */
const ShortVideo: FC<ShortVideoProps> = ({ slice }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Reorder items so the active one is always first
  const reorderedItems = slice.primary.items ? [
    slice.primary.items[activeIndex],
    ...slice.primary.items.slice(0, activeIndex),
    ...slice.primary.items.slice(activeIndex + 1)
  ] : [];

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative w-full px-8 py-16">
      <div className="w-full max-w-[1250px] mx-auto">
        {/* Title */}
        <div className="flex flex-col font-['Trap:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[64px] text-black mb-[40px]">
          <h1 className="block leading-[1.1] whitespace-nowrap">{slice.primary.title}</h1>
        </div>

        {/* Cards Container */}
        <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
        {reorderedItems.map((item, displayIndex) => {
          const originalIndex = displayIndex === 0 ? activeIndex :
            displayIndex <= activeIndex ? displayIndex - 1 : displayIndex;

          return (
            <div
              key={originalIndex}
              onClick={() => setActiveIndex(originalIndex)}
              className={`content-stretch flex flex-col gap-[32px] items-start relative shrink-0 cursor-pointer transition-all duration-300 ${
                displayIndex === 0 ? "w-[524px]" : "max-w-[388px] min-w-[336px] w-[343px]"
              }`}
            >
            {/* Card Image */}
            <div
              className={`overflow-clip relative shrink-0 w-full transition-all duration-300 ${
                displayIndex === 0 ? "h-[698px]" : "aspect-[362.667/483]"
              }`}
            >
              <div className="absolute h-full left-0 overflow-clip rounded-[10px] top-0 w-full">
                {item.image.url ? (
                  <PrismicNextImage
                    field={item.image}
                    className="absolute inset-0 object-cover size-full"
                    fallbackAlt=""
                  />
                ) : (
                  <div className="absolute bg-[#202020] size-full" />
                )}
              </div>
            </div>

            {/* Card Text */}
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full">
              {/* Card Title */}
              <div className="flex flex-col font-['Trap:Semi_Bold',sans-serif] justify-center relative shrink-0 text-[24px] text-black w-full">
                <h5 className="block leading-[1.2]">{item.card_title}</h5>
              </div>

              {/* Card Description */}
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] w-full">
                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] mb-0 not-italic">Application</p>
                <PrismicRichText
                  field={item.application}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="leading-[normal] mb-0">{children}</p>
                    ),
                  }}
                />
                <p className="leading-[normal] mb-0">&nbsp;</p>
                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] mb-0 not-italic">Documents analysed</p>
                <PrismicRichText
                  field={item.documents}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="leading-[normal] mb-0">{children}</p>
                    ),
                  }}
                />
              </div>
            </div>
          </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default ShortVideo;
