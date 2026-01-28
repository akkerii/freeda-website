import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Ecosystem`.
 */
export type EcosystemProps = SliceComponentProps<Content.EcosystemSlice>;

/**
 * Component for "Ecosystem" Slices.
 */
const Ecosystem: FC<EcosystemProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white py-10 md:py-16 overflow-hidden"
    >
      {slice.primary.title && (
        <p className="font-trap text-center text-lg sm:text-xl md:text-[20px] font-semibold text-black/55 tracking-[-0.1px] leading-[145%] mb-6 px-5">
          {slice.primary.title}
        </p>
      )}

      {/* Logos - Horizontal scrolling marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee hover:pause">
          {/* Repeat logo sets multiple times to ensure full width coverage */}
          {[0, 1, 2, 3].map((setIndex) => (
            <div key={`set-${setIndex}`} className="flex items-center gap-12 md:gap-[72px] shrink-0 pr-12 md:pr-[72px]">
              {slice.primary.logos?.map((item, index) => (
                <div key={`${setIndex}-${index}`} className="shrink-0 flex items-center justify-center">
                  {item.logo?.url && (
                    <PrismicNextImage
                      field={item.logo}
                      className="h-[60px] md:h-[100px] w-auto object-contain grayscale"
                      fallbackAlt=""
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
