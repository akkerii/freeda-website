// @ts-nocheck
type MethodCard = {
  title?: string;
  description?: string;
};

type FeaturesGridProps = {
  slice: {
    slice_type: string;
    variation: string;
    id: string;
    primary: {
      section_title?: string;
      section_subtitle?: string;
    };
    items: MethodCard[];
  };
};

const FeaturesGrid = ({ slice }: FeaturesGridProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-16 md:py-24 lg:py-[120px]"
    >
      <div className="max-w-[1250px] mx-auto px-5 md:px-10 flex flex-col items-center gap-8 md:gap-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 md:gap-6 max-w-full md:max-w-[796px]">
          {/* Title - OUR METHOD with mixed case */}
          <h2 className="font-trap text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[1.1] text-black m-0 text-center">
            <span className="uppercase">O</span>
            <span className="lowercase">UR</span>{" "}
            <span className="uppercase">M</span>
            <span className="lowercase">ETHOD</span>
          </h2>

          {/* Subtitle */}
          <p className="font-inter text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.45] tracking-[-0.12px] text-black/65 m-0 text-center max-w-[554px] whitespace-pre-line">
            {slice.primary.section_subtitle ||
              "Go ahead and say just a little more \nabout what this is"}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-[47px] justify-center w-full">
          {slice.items?.map((card, index) => (
            <div
              key={index}
              className="w-full max-w-[277px] mx-auto h-[280px] sm:h-[300px] md:h-[330px] bg-black/5 rounded-[10px] relative overflow-hidden"
            >
              {/* Text Content */}
              <div className="p-5 md:p-8 flex flex-col gap-2">
                {/* Title */}
                <h3 className="font-trap text-lg sm:text-xl md:text-2xl font-semibold leading-[1.2] tracking-[-0.48px] text-black m-0">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-sm sm:text-base md:text-lg font-medium leading-[1.45] tracking-[-0.09px] text-black/55 m-0">
                  {card.description}
                </p>
              </div>

              {/* Red Dot Badge (top-right) */}
              <div className="absolute top-5 md:top-[23px] right-5 md:right-8 w-4 h-4 md:w-[17px] md:h-[17px] rounded-full bg-[#F02C2C]" />

              {/* Dark Icon Box (bottom-left) */}
              <div className="absolute bottom-0 left-0 w-[90px] h-[90px] md:w-[121px] md:h-[122px] bg-[#202020] rounded-tr-[10px] flex items-center justify-center">
                {/* Container Icon */}
                <svg
                  className="w-12 h-12 md:w-[70px] md:h-[70px]"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="5"
                    y="5"
                    width="60"
                    height="60"
                    rx="8"
                    stroke="white"
                    strokeWidth="2"
                    strokeOpacity="0.3"
                  />
                  <rect
                    x="15"
                    y="15"
                    width="40"
                    height="40"
                    rx="4"
                    stroke="white"
                    strokeWidth="2"
                    strokeOpacity="0.3"
                  />
                  <rect
                    x="25"
                    y="25"
                    width="20"
                    height="20"
                    rx="2"
                    stroke="white"
                    strokeWidth="2"
                    strokeOpacity="0.3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
