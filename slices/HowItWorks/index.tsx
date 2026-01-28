"use client";

import type { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import FadeIn from "@/components/FadeIn";

export type HowItWorksProps = SliceComponentProps<Content.HowItWorksSlice>;

const HowItWorks = ({ slice }: HowItWorksProps) => {
  // Detect layout based on number of items
  const isHorizontalLayout = slice.items.length === 3;
  const isGridLayout = slice.items.length === 4;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={isHorizontalLayout ? "bg-[#F2F2F2] w-full py-12 md:py-16 lg:py-20" : "bg-white w-full py-12 md:py-16 lg:py-20"}
    >
      <div className={`max-w-[1250px] mx-auto px-5 md:px-10 flex flex-col items-center ${isHorizontalLayout ? "gap-[56px]" : "gap-10 md:gap-12 lg:gap-16"}`}>
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col items-center gap-6 max-w-[900px]">
            {/* Title */}
            {slice.primary.title && (
              <h2 className="font-trap text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-semibold leading-[110%] text-black text-center m-0">
                {slice.primary.title}
              </h2>
            )}
            {/* Description */}
            {(slice.primary as any).description && (
              <p className="font-inter text-lg md:text-xl lg:text-[24px] text-black/65 leading-[145%] tracking-[-0.12px] text-center m-0 max-w-[554px]">
                {(slice.primary as any).description}
              </p>
            )}
          </div>
        </FadeIn>

        {/* Cards - Dynamic Layout */}
        {isHorizontalLayout ? (
          // Horizontal Layout for 3 items (Key Metrics style)
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 w-full">
            {slice.items.map((item, index) => (
              <FadeIn key={index} delay={100 + index * 100}>
                <article className="flex flex-col items-center gap-8 w-full max-w-[343px]">
                  {/* Icon Image */}
                  {item.icon?.url && (
                    <PrismicNextImage
                      field={item.icon}
                      className="w-[143px] h-[143px] object-contain"
                      fallbackAlt=""
                    />
                  )}

                  {/* Text Content */}
                  <div className="flex flex-col items-center gap-4">
                    {/* Step Title */}
                    {item.step_title && (
                      <h3 className="font-trap text-[24px] font-semibold leading-[120%] text-black text-center m-0">
                        {item.step_title}
                      </h3>
                    )}

                    {/* Description */}
                    {item.step_description && (
                      <p className="font-inter text-[18px] text-black/55 leading-normal text-center m-0">
                        {item.step_description}
                      </p>
                    )}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        ) : (
          // Grid Layout for 4 items (OUR METHOD style)
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-[1100px] auto-rows-fr">
            {slice.items.map((item, index) => (
              <FadeIn key={index} delay={100 + index * 100} className="h-full">
                <article className="relative w-full h-full min-h-[420px] bg-black/5 rounded-[10px] flex flex-col overflow-hidden">
                  {/* Text Content */}
                  <div className="flex flex-col gap-3 p-6 md:p-8 flex-1 mb-[130px]">
                    {/* Step Title */}
                    {item.step_title && (
                      <h3 className="font-trap text-xl md:text-2xl font-semibold leading-[1.2] tracking-[-0.48px] text-black m-0 max-w-[402px]">
                        {item.step_title}
                      </h3>
                    )}

                    {/* Description */}
                    {item.step_description && (
                      <p className="font-inter text-base md:text-lg font-medium text-black/55 leading-[145%] tracking-[-0.09px] m-0">
                        {item.step_description}
                      </p>
                    )}

                    {/* Bullet Points */}
                    {(item as any).bullet_points && (
                      <ul className="list-disc list-inside font-inter text-base md:text-lg font-normal text-black/55 leading-[145%] tracking-[-0.09px] m-0 mt-2 pl-2">
                        {(item as any).bullet_points.split('\n').map((point: string, idx: number) => (
                          point.trim() && (
                            <li key={idx} className="m-0">{point.trim()}</li>
                          )
                        ))}
                      </ul>
                    )}

                    {/* Red Dot */}
                    <div className="absolute right-4 md:right-[15px] top-4 md:top-[15px] w-[17px] h-[17px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <circle cx="8.5" cy="8.5" fill="#F02C2C" r="8.5" />
                      </svg>
                    </div>
                  </div>

                  {/* Icon at Bottom Left */}
                  {item.icon?.url && (
                    <div className="absolute bottom-0 left-0">
                      <PrismicNextImage
                        field={item.icon}
                        className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-contain"
                        fallbackAlt=""
                        style={{ filter: 'none' }}
                      />
                    </div>
                  )}
                </article>
              </FadeIn>
            ))}
          </div>
        )}

        {/* Button */}
        {slice.primary.button_text && (
          <FadeIn delay={500}>
            <PrismicNextLink
              field={slice.primary.button_link}
              className="inline-flex items-center justify-center px-4 py-3 border-2 border-black/15 rounded-[9px] font-mono text-[18px] leading-[145%] text-black hover:border-black/30 transition-colors"
            >
              {slice.primary.button_text}
            </PrismicNextLink>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default HowItWorks;
