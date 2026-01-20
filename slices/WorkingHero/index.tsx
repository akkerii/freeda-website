import type { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Navigation from "@/components/Navigation";

export type WorkingHeroProps = SliceComponentProps<Content.WorkingHeroSlice>;

const WorkingHero = ({ slice }: WorkingHeroProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full h-[600px] sm:h-[700px] md:h-[850px] lg:h-[982px] overflow-hidden"
    >
      {/* Navigation */}
      <Navigation theme="light" />

      {/* Full Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/working-with-freeda.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark Content Box - Overlaid on Right Side */}
      <div className="absolute right-0 bottom-0 w-full sm:w-[320px] md:w-[420px] lg:w-[500px] xl:w-[564px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[537px] bg-[#202020] rounded-tl-[10px]">
        <div className="flex flex-col gap-6 md:gap-8 items-start justify-center h-full px-6 sm:px-8 md:px-12 lg:px-[66px]">
          {/* Title */}
          <div className="flex flex-col font-trap font-semibold leading-[1.1] text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] text-white tracking-[-1.6px]">
            <h1 className="block mb-0">Working</h1>
            <h1 className="block">with Freeda</h1>
          </div>

          {/* Description */}
          <p className="font-inter font-normal text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-white/65 leading-[1.45] tracking-[-0.12px] max-w-[432px]">
            {slice.primary.description ||
              "Freeda is designed for teams dealing with complex projects, multiple stakeholders and regulatory constraints. We don't just deliver analyses. We help structure how risk is managed at the design stage."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkingHero;
