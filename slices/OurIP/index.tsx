// @ts-nocheck
type IPItem = {
  title?: string;
};

type OurIPProps = {
  slice: {
    slice_type: string;
    variation: string;
    id: string;
    primary: {
      section_title?: string;
      section_description?: string;
      footer_text?: string;
    };
    items: IPItem[];
  };
};

const OurIP = ({ slice }: OurIPProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-[120px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Column - Title */}
          <div className="w-full lg:w-[152px] shrink-0">
            <h2 className="font-trap text-3xl sm:text-4xl md:text-[48px] font-semibold leading-[1.2] tracking-[-0.96px] text-black m-0">
              <span className="uppercase">O</span>
              <span className="lowercase">UR</span>{" "}
              <span className="uppercase">IP</span>
            </h2>
          </div>

          {/* Middle Column - Description */}
          <div className="w-full lg:w-[395px] shrink-0">
            <p className="font-inter text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.45] tracking-[-0.12px] text-black/65 m-0">
              {slice.primary.section_description ||
                "Freeda develops proprietary technology combining:"}
            </p>
          </div>

          {/* Right Column - List */}
          <div className="w-full lg:w-[509px] flex flex-col gap-3 md:gap-4">
            {slice.items?.map((item, index) => (
              <div
                key={index}
                className="w-full h-auto min-h-[60px] md:min-h-[72px] bg-black/5 rounded-[16px] p-4 md:p-6 flex items-center gap-3"
              >
                {/* Red Dot Icon */}
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <div className="w-4 h-4 md:w-[18px] md:h-[18px] rounded-full bg-[#F02C2C]" />
                </div>

                {/* Title */}
                <span className="font-trap text-lg sm:text-xl md:text-2xl font-semibold leading-none tracking-[-0.36px] text-black">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        {slice.primary.footer_text && (
          <p className="font-inter text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.45] tracking-[-0.12px] text-black/65 m-0 mt-10 md:mt-16 lg:mt-20 lg:ml-auto lg:max-w-[509px]">
            R&D is led by{" "}
            <strong className="font-bold">Dr. Mariano Rodriguez</strong>,
            PhD in Applied Mathematics (ENS Paris), supported by engineers &
            researchers with experience in mathematics & computer vision.
          </p>
        )}
      </div>
    </section>
  );
};

export default OurIP;
