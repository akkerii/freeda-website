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
      className="bg-white flex flex-col gap-[24px] items-center w-[1152px] mx-auto py-16 lg:py-20"
    >
      {/* Title */}
      {slice.primary.title && (
        <p className="font-heading text-[20px] font-semibold leading-[145%] tracking-[-0.1px] text-black/55 text-center m-0">
          {slice.primary.title}
        </p>
      )}

      {/* Partner Logos */}
      <div className="flex gap-[60px] items-center justify-center">
        {slice.primary.logos.map((item: any, index: number) => (
          <div
            key={index}
            className="h-[120px] w-[360px] overflow-hidden relative flex items-center justify-center"
          >
            {item.logo?.url && (
              <PrismicNextImage
                field={item.logo}
                className={`object-contain w-full h-full scale-125 ${
                  index === 0 || index === 2 ? "grayscale" : ""
                }`}
                fallbackAlt=""
              />
            )}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      {slice.primary.button_link && slice.primary.button_text && (
        <PrismicLink
          field={slice.primary.button_link}
          className="bg-[#f02c2c] flex items-center justify-center px-[16px] py-[12px] rounded-[9px] no-underline"
        >
          <p className="font-mono text-[18px] font-bold leading-[145%] text-center text-white m-0">
            {slice.primary.button_text}
          </p>
        </PrismicLink>
      )}
    </section>
  );
};

export default EcosystemPartners;
