import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type ResourcesHeroProps = SliceComponentProps<Content.ResourcesHeroSlice>;

const ResourcesHero = ({ slice }: ResourcesHeroProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full min-h-[60vh] md:min-h-[80vh] lg:min-h-screen bg-[#EDEDED] relative overflow-hidden flex flex-col items-center justify-center pt-20 md:pt-24"
    >
      {/* Main Title - Centered */}
      <div className="flex items-center justify-center px-5">
        <h1 className="font-trap text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[1.1] tracking-[-1.6px] text-black text-center m-0">
          {slice.primary.title || "Ressources"}
        </h1>
      </div>
    </section>
  );
};

export default ResourcesHero;
