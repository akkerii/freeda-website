"use client";

import type { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import FadeIn from "@/components/FadeIn";

export type FooterProps = SliceComponentProps<Content.FooterSlice>;

// LinkedIn icon SVG paths
const svgPaths = {
  p1ab31680: "M4.899 2.54395C3.52364 2.54395 2.625 3.44816 2.625 4.6333C2.625 5.79355 3.49631 6.72271 4.8458 6.72271H4.87177C6.27347 6.72271 7.14595 5.79355 7.14595 4.6333C7.11994 3.44816 6.27356 2.54395 4.899 2.54395Z",
  p1fcf5070: "M24 3C24 1.34423 22.6558 0 21 0H3C1.34423 0 0 1.34423 0 3V21C0 22.6558 1.34423 24 3 24H21C22.6558 24 24 22.6558 24 21V3Z",
  p28c6df0: "M16.7475 8.08984C14.6151 8.08984 13.66 9.26252 13.1252 10.0862V8.37419H9.1062C9.1595 9.50842 9.1062 20.4661 9.1062 20.4661H13.1251V13.7131C13.1251 13.3517 13.1511 12.9903 13.2576 12.732C13.5477 12.0101 14.2094 11.2623 15.3198 11.2623C16.7735 11.2623 17.3559 12.3716 17.3559 13.9964V20.4661H21.375V13.5319C21.375 9.81766 19.3919 8.08984 16.7475 8.08984Z",
  pe7ea00: "M6.88157 8.37402H2.86157V20.466H6.88157V8.37402Z",
};

function SocialLink({ children, href }: React.PropsWithChildren<{ href?: string }>) {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block relative shrink-0 size-[34px] hover:opacity-70 transition-opacity">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          {children}
        </svg>
      </a>
    );
  }
  return (
    <button className="block relative shrink-0 size-[34px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </button>
  );
}

