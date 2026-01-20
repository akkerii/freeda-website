// @ts-nocheck
import { PrismicNextImage } from "@prismicio/next";

type ResourceCard = {
  image?: { url?: string; alt?: string };
  title?: string;
  application_label?: string;
  application_text?: string;
  documents_label?: string;
  documents_text?: string;
};

type ResourcesGridProps = {
  slice: {
    slice_type: string;
    variation: string;
    id: string;
    primary: {
      section_title?: string;
    };
    items: ResourceCard[];
  };
};

const ResourcesGrid = ({ slice }: ResourcesGridProps) => {
  const cards = slice.items || [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-12 md:py-16"
    >
      <div className="max-w-[1250px] mx-auto px-5 md:px-10 flex flex-col gap-8 md:gap-10">
        {/* Section Title */}
        <h2 className="font-trap text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[1.1] text-black m-0 text-left">
          {slice.primary.section_title || "Short Video"}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-6 md:gap-8"
            >
              {/* Image */}
              <div
                className={`w-full ${index === 0 ? 'h-[350px] sm:h-[500px] md:h-[698px]' : 'h-[280px] sm:h-[380px] md:h-[456px]'} rounded-[10px] overflow-hidden bg-[#202020]`}
              >
                {card.image?.url && (
                  <PrismicNextImage
                    field={card.image as any}
                    className="w-full h-full object-cover"
                    fallbackAlt=""
                  />
                )}
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-3 md:gap-4">
                {/* Title */}
                <h3 className="font-trap text-lg sm:text-xl md:text-2xl font-semibold leading-[1.2] text-black m-0">
                  {card.title || "Card Title"}
                </h3>

                {/* Description */}
                <div className="font-inter text-sm sm:text-base md:text-lg font-normal leading-[1.2] text-black/55">
                  <p className="m-0 mb-3 md:mb-4">
                    <strong className="font-bold">
                      {card.application_label || "Application"}
                    </strong>{" "}
                    {card.application_text || "Description of the application."}
                  </p>
                  <p className="m-0">
                    <strong className="font-bold">
                      {card.documents_label || "Documents analysed"}
                    </strong>{" "}
                    {card.documents_text || "List of documents."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesGrid;
