import { FC } from "react";
import { SliceComponentProps, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `EcosystemPartners`.
 */
export type EcosystemPartnersProps = SliceComponentProps<any>;

/**
 * Component for "EcosystemPartners" Slices.
 */
const EcosystemPartners: FC<EcosystemPartnersProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white w-full py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-[1250px] mx-auto px-5 md:px-10 flex flex-col gap-6 md:gap-8 items-center">
        {/* Title */}
        {slice.primary.title && (
          <p className="font-trap text-lg md:text-xl font-semibold leading-[145%] tracking-[-0.1px] text-black/55 text-center m-0">
            {slice.primary.title}
          </p>
        )}

        {/* Partner Logos - Horizontal scrolling marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee hover:pause">
            {/* Repeat logo sets multiple times to ensure full width coverage */}
            {[0, 1, 2, 3].map((setIndex) => (
              <div key={`set-${setIndex}`} className="flex items-center gap-8 md:gap-12 lg:gap-16 shrink-0 pr-8 md:pr-12 lg:pr-16">
                {slice.primary.logos?.map((item: any, index: number) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="h-[50px] md:h-[80px] lg:h-[100px] w-[140px] md:w-[200px] lg:w-[250px] overflow-hidden relative flex items-center justify-center shrink-0"
                  >
                    {item.logo?.url && (
                      <PrismicNextImage
                        field={item.logo}
                        className="object-contain w-full h-full grayscale"
                        fallbackAlt=""
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        {slice.primary.button_link && slice.primary.button_text && (
          <PrismicLink
            field={slice.primary.button_link}
            className="bg-[#f02c2c] flex items-center justify-center px-4 py-3 rounded-[9px] no-underline hover:bg-[#d92626] transition-colors"
          >
            <p className="font-mono text-base md:text-lg font-bold leading-[145%] text-center text-white m-0">
              {slice.primary.button_text}
            </p>
          </PrismicLink>
        )}
      </div>
    </section>
  );
};

export default EcosystemPartners;