const Footer = ({ slice }: FooterProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col items-center relative w-full" data-name="Footer">
        <div className="relative w-full max-w-[1512px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

          {/* Mobile Layout */}
          <div className="block md:hidden relative">
            {/* Logo for mobile - overlapping */}
            <div className="relative w-full z-10 pointer-events-none">
              <img src="/images/freeda-logo-combined.svg" alt="" className="w-full h-auto object-contain" />
            </div>

            {/* Footer content box for mobile - overlapped by logo */}
            <footer className="bg-[rgba(242,242,242,0.4)] rounded-[10px] overflow-hidden -mt-[60px] relative" data-name="Footer Mobile">
              <div className="flex flex-col gap-8 px-6 pt-[80px] pb-8">
                {/* Description & Social */}
                <FadeIn delay={100}>
                  <div className="flex flex-col gap-6">
                    <div className="h-[24px]"></div>
                    <nav className="flex gap-5 items-center">
                      <SocialLink href="https://www.linkedin.com/company/freedaso/?viewAsMember=true">
                        <g clipPath="url(#clip0_mobile_2)">
                          <g>
                            <path clipRule="evenodd" d={svgPaths.p1fcf5070} fill="black" fillOpacity="0.45" fillRule="evenodd" />
                            <path d={svgPaths.pe7ea00} fill="white" />
                            <path d={svgPaths.p1ab31680} fill="white" />
                            <path d={svgPaths.p28c6df0} fill="white" />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_mobile_2">
                            <rect fill="white" height="24" width="24" />
                          </clipPath>
                        </defs>
                      </SocialLink>
                    </nav>
                  </div>
                </FadeIn>

                {/* Nav columns for mobile */}
                <FadeIn delay={200}>
                  <div className="grid grid-cols-2 gap-8">
                    {/* Column 1 - Applications */}
                    <nav className="flex flex-col gap-2">
                      <div className="pb-3">
                        <p className="font-trap font-semibold text-[18px] text-black leading-[1.2] capitalize">Applications</p>
                      </div>
                      <a href="/use-cases" className="font-inter font-medium text-[14px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">Use Cases</a>
                      <a href="/case-study" className="font-inter font-medium text-[14px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">Case Study</a>
                    </nav>

                    {/* Column 2 - Company */}
                    <nav className="flex flex-col gap-2 col-span-2">
                      <div className="pb-3">
                        <p className="font-trap font-semibold text-[18px] text-black leading-[1.2] capitalize">Company</p>
                      </div>
                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <a href="/working-with-freeda" className="font-inter font-medium text-[14px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">Working with Freeda</a>
                        <a href="https://freeda-so.notion.site/Freeda-Careers-2065c01c88ed80259519e83d67a331aa" target="_blank" rel="noopener noreferrer" className="font-inter font-medium text-[14px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">Careers</a>
                        <a href="/legal" className="font-inter font-medium text-[14px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">Legal</a>
                      </div>
                    </nav>
                  </div>
                </FadeIn>
              </div>
            </footer>
          </div>

          {/* Desktop Layout - Original */}
          <div className="hidden md:block relative w-full" style={{ aspectRatio: '1800/921' }}>
            {/* Combined X + Freeda logo - absolute at top */}
            <div className="absolute left-0 top-0 w-full pointer-events-none" style={{ height: '51.14%' }}>
              <img src="/images/freeda-logo-combined.svg" alt="" className="block w-full h-full object-contain object-top" />
            </div>

            {/* Footer content box - positioned below logo overlap */}
            <footer className="absolute left-0 right-0 bottom-0 bg-[rgba(242,242,242,0.4)] rounded-[14px] overflow-hidden" style={{ top: '25.5%' }} data-name="Footer 1">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-[100px] px-10 md:px-14 lg:px-20 xl:px-[100px] pt-22 lg:pt-32 xl:pt-[130px] pb-12 md:pb-16 lg:pb-20 xl:pb-[80px]" data-name="Container">
                {/* Left content - Description & Social */}
                <FadeIn delay={100} direction="left" className="flex flex-col gap-8 md:gap-10 lg:gap-[50px] w-full lg:w-auto lg:min-w-[200px] xl:min-w-[280px]" data-name="Content">
                  <div className="h-[24px] md:h-[28px] lg:h-[32px]"></div>
                  <nav className="flex gap-5 md:gap-6 lg:gap-[28px] items-center" data-name="Social links">
                    <SocialLink href="https://www.linkedin.com/company/freedaso/?viewAsMember=true">
                      <g clipPath="url(#clip0_1_216)" id="Social link 2">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p1fcf5070} fill="black" fillOpacity="0.45" fillRule="evenodd" />
                          <path d={svgPaths.pe7ea00} fill="var(--fill-0, white)" />
                          <path d={svgPaths.p1ab31680} fill="var(--fill-0, white)" />
                          <path d={svgPaths.p28c6df0} fill="var(--fill-0, white)" />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_216">
                          <rect fill="white" height="24" width="24" />
                        </clipPath>
                      </defs>
                    </SocialLink>
                  </nav>
                </FadeIn>

                {/* Right content - Nav columns */}
                <FadeIn delay={200} direction="right" className="grid grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-[40px] flex-1 lg:-mt-8 xl:-mt-12" data-name="Nav">
                  {/* Column 1 - Applications */}
                  <nav className="flex flex-col gap-[8px]" data-name="Column 1">
                    <div className="pb-4 lg:pb-[16px]">
                      <p className="font-trap font-semibold text-[20px] sm:text-[24px] text-black leading-[1.2] capitalize">Applications</p>
                    </div>
                    <a href="/use-cases" className="font-inter font-medium text-[14px] sm:text-[16px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">Use Cases</a>
                    <a href="/case-study" className="font-inter font-medium text-[14px] sm:text-[16px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">Case Study</a>
                  </nav>

                  {/* Column 2 - Company */}
                  <nav className="flex flex-col gap-[8px]" data-name="Column 3">
                    <div className="pb-4 lg:pb-[16px]">
                      <p className="font-trap font-semibold text-[20px] sm:text-[24px] text-black leading-[1.2] capitalize">Company</p>
                    </div>
                    <a href="/working-with-freeda" className="font-inter font-medium text-[14px] sm:text-[16px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">Working with Freeda</a>
                    <a href="https://freeda-so.notion.site/Freeda-Careers-2065c01c88ed80259519e83d67a331aa" target="_blank" rel="noopener noreferrer" className="font-inter font-medium text-[14px] sm:text-[16px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">Careers</a>
                    <a href="/legal" className="font-inter font-medium text-[14px] sm:text-[16px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">Legal</a>
                  </nav>
                </FadeIn>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
