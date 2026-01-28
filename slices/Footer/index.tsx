"use client";

import type { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import FadeIn from "@/components/FadeIn";

export type FooterProps = SliceComponentProps<Content.FooterSlice>;

const svgPaths = {
  p1ab31680: "M4.899 2.54395C3.52364 2.54395 2.625 3.44816 2.625 4.6333C2.625 5.79355 3.49631 6.72271 4.8458 6.72271H4.87177C6.27347 6.72271 7.14595 5.79355 7.14595 4.6333C7.11994 3.44816 6.27356 2.54395 4.899 2.54395Z",
  p1fcf5070: "M24 3C24 1.34423 22.6558 0 21 0H3C1.34423 0 0 1.34423 0 3V21C0 22.6558 1.34423 24 3 24H21C22.6558 24 24 22.6558 24 21V3Z",
  p28c6df0: "M16.7475 8.08984C14.6151 8.08984 13.66 9.26252 13.1252 10.0862V8.37419H9.1062C9.1595 9.50842 9.1062 20.4661 9.1062 20.4661H13.1251V13.7131C13.1251 13.3517 13.1511 12.9903 13.2576 12.732C13.5477 12.0101 14.2094 11.2623 15.3198 11.2623C16.7735 11.2623 17.3559 12.3716 17.3559 13.9964V20.4661H21.375V13.5319C21.375 9.81766 19.3919 8.08984 16.7475 8.08984Z",
  p3c382d72: "M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z",
  pdaf0200: "M18.9 1.15283H22.582L14.54 10.3418L24 22.8478H16.595L10.791 15.2648L4.157 22.8478H0.469L9.069 13.0168L0 1.15283H7.593L12.834 8.08383L18.9 1.15283ZM17.607 20.6468H19.646L6.482 3.23883H4.292L17.607 20.6468Z",
  pe7ea00: "M6.88157 8.37402H2.86157V20.466H6.88157V8.37402Z",
};

function SocialLink({ children }: React.PropsWithChildren<{}>) {
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
                    <p className="font-inter font-medium text-[16px] text-black/55 leading-[1.45] tracking-[-0.11px]">
                      Descriptive line about what your company does.
                    </p>
                    <nav className="flex gap-5 items-center">
                      <SocialLink>
                        <g clipPath="url(#clip0_mobile_1)">
                          <path d={svgPaths.p3c382d72} fill="black" fillOpacity="0.45" />
                        </g>
                        <defs>
                          <clipPath id="clip0_mobile_1">
                            <rect fill="white" height="24" width="24" />
                          </clipPath>
                        </defs>
                      </SocialLink>
                      <SocialLink>
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
                      <SocialLink>
                        <path d={svgPaths.pdaf0200} fill="black" fillOpacity="0.45" />
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

                    {/* Column 2 - Resources */}
                    <nav className="flex flex-col gap-2">
                      <div className="pb-3">
                        <p className="font-trap font-semibold text-[18px] text-black leading-[1.2] capitalize">Resources</p>
                      </div>
                      <a href="/resources#video" className="font-inter font-medium text-[14px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">Short Video</a>
                      <a href="/blog" className="font-inter font-medium text-[14px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">Articles</a>
                      <a href="/resources#news" className="font-inter font-medium text-[14px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">News Room</a>
                    </nav>

                    {/* Column 3 - Company */}
                    <nav className="flex flex-col gap-2 col-span-2">
                      <div className="pb-3">
                        <p className="font-trap font-semibold text-[18px] text-black leading-[1.2] capitalize">Company</p>
                      </div>
                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <a href="/working-with-freeda" className="font-inter font-medium text-[14px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">Working with Freeda</a>
                        <a href="/careers" className="font-inter font-medium text-[14px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">Careers</a>
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
                  <div className="flex flex-col gap-3" data-name="Text">
                    <p className="font-inter font-medium text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-black/55 leading-[1.45] tracking-[-0.11px]">
                      Descriptive line about what your company does.
                    </p>
                  </div>
                  <nav className="flex gap-5 md:gap-6 lg:gap-[28px] items-center" data-name="Social links">
                    <SocialLink>
                      <g clipPath="url(#clip0_1_219)" id="Social link 1">
                        <path d={svgPaths.p3c382d72} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_219">
                          <rect fill="white" height="24" width="24" />
                        </clipPath>
                      </defs>
                    </SocialLink>
                    <SocialLink>
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
                    <SocialLink>
                      <g id="Social link 3">
                        <path d={svgPaths.pdaf0200} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
                      </g>
                    </SocialLink>
                  </nav>
                </FadeIn>

                {/* Right content - Nav columns */}
                <FadeIn delay={200} direction="right" className="grid grid-cols-3 gap-8 md:gap-10 lg:gap-12 xl:gap-[40px] flex-1 lg:-mt-8 xl:-mt-12" data-name="Nav">
                  {/* Column 1 - Applications */}
                  <nav className="flex flex-col gap-[8px]" data-name="Column 1">
                    <div className="pb-4 lg:pb-[16px]">
                      <p className="font-trap font-semibold text-[20px] sm:text-[24px] text-black leading-[1.2] capitalize">Applications</p>
                    </div>
                    <a href="/use-cases" className="font-inter font-medium text-[14px] sm:text-[16px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">Use Cases</a>
                    <a href="/case-study" className="font-inter font-medium text-[14px] sm:text-[16px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">Case Study</a>
                  </nav>

                  {/* Column 2 - Resources */}
                  <nav className="flex flex-col gap-[8px]" data-name="Column 2">
                    <div className="pb-4 lg:pb-[16px]">
                      <p className="font-trap font-semibold text-[20px] sm:text-[24px] text-black leading-[1.2] capitalize">Resources</p>
                    </div>
                    <a href="/resources#video" className="font-inter font-medium text-[14px] sm:text-[16px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">Short Video</a>
                    <a href="/blog" className="font-inter font-medium text-[14px] sm:text-[16px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">Articles</a>
                    <a href="/resources#news" className="font-inter font-medium text-[14px] sm:text-[16px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">News Room</a>
                  </nav>

                  {/* Column 3 - Company */}
                  <nav className="flex flex-col gap-[8px]" data-name="Column 3">
                    <div className="pb-4 lg:pb-[16px]">
                      <p className="font-trap font-semibold text-[20px] sm:text-[24px] text-black leading-[1.2] capitalize">Company</p>
                    </div>
                    <a href="/working-with-freeda" className="font-inter font-medium text-[14px] sm:text-[16px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">Working with Freeda</a>
                    <a href="/careers" className="font-inter font-medium text-[14px] sm:text-[16px] text-black/55 leading-[1.45] tracking-[-0.08px] hover:text-black transition-colors">Careers</a>
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
