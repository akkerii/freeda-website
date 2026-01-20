// @ts-nocheck
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";

type DeepTechItem = {
  title?: string;
  description?: string;
  is_muted?: boolean;
};

type DeepTechProps = {
  slice: {
    slice_type: string;
    variation: string;
    id: string;
    primary: {
      section_title?: string;
      section_description?: string;
      content_title?: string;
      content_description?: string;
      image?: { url?: string; alt?: string; dimensions?: { width: number; height: number } };
    };
    items: DeepTechItem[];
  };
};

const DeepTech = ({ slice }: DeepTechProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white"
    >
      <div className="max-w-[1250px] mx-auto px-5 md:px-10 py-12 md:py-16 lg:py-20 flex flex-col items-center gap-10 md:gap-14">
        {/* Header - Figma: 884px max, gap 32px */}
        <div className="flex flex-col items-center gap-6 md:gap-8 max-w-full md:max-w-[884px]">
          {/* Title - Figma: Trap 56px, semibold, centered */}
          <h2 className="font-trap text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-semibold leading-[1.1] text-black m-0 text-center">
            {slice.primary.section_title || "Most risk originates in plans & documents - not on site."}
          </h2>

          {/* Description - Figma: Inter 18px, 65% opacity, centered */}
          <p className="font-inter text-sm sm:text-base md:text-lg font-normal leading-[1.45] tracking-[-0.09px] text-black/65 m-0 text-center max-w-[705px]">
            {slice.primary.section_description ||
              "They start in documents: plans, specifications, regulations, guidelines - often unstructured, often inconsistent."}
          </p>
        </div>

        {/* Content Row - Flexbox with proper constraints */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10 relative">
          {/* Left - Image */}
          <div className="w-full lg:w-[702px] flex-shrink-0">
            {slice.primary.image?.url ? (
              <PrismicNextImage
                field={slice.primary.image as any}
                className="w-full h-auto rounded-[10px]"
                fallbackAlt=""
              />
            ) : (
              <div className="w-full aspect-[702/525] bg-[#F2F2F2] rounded-[10px] relative">
                <Image
                  src="/images/deep-tech-illustration.png"
                  alt="Document plans illustration"
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>

          {/* Vertical Gradient Line */}
          <div className="hidden lg:block flex-shrink-0 h-[278px] w-[2px] relative">
            <div className="w-full h-full bg-gradient-to-b from-[#EC0606] to-white/10" />
          </div>

          {/* Right - Content */}
          <div className="w-full lg:flex-1 flex flex-col gap-8 lg:gap-10 overflow-hidden">
            {/* Main Content Block - Figma: gap 24px */}
            <div className="flex flex-col gap-5 md:gap-6">
              {/* Content Title - Figma: Trap 36px, semibold */}
              <h3 className="font-trap text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold leading-[1.2] text-black m-0">
                {slice.primary.content_title || "From plans & documents to decisions"}
              </h3>

              {/* Content Description - Figma: Inter 24px, 55% opacity */}
              <p className="font-inter text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.21] tracking-[-0.12px] text-black/55 m-0">
                {slice.primary.content_description ||
                  "Freeda analyses plans and cross-references them with technical, project & regulatory documents to detect errors and inconsistencies."}
              </p>
            </div>

            {/* Feature Items - Figma: Trap 36px, muted green color #8B9187 */}
            {slice.items?.length > 0 ? (
              slice.items.map((item, index) => (
                <h4
                  key={index}
                  className={`font-trap text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold leading-[1.2] m-0 ${
                    item.is_muted ? "text-[#8B9187]" : "text-black"
                  }`}
                >
                  {item.title}
                </h4>
              ))
            ) : (
              <>
                <h4 className="font-trap text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold leading-[1.2] text-[#8B9187] m-0">
                  Built on real projects
                </h4>
                <h4 className="font-trap text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold leading-[1.2] text-[#8B9187] m-0">
                  Human-led AI for the built environment
                </h4>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeepTech;
