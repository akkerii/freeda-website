import type { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { isFilled } from "@prismicio/client";

export type KeyMetricsProps = SliceComponentProps<Content.KeyMetricsSlice>;

// Fallback data matching Figma design
const fallbackMetrics = [
  {
    metric_value: "x200",
    metric_title: "Define use case",
    metric_description:
      "Project type, location, regulations, documents, objectives",
  },
  {
    metric_value: "x200",
    metric_title: "Analyse documents",
    metric_description:
      "Plans and technical files are analysed by Freeda, with expert validation",
  },
  {
    metric_value: "x200",
    metric_title: "Act with clarity",
    metric_description:
      "Receive structured, custom reports to support decisions & next steps.",
  },
];

const KeyMetrics = ({ slice }: KeyMetricsProps) => {
  const metrics = slice.items?.length
    ? slice.items
    : fallbackMetrics;

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

        {/* Cards Row - 3 cards, 20px gap */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-5 mt-[56px]">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-8 w-full md:flex-1 md:max-w-[343px]"
            >
              {/* Metric Box - 143x143px, dark bg, rounded 5px */}
              <div className="w-[143px] h-[143px] bg-[#202020] rounded-[5px] flex items-center justify-center">
                <span className="font-heading text-[45px] font-semibold text-white leading-[120%]">
                  {'icon_text' in metric ? metric.icon_text : metric.metric_value || "x200"}
                </span>
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-center gap-4 w-full">
                {/* Title - Trap 24px, leading 1.2 */}
                <h2 className="font-trap text-[24px] font-semibold leading-[120%] text-black text-center m-0">
                  {'step_title' in metric ? metric.step_title : metric.metric_title}
                </h2>
                {/* Description - Inter Regular 18px, 55% opacity */}
                <p className="font-inter text-[18px] text-black/55 leading-normal text-center m-0">
                  {'step_description' in metric ? metric.step_description : metric.metric_description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
