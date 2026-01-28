import { FC } from "react";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `TechnologyDetails`.
 */
export type TechnologyDetailsProps = SliceComponentProps<any>;

/**
 * Component for "TechnologyDetails" Slices.
 */
const TechnologyDetails: FC<TechnologyDetailsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white w-full pt-4 md:pt-5 lg:pt-6 pb-12 md:pb-16 lg:pb-20"
    >
      <div className="max-w-[1250px] mx-auto px-5 md:px-10">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center lg:items-start">
          {/* Images - Row on all sizes, scaled appropriately */}
          <div className="w-auto flex flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 sm:shrink-0 justify-center lg:justify-start">
            {slice.primary.images?.map((item: any, index: number) => (
              <div
                key={index}
                className={`relative rounded-[5px] overflow-hidden ${
                  index === 0
                    ? "h-[180px] sm:h-[220px] md:h-[292px] w-[120px] sm:w-[150px] md:w-[219px]"
                    : "h-[180px] sm:h-[220px] md:h-[292px] w-[180px] sm:w-[220px] md:w-[343px]"
                }`}
              >
                {item.image?.url && (
                  <PrismicNextImage
                    field={item.image}
                    className={`absolute inset-0 object-cover rounded-[5px] size-full ${
                      index === 1 ? "mix-blend-luminosity" : ""
                    }`}
                    fallbackAlt=""
                  />
                )}
              </div>
            ))}
          </div>

          {/* Description Text */}
          {slice.primary.description && (
            <div className="font-inter text-base md:text-lg font-normal leading-[145%] tracking-[-0.09px] text-[#202020] max-w-[594px] [&_strong]:font-semibold [&_p]:m-0">
              <PrismicRichText field={slice.primary.description} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechnologyDetails;
