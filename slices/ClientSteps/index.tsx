import { FC } from "react";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ClientSteps`.
 */
export type ClientStepsProps = SliceComponentProps<any>;

/**
 * Component for "ClientSteps" Slices.
 */
const ClientSteps: FC<ClientStepsProps> = ({ slice }) => {
  // Staggered offsets for diagonal pattern
  const offsets = [
    { left: "0%", top: "0px" },        // Step 1: top-left
    { left: "30%", top: "114px" },     // Step 2: middle
    { left: "55%", top: "229px" }      // Step 3: bottom-right
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white flex flex-col gap-[40px] items-center w-full px-5 md:px-[64px] py-[60px]"
    >
      {/* Header */}
      <div className="flex flex-col gap-[40px] items-center w-full max-w-[1250px]">
        {/* Title */}
        {slice.primary.title && (
          <h2 className="font-trap text-3xl md:text-5xl lg:text-[64px] font-semibold leading-[1.1] tracking-[-1.28px] text-[#202020] text-center w-full m-0">
            {slice.primary.title}
          </h2>
        )}

        {/* Subtitle */}
        {slice.primary.subtitle && (
          <div className="font-inter text-lg md:text-xl lg:text-[24px] font-normal leading-[145%] tracking-[-0.12px] text-[#202020] text-center max-w-[886px] [&_strong]:font-semibold [&_p]:m-0">
            <PrismicRichText field={slice.primary.subtitle} />
          </div>
        )}
      </div>

      {/* Steps - Staggered Layout */}
      <div className="relative w-full max-w-[1432px]" style={{ minHeight: "323px" }}>
        {slice.primary.steps.map((item: any, index: number) => {
          const offset = offsets[index] || offsets[0];

          return (
            <div
              key={index}
              className="absolute flex items-center gap-6"
              style={{ left: offset.left, top: offset.top }}
            >
              {/* Icon */}
              {item.icon?.url && (
                <PrismicNextImage
                  field={item.icon}
                  className="w-[94px] h-[94px] object-contain shrink-0"
                  fallbackAlt=""
                />
              )}

              {/* Grey Card with Text */}
              <div className="bg-black/5 rounded-[10px] p-[32px]">
                <h5 className="font-trap text-[24px] font-semibold leading-[1.2] tracking-[-0.48px] text-black m-0 whitespace-nowrap">
                  {item.step_text}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ClientSteps;
