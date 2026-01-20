import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export type UseCaseCaseStudyProps =
  SliceComponentProps<Content.UseCaseCaseStudySlice>;

const UseCaseCaseStudy: FC<UseCaseCaseStudyProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-[1512px] mx-auto px-5 md:px-10 lg:px-[40px]">
        {/* Section Title */}
        <h2 className="font-trap text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-semibold leading-[1.15] tracking-[-0.95px] text-black mb-8 md:mb-12">
          {slice.primary.title || "Last Case Study"}
        </h2>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Main Large Image - Left Side */}
          <div className="md:col-span-5 relative">
            {/* Location Label 1 */}
            {slice.primary.location_label_1 && (
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#F02C2C]" />
                <span className="font-mono text-sm text-black">
                  {slice.primary.location_label_1}
                </span>
              </div>
            )}
            <div className="relative w-full aspect-[4/5] rounded-[10px] overflow-hidden bg-[#EDEDED]">
              {slice.primary.main_image?.url ? (
                <PrismicNextImage
                  field={slice.primary.main_image}
                  className="w-full h-full object-cover grayscale"
                  fallbackAlt=""
                />
              ) : (
                <div className="w-full h-full bg-[#EDEDED]" />
              )}
            </div>
          </div>

          {/* Right Side - Two Images Stacked */}
          <div className="md:col-span-4 flex flex-col gap-4 md:gap-6">
            {/* Secondary Image */}
            <div className="relative">
              {/* Location Label 2 */}
              {slice.primary.location_label_2 && (
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-black/30" />
                  <span className="font-mono text-sm text-black/55">
                    {slice.primary.location_label_2}
                  </span>
                </div>
              )}
              <div className="relative w-full aspect-[4/3] rounded-[10px] overflow-hidden bg-[#EDEDED]">
                {slice.primary.secondary_image?.url ? (
                  <PrismicNextImage
                    field={slice.primary.secondary_image}
                    className="w-full h-full object-cover grayscale"
                    fallbackAlt=""
                  />
                ) : (
                  <div className="w-full h-full bg-[#EDEDED]" />
                )}
              </div>
            </div>

            {/* Tertiary Image */}
            <div className="relative w-full aspect-[4/3] rounded-[10px] overflow-hidden bg-[#EDEDED]">
              {slice.primary.tertiary_image?.url ? (
                <PrismicNextImage
                  field={slice.primary.tertiary_image}
                  className="w-full h-full object-cover grayscale"
                  fallbackAlt=""
                />
              ) : (
                <div className="w-full h-full bg-[#EDEDED]" />
              )}
            </div>
          </div>

          {/* Case Study Info - Right Side */}
          <div className="md:col-span-3 flex flex-col justify-end">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-sm text-black/55 uppercase tracking-wider">
                Application
              </span>
              <h3 className="font-trap text-xl md:text-2xl font-semibold text-black leading-[1.2]">
                {slice.primary.case_study_title || "Project Title"}
              </h3>
              {slice.primary.case_study_description && (
                <div className="font-inter text-base text-black/65 leading-[1.45] [&_p]:m-0">
                  <PrismicRichText field={slice.primary.case_study_description} />
                </div>
              )}
              {slice.primary.button_text && (
                <PrismicNextLink
                  field={slice.primary.button_link}
                  className="inline-flex items-center gap-2 font-mono text-base text-[#F02C2C] hover:opacity-70 transition-opacity mt-2"
                >
                  {slice.primary.button_text}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </PrismicNextLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseCaseStudy;
