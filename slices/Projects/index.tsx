// @ts-nocheck
import { PrismicNextImage } from "@prismicio/next";

type ProjectItem = {
  image?: { url?: string; alt?: string };
  title?: string;
  location?: string;
  application_label?: string;
  application_text?: string;
  metric_label?: string;
  metric_text?: string;
};

type ProjectsSliceProps = {
  slice: {
    slice_type: string;
    variation: string;
    id: string;
    primary: {
      section_title?: string;
      title_prefix?: string;
      button_text?: string;
      button_link?: { url?: string };
      show_button?: boolean;
    };
    items: ProjectItem[];
  };
};

export type ProjectsProps = ProjectsSliceProps;

// Project Card Component
const ProjectCard = ({ project }: { project: ProjectItem }) => {
  return (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[698px] rounded-[10px] overflow-hidden relative bg-[#F2F2F2]">
      {/* Background Image */}
      {project.image?.url && (
        <PrismicNextImage
          field={project.image as any}
          className="absolute inset-0 w-full h-full object-cover"
          fallbackAlt=""
        />
      )}

      {/* Location Badge (top-right) */}
      {project.location && (
        <div className="absolute top-0 right-0 w-[80px] sm:w-[100px] lg:w-[116px] h-[80px] sm:h-[100px] lg:h-[118px] bg-[#F2F2F2] rounded-bl-[10px] flex flex-col items-center justify-center gap-1 md:gap-2">
          {/* Red Dot */}
          <div className="w-3 h-3 md:w-[19px] md:h-[19px] rounded-full bg-[#F02C2C]" />
          {/* Location Text */}
          <span className="font-inter text-sm md:text-lg font-bold text-black/55">
            {project.location}
          </span>
        </div>
      )}

      {/* Info Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#F2F2F2] rounded-b-[10px] p-4 md:p-6 lg:p-8">
        {/* Title */}
        <h3 className="font-trap text-lg sm:text-xl md:text-2xl font-semibold leading-[1.2] text-black m-0 mb-2 md:mb-4">
          {project.title || "Project Name"}
        </h3>

        {/* Description */}
        <div className="font-inter text-sm sm:text-base md:text-lg leading-[1.2] text-black/55">
          {project.application_label && (
            <p className="m-0 mb-1 md:mb-2">
              <strong className="font-bold">{project.application_label}</strong>
              <br />
              {project.application_text}
            </p>
          )}
          {project.metric_label && (
            <p className="m-0">
              <strong className="font-bold">{project.metric_label}</strong>
              <br />
              {project.metric_text}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = ({ slice }: ProjectsProps) => {
  const projects = slice.items || [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-white py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-[1250px] mx-auto px-5 md:px-10 flex flex-col items-center gap-10 md:gap-14">
        {/* Content Container */}
        <div className="w-full flex flex-col gap-8 md:gap-10">
          {/* Title */}
          <h2 className="font-trap text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[1.1] text-black m-0">
            {slice.primary.title_prefix && (
              <span>{slice.primary.title_prefix} </span>
            )}
            <span className="uppercase">P</span>
            <span className="lowercase">ROJECTS</span>
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* More Project Button */}
        {slice.primary.show_button !== false && (
          <a
            href={slice.primary.button_link?.url || "#"}
            className="flex items-center justify-center px-4 py-3 bg-transparent border-2 border-black/15 rounded-[9px] font-mono text-base md:text-lg font-normal text-black no-underline hover:bg-black/5 transition-colors"
          >
            {slice.primary.button_text || "More Project"}
          </a>
        )}
      </div>
    </section>
  );
};

export default Projects;
