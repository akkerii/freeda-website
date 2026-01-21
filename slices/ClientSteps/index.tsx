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
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white w-full py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-[1250px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="flex flex-col gap-6 md:gap-10 items-center w-full mb-10 md:mb-16">
          {/* Title */}
          {slice.primary.title && (
            <h2 className="font-trap text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[1.1] tracking-[-1.28px] text-[#202020] text-center w-full m-0">
              {slice.primary.title}
            </h2>
          )}

          {/* Subtitle */}
          {slice.primary.subtitle && (
            <div className="font-inter text-base md:text-xl lg:text-[24px] font-normal leading-[145%] tracking-[-0.12px] text-[#202020] text-center max-w-[886px] [&_strong]:font-semibold [&_p]:m-0">
              <PrismicRichText field={slice.primary.subtitle} />
            </div>
          )}
        </div>

        {/* Steps - Stack on mobile, staggered on desktop */}
        <div className="flex flex-col lg:hidden gap-6">
          {/* Mobile: Simple vertical stack */}
          {slice.primary.steps?.map((item: any, index: number) => (
            <div
              key={index}
              className="flex items-center gap-4"
            >
              {/* Icon */}
              {item.icon?.url && (
                <PrismicNextImage
                  field={item.icon}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain shrink-0"
                  fallbackAlt=""
                />
              )}

              {/* Grey Card with Text */}
              <div className="bg-black/5 rounded-[10px] p-4 md:p-6 flex-1">
                <h5 className="font-trap text-lg md:text-xl font-semibold leading-[1.2] tracking-[-0.48px] text-black m-0">
                  {item.step_text}
                </h5>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Staggered diagonal layout */}
        <div className="hidden lg:block relative w-full" style={{ minHeight: "323px" }}>
          {slice.primary.steps?.map((item: any, index: number) => {
            // Staggered offsets for diagonal pattern
            const offsets = [
              { left: "0%", top: "0px" },
              { left: "30%", top: "114px" },
              { left: "55%", top: "229px" }
            ];
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
                <div className="bg-black/5 rounded-[10px] p-8">
                  <h5 className="font-trap text-2xl font-semibold leading-[1.2] tracking-[-0.48px] text-black m-0 whitespace-nowrap">
                    {item.step_text}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientSteps;
