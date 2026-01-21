import type { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type KeyMetricsProps = SliceComponentProps<Content.KeyMetricsSlice>;

const KeyMetrics = ({ slice }: KeyMetricsProps) => {
  const metrics = slice.items || [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-[#F2F2F2] py-[72px]"
    >
      <div className="max-w-[1250px] mx-auto px-5 md:px-10">
        {/* Title - Trap 50px, leading 1.1, centered */}
        <div className="flex flex-col items-center">
          <h1 className="font-trap text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-semibold leading-[110%] text-black text-center m-0">
            {slice.primary.title || "Key metrics"}
          </h1>
        </div>

        {/* Cards Row - 3 cards */}
        {metrics.length > 0 && (
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-16 lg:gap-20 mt-[56px]">
            {metrics.map((metric: any, index: number) => (
              <div
                key={index}
                className="flex flex-col items-center gap-6 w-full max-w-[280px]"
              >
                {/* Metric Box - fits content width, dark bg, rounded 10px */}
                <div className="h-[143px] bg-[#202020] rounded-[10px] flex items-center justify-center px-10">
                  <span className="font-trap text-[40px] md:text-[50px] font-semibold text-white leading-[120%] text-center whitespace-nowrap">
                    {metric.icon_text}
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex flex-col items-center gap-3 w-full">
                  {/* Title - Trap 24px, bold */}
                  <h2 className="font-trap text-[20px] md:text-[22px] font-bold leading-[130%] text-black text-center m-0 max-w-[220px]">
                    {metric.step_title}
                  </h2>
                  {/* Description - Inter Regular 18px, 55% opacity */}
                  <p className="font-inter text-[15px] md:text-[16px] text-black/55 leading-[1.5] text-center m-0 max-w-[280px]">
                    {metric.step_description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default KeyMetrics;
