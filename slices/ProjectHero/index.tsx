// @ts-nocheck
import { PrismicNextImage } from "@prismicio/next";

type ProjectHeroProps = {
  slice: {
    slice_type: string;
    variation: string;
    id: string;
    primary: {
      logo_text?: string;
      project_title?: string;
      button_text?: string;
      button_link?: { url?: string };
      hero_image_1?: { url?: string; alt?: string };
      hero_image_2?: { url?: string; alt?: string };
    };
  };
};

const ProjectHero = ({ slice }: ProjectHeroProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full min-h-screen bg-white relative overflow-hidden"
    >
      {/* Navigation */}
      <div className="relative z-10 flex items-center justify-between px-5 md:px-10 py-8 md:py-12">
        {/* Left: Nav Links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {[
            { text: "Use Cases", url: "/use-cases" },
            { text: "Working with Freeda", url: "/working-with-freeda" },
            { text: "Resources", url: "/resources" },
          ].map((link) => (
            <a
              key={link.text}
              href={link.url}
              className="font-mono text-sm lg:text-base font-normal text-black no-underline hover:opacity-70 transition-opacity"
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* Center: Logo - absolutely positioned */}
        <a href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center no-underline hover:opacity-80 transition-opacity">
          <img
            src="/images/freeda-logo-dark.svg"
            alt="Freeda"
            className="h-8 md:h-10 lg:h-12 w-auto"
          />
        </a>

        {/* Right: Button */}
        <a
          href={slice.primary.button_link?.url || "#"}
          className="hidden sm:flex items-center justify-center px-4 py-3 bg-transparent border-2 border-black/15 rounded-[9px] font-mono text-sm lg:text-base font-normal text-black no-underline hover:bg-black/5 transition-colors ml-auto"
        >
          {slice.primary.button_text || "Another button"}
        </a>
      </div>

      {/* Project Title */}
      <h1 className="relative z-[5] text-center px-5 mt-8 md:mt-16 font-trap text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[1.1] tracking-[-1.6px] text-black m-0">
        {slice.primary.project_title || "Project Title"}
      </h1>

      {/* Hero Images Container */}
      <div className="relative w-full max-w-[977px] mx-auto mt-12 md:mt-20 px-5 md:px-10 aspect-[977/656]">
        {/* Background Image (larger) */}
        {slice.primary.hero_image_1?.url && (
          <div className="absolute right-0 top-0 w-[60%] md:w-[54%] h-full rounded-[10px] overflow-hidden">
            <PrismicNextImage
              field={slice.primary.hero_image_1 as any}
              className="w-full h-full object-cover"
              fallbackAlt=""
            />
          </div>
        )}

        {/* Foreground Image (smaller, overlapping) */}
        {slice.primary.hero_image_2?.url && (
          <div className="hidden sm:block absolute left-[18%] top-[11%] w-[44%] h-[80%] rounded-[10px] overflow-hidden shadow-lg">
            <PrismicNextImage
              field={slice.primary.hero_image_2 as any}
              className="w-full h-full object-cover"
              fallbackAlt=""
            />
          </div>
        )}

        {/* Gray Info Card */}
        <div className="hidden md:block absolute left-0 top-[42%] w-[36%] max-w-[353px] h-[24%] max-h-[161px] bg-[#EDEDED] rounded-[10px]" />
      </div>
    </section>
  );
};

export default ProjectHero;
