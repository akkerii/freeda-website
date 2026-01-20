// @ts-nocheck
import { PrismicNextImage } from "@prismicio/next";

type ExpertiseCard = {
  image?: { url?: string; alt?: string };
  title?: string;
};

type ExpertiseProps = {
  slice: {
    slice_type: string;
    variation: string;
    id: string;
    primary: {
      section_title?: string;
      section_subtitle?: string;
      footer_text?: string;
    };
    items: ExpertiseCard[];
  };
};

const Expertise = ({ slice }: ExpertiseProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white relative"
    >
      <div className="max-w-[1161px] mx-auto px-5 md:px-10 py-12 md:py-16 lg:pb-20">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 md:gap-4 mb-8 md:mb-10">
          {/* Title - EXPERTISE with mixed case */}
          <h2 className="font-trap text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[1.1] text-black m-0 text-center">
            <span className="uppercase">E</span>
            <span className="lowercase">XPERTISE</span>
          </h2>

          {/* Subtitle */}
          <p className="font-inter text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.45] tracking-[-0.12px] text-black/65 m-0 text-center max-w-[554px]">
            {slice.primary.section_subtitle || "Freeda's team includes former:"}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-[66px] justify-center">
          {slice.items?.map((card, index) => (
            <div
              key={index}
              className="w-full max-w-[343px] mx-auto flex flex-col gap-6 md:gap-8 rounded-lg"
            >
              {/* Image */}
              <div className="w-full h-[300px] sm:h-[380px] md:h-[456px] rounded-[10px] overflow-hidden bg-[#202020]">
                {card.image?.url && (
                  <PrismicNextImage
                    field={card.image as any}
                    className="w-full h-full object-cover"
                    fallbackAlt=""
                  />
                )}
              </div>

              {/* Title */}
              <h3 className="font-trap text-lg sm:text-xl md:text-2xl font-semibold leading-[1.2] text-black m-0 text-center">
                {card.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="font-inter text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.45] tracking-[-0.12px] text-black/65 mx-auto mt-8 md:mt-10 text-center max-w-[554px]">
          {slice.primary.footer_text ||
            "With experience across Europe, North America and the Middle East."}
        </p>
      </div>
    </section>
  );
};

export default Expertise;
