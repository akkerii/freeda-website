"use client";

import type { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import FadeIn from "@/components/FadeIn";

export type WorkingWithFreedaProps =
  SliceComponentProps<Content.WorkingWithFreedaSlice>;

const WorkingWithFreeda = ({ slice }: WorkingWithFreedaProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full h-[480px] sm:h-[580px] md:h-[700px] lg:h-[780px] overflow-hidden"
    >
      {/* Background Video/Image - Only left side */}
      <FadeIn direction="right" className="absolute left-0 top-0 bottom-0 right-[300px] sm:right-[310px] md:right-[410px] lg:right-[490px] xl:right-[554px]">
        {slice.primary.background_image?.url ? (
          <img
            src={slice.primary.background_image.url}
            alt={slice.primary.background_image.alt || ""}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source src="/videos/working-with-freeda.mp4" type="video/mp4" />
          </video>
        )}
      </FadeIn>

      {/* Dark Content Box - Right Side (564px width, full height) */}
      <FadeIn direction="left" className="absolute right-0 top-0 bottom-0 w-full sm:w-[330px] md:w-[430px] lg:w-[510px] xl:w-[574px] bg-[#202020] rounded-l-[10px]">
        <div className="flex flex-col gap-8 items-start justify-center h-full w-full px-6 sm:px-8 md:px-10 lg:px-[66px]">
          {/* Title */}
          <h2 className="font-trap font-semibold leading-[110%] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] text-white m-0">
            Working
            <br />
            with Freeda
          </h2>

          {/* Description */}
          <p className="font-inter font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-white/65 leading-[145%] m-0 max-w-[432px]">
            {slice.primary.description ||
              "Freeda is designed for teams dealing with complex projects, multiple stakeholders and regulatory constraints. We don't just deliver analyses. We help structure how risk is managed at the design stage."}
          </p>

          {/* CTA Button */}
          {slice.primary.button_text && (
            <PrismicNextLink
              field={slice.primary.button_link}
              className="inline-flex items-center justify-center px-4 py-3 bg-[#F02C2C] rounded-[9px] font-mono text-[14px] sm:text-[16px] leading-[110%] text-white no-underline hover:opacity-90 transition-opacity"
            >
              {slice.primary.button_text}
            </PrismicNextLink>
          )}
        </div>
      </FadeIn>
    </section>
  );
};

export default WorkingWithFreeda;
