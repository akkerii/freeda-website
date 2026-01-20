import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `ConstructionRisks`.
 */
export type ConstructionRisksProps =
  SliceComponentProps<Content.ConstructionRisksSlice>;

/**
 * Component for "ConstructionRisks" Slices.
 */
const ConstructionRisks: FC<ConstructionRisksProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white pt-12 md:pt-20"
    >
      <div className="max-w-[1250px] mx-auto px-5 md:px-10 flex flex-col items-center gap-8 md:gap-14">
        {/* Title - Figma: Trap SemiBold 56px, centered */}
        <div className="font-trap text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] text-black text-center m-0 whitespace-pre-line [&>h2]:m-0">
          <PrismicRichText
            field={slice.primary.title}
            fallback={<h2>Most risk originates in plans{"\n"}& documents - not on site.</h2>}
          />
        </div>

        {/* Description - Figma: Inter Regular 18px, opacity 65%, max-width 705px */}
        <div className="font-inter text-sm sm:text-base md:text-lg text-black/65 leading-[1.45] tracking-[-0.09px] text-center m-0 max-w-[705px] [&>p]:m-0">
          <PrismicRichText
            field={slice.primary.description}
            fallback={<p>They start in documents: plans, specifications, regulations, guidelines - often unstructured, often inconsistent.</p>}
          />
        </div>

        {/* Two-column layout with image and features */}
        <div className="relative w-full flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-28 pt-4 md:pt-8 pb-16 md:pb-24 lg:pb-[120px]">
          {/* Left: Image */}
          <div className="w-full lg:w-[56%] flex-shrink-0">
            <PrismicNextImage
              field={slice.primary.cards_image}
              className="w-full h-auto rounded-[10px]"
              fallbackAlt=""
            />
          </div>

          {/* Red vertical gradient line - positioned between columns */}
          <div
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-8 w-[2px] h-[278px] pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to bottom, #EC0606 0%, rgba(255, 255, 255, 0.1) 100%)'
            }}
          />

          {/* Right: Feature list */}
          <div className="w-full lg:w-[35%] flex flex-col gap-8 lg:gap-10">
            {/* Main feature - active */}
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="font-trap text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-[1.2] text-black m-0 [&>h3]:m-0 whitespace-pre-line">
                <PrismicRichText
                  field={slice.primary.feature_title}
                  fallback={<h3>From plans & documents{"\n"}to decisions</h3>}
                />
              </div>
              <div className="font-inter text-base sm:text-lg md:text-xl lg:text-2xl text-black/55 leading-[1.2] tracking-[-0.12px] m-0 [&>p]:m-0">
                <PrismicRichText
                  field={slice.primary.feature_description}
                  fallback={<p>Freeda analyses plans and cross-references them with technical, project & regulatory documents to detect errors and inconsistencies.</p>}
                />
              </div>
            </div>

            {/* Feature 2 - grayed out */}
            <h3 className="font-trap text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-[1.2] text-[#8B9187] m-0">
              {slice.primary.feature_2_title || "Built on real projects"}
            </h3>

            {/* Feature 3 - grayed out */}
            <h3 className="font-trap text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-[1.2] text-[#8B9187] m-0">
              {slice.primary.feature_3_title || "Human-led AI for the built environment"}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionRisks;
