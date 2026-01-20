// @ts-nocheck
import { PrismicNextImage } from "@prismicio/next";

type ProjectDetailItem = {
  image?: { url?: string; alt?: string };
  title?: string;
  description?: string;
  is_reversed?: boolean;
};

type ProjectDetailsProps = {
  slice: {
    slice_type: string;
    variation: string;
    id: string;
    items: ProjectDetailItem[];
  };
};

const ProjectDetails = ({ slice }: ProjectDetailsProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-[1250px] mx-auto px-5 md:px-10 flex flex-col gap-12 md:gap-16 lg:gap-[86px]">
        {slice.items?.map((item, index) => {
          const isReversed = item.is_reversed ?? index % 2 !== 0;

          return (
            <div
              key={index}
              className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between gap-8 lg:gap-16 xl:gap-[111px]`}
            >
              {/* Image */}
              <div className="w-full lg:w-[702px] h-[280px] sm:h-[400px] lg:h-[560px] rounded-[10px] overflow-hidden bg-[#F2F2F2] shrink-0">
                {item.image?.url && (
                  <PrismicNextImage
                    field={item.image as any}
                    className="w-full h-full object-cover"
                    fallbackAlt=""
                  />
                )}
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-[433px] flex flex-col gap-6 md:gap-8 lg:gap-10">
                <h3 className="font-trap text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold leading-[1.2] text-black m-0">
                  {item.title || "Feature Title"}
                </h3>
                <p className="font-inter text-sm sm:text-base md:text-lg font-normal leading-[1.45] text-black/65 m-0">
                  {item.description || "Feature description goes here."}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectDetails;
