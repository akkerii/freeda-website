// @ts-nocheck
import type { FeaturesSlice } from "@/prismicio-types";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type FeaturesProps = SliceComponentProps<FeaturesSlice>;

const Features = ({ slice }: FeaturesProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative bg-white py-10 md:py-14"
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-[1250px] mx-auto px-5 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 md:gap-8 mb-10 md:mb-14">
          {slice.primary.title && (
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] text-black text-center max-w-[884px] m-0 whitespace-pre-line">
              {slice.primary.title}
            </h2>
          )}
          {slice.primary.description && (
            <div className="text-sm sm:text-base md:text-lg text-black/65 leading-[1.45] tracking-[-0.09px] text-center max-w-[705px] [&_p]:m-0">
              <PrismicRichText field={slice.primary.description} />
            </div>
          )}
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 xl:gap-[111px]">
          {/* Left - Image Section */}
          <div className="relative w-full max-w-[706px] h-[300px] sm:h-[400px] lg:h-[525px] rounded-[10px] overflow-visible shrink-0">
            {/* Background */}
            <div className="absolute inset-0 bg-[#F2F2F2] rounded-[10px]" />

            {/* Decorative Images */}
            <div className="absolute left-[3%] top-[18%] w-[51%] max-w-[356px] aspect-[356/370] -rotate-[23deg] z-[1]">
              <PrismicNextImage
                field={slice.primary.document_image_1}
                className="w-full h-full object-cover rounded-lg"
                fallbackAlt=""
              />
            </div>
            <div className="absolute left-[49%] top-[11%] w-[48%] max-w-[339px] aspect-[339/398] rotate-[14deg] z-[2]">
              <PrismicNextImage
                field={slice.primary.document_image_2}
                className="w-full h-full object-cover rounded-lg"
                fallbackAlt=""
              />
            </div>

            {/* Red Circle */}
            <div className="absolute left-[45%] top-[53%] w-[40px] sm:w-[50px] lg:w-[65px] aspect-square rounded-full bg-[#F02C2C] z-[3]" />
          </div>

          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block w-[2px] h-[278px] bg-gradient-to-b from-[#EC0606] to-white/10 shrink-0" />

          {/* Right - Content */}
          <div className="w-full lg:w-[433px] flex flex-col gap-8 lg:gap-10 shrink-0">
            {/* Main Feature */}
            <div className="flex flex-col gap-4 md:gap-6">
              {slice.primary.main_feature_title && (
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold leading-[1.2] tracking-[-2px] text-black m-0 whitespace-pre-line">
                  {slice.primary.main_feature_title}
                </h3>
              )}
              {slice.primary.main_feature_description && (
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/55 tracking-[-0.12px] [&_p]:m-0">
                  <PrismicRichText field={slice.primary.main_feature_description} />
                </div>
              )}
            </div>

            {/* Secondary Features */}
            {slice.items.map((item, index) => (
              <h4
                key={index}
                className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold leading-[1.2] text-[#8B9187] m-0"
              >
                {item.feature_title}
              </h4>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
