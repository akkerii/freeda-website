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
      className="bg-white flex gap-[47px] items-center w-[1250px] mx-auto py-16 lg:py-20"
    >
      {/* Images */}
      {slice.primary.images.map((item: any, index: number) => (
        <div
          key={index}
          className={`relative rounded-[5px] shrink-0 ${
            index === 0 ? "h-[292px] w-[219px]" : "h-[292px] w-[343px]"
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

      {/* Description Text */}
      {slice.primary.description && (
        <div className="font-sans text-[18px] font-normal leading-[145%] tracking-[-0.09px] text-[#202020] w-[594px] [&_strong]:font-semibold [&_p]:m-0">
          <PrismicRichText field={slice.primary.description} />
        </div>
      )}
    </section>
  );
};

export default TechnologyDetails;
