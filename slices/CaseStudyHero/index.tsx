import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Navigation from "@/components/Navigation";

/**
 * Props for `CaseStudyHero`.
 */
export type CaseStudyHeroProps =
  SliceComponentProps<Content.CaseStudyHeroSlice>;

/**
 * Component for "CaseStudyHero" Slices.
 */
const CaseStudyHero: FC<CaseStudyHeroProps> = ({ slice }) => {
  return (
    <div className="bg-[#202020] relative w-full overflow-hidden" data-name="Hero">
      {/* Navigation */}
      <Navigation theme="dark" />

      {/* Desktop layout (xl+) */}
      <div className="hidden xl:block h-[982px] w-full relative">
        {/* Background floor plan image - mix-blend-lighten */}
        <div className="absolute left-[116px] mix-blend-lighten size-[712px] top-[141px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src="/images/6c7c028e74db5ea2c485a653344802bd08faf5a5.png" />
          </div>
        </div>

        {/* Main Floor Plan Card with Annotations - positioned from left edge */}
        <div className="absolute bg-white border-[7px] border-[#f2f2f2] rounded-[9px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] left-[-350px] top-[325px] w-[1036px] h-[613px] flex items-center justify-center overflow-hidden">
          {/* Floor plan image inside card */}
          <img
            alt="Floor plan"
            className="absolute w-[863px] h-[571px] object-cover"
            src="/images/hero-floor-plan-main.png"
          />

          {/* Red Circle Annotation */}
          <div className="absolute left-[380px] top-[230px] w-[66px] h-[66px]">
            <img src="/images/hero-red-circle.png" alt="" className="w-full h-full" />
          </div>

          {/* Green Check Annotations */}
          <img src="/images/hero-green-check.png" alt="" className="absolute w-[32px] h-[32px] left-[427px] top-[192px]" />
          <img src="/images/hero-green-check.png" alt="" className="absolute w-[25px] h-[25px] left-[443px] top-[110px]" />
          <img src="/images/hero-green-check.png" alt="" className="absolute w-[30px] h-[30px] left-[680px] top-[61px]" />
          <img src="/images/hero-green-check.png" alt="" className="absolute w-[32px] h-[32px] left-[427px] top-[119px]" />
          <img src="/images/hero-green-check.png" alt="" className="absolute w-[46px] h-[46px] left-[380px] top-[420px]" />
          <img src="/images/hero-green-check.png" alt="" className="absolute w-[17px] h-[17px] left-[838px] top-[158px]" />
          <img src="/images/hero-green-check.png" alt="" className="absolute w-[18px] h-[18px] left-[660px] top-[149px]" />

          {/* Tooltip Card */}
          <div className="absolute flex flex-col gap-1 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] left-[469px] top-[165px] w-[431px]">
            {/* Non-Compliant Badge */}
            <div className="flex items-center gap-1.5 bg-[#FFE5E5] rounded-[4px] px-2 py-1 w-fit">
              <div className="w-4 h-4 rounded-full bg-[#F02C2C] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 10 10" className="w-2.5 h-2.5">
                  <path d="M2.5 2.5L7.5 7.5M7.5 2.5L2.5 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-mono text-[12px] text-[#F02C2C] whitespace-nowrap font-medium">Non-Compliant</span>
            </div>
            {/* Dropdown Card */}
            <div className="flex items-center gap-2 bg-white rounded-[4px] px-3 py-2 border border-gray-200">
              <svg className="w-3 h-3 text-gray-500 flex-shrink-0" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="w-2 h-2 rounded-full bg-[#F02C2C] flex-shrink-0" />
              <span className="font-inter text-[12px] text-black whitespace-nowrap">Kitchen wheelchair turning circle (Ø 1.5 m)</span>
              <div className="w-3 h-3 border border-gray-300 rounded-sm ml-auto flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* Small color screenshot overlay */}
        <div className="absolute h-[553px] left-[342px] overflow-clip rounded-[10px] top-[260px] w-[407px]">
          <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="/images/1464d2a6761181a16640ae6b4d5125ddc1739c02.png" />
        </div>

        {/* First Red vertical line with gradient (left) */}
        <div className="absolute flex h-[977px] items-center justify-center left-[526px] top-[-15px] w-0">
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <div className="h-[977px] relative w-0">
              <div className="absolute inset-[0_-0.63px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.2593 977">
                  <path d="M0.62965 0V977" stroke="url(#paint0_linear_case_study_1)" strokeWidth="1.2593" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_case_study_1" x1="1.11405" x2="1.11405" y1="114.734" y2="953.479">
                      <stop stopColor="#EC0606" />
                      <stop offset="1" stopColor="white" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* First Red dot on line (left) */}
        <div className="absolute left-[523px] size-[5.037px] top-[390px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.0372 5.0372">
            <circle cx="2.5186" cy="2.5186" fill="#EC0606" r="2.5186" />
          </svg>
        </div>

        {/* 328OO text (left line) */}
        <div className="absolute flex flex-col font-mono justify-center leading-[0] left-[546px] not-italic text-[#ec0606] text-[20px] top-[391px] tracking-[-1px] -translate-y-1/2 uppercase">
          <p className="leading-[normal]">328OO</p>
        </div>

        {/* Second Red vertical line with gradient (right) */}
        <div className="absolute flex h-[982px] items-center justify-center left-[630px] top-0 w-0">
          <div className="flex-none rotate-[180deg]">
            <div className="h-[982px] relative w-0">
              <div className="absolute inset-[0_-0.63px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.2593 982">
                  <path d="M0.62965 0V982" stroke="url(#paint0_linear_case_study_2)" strokeWidth="1.2593" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_case_study_2" x1="1.11405" x2="1.11405" y1="114.734" y2="953.479">
                      <stop stopColor="#EC0606" />
                      <stop offset="1" stopColor="white" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Second Red dot on line (right) */}
        <div className="absolute left-[627px] size-[5.037px] top-[704px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.0372 5.0372">
            <circle cx="2.5186" cy="2.5186" fill="#EC0606" r="2.5186" />
          </svg>
        </div>

        {/* 888OO text (right line) */}
        <div className="absolute flex flex-col font-mono justify-center leading-[0] left-[650px] not-italic text-[#ec0606] text-[20px] top-[705px] tracking-[-1px] -translate-y-1/2 uppercase">
          <p className="leading-[normal]">888OO</p>
        </div>

        {/* Text content - right side */}
        <div className="absolute content-stretch flex flex-col gap-[25px] items-start right-[80px] top-1/2 -translate-y-1/2 w-[523px]">
          {/* Badge */}
          <div className="bg-[#555] content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[16px] py-[7px] relative rounded-[5px] shrink-0">
            <div className="relative shrink-0 size-[8px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                <circle cx="4" cy="4" fill="#F02C2C" r="4" />
              </svg>
            </div>
            <p className="font-mono leading-[1.2] not-italic relative shrink-0 text-[18px] text-nowrap text-white">Cases Study</p>
          </div>

          {/* Title */}
          <div className="flex flex-col font-trap font-semibold justify-center leading-[1.1] not-italic relative shrink-0 text-[64px] text-white w-full">
            <h1 className="block mb-0">{`Built for `}</h1>
            <h1 className="block">real cases</h1>
          </div>

          {/* Description */}
          <div className="flex flex-col font-inter font-normal justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.12px] w-full">
            <p className="leading-[1.45]">Freeda is not used in theory. It is applied on real projects, under real regulatory and operational constraints.</p>
          </div>
        </div>
      </div>

      {/* Tablet/Mobile layout (below xl) - same composition as desktop, scaled */}
      <div className="xl:hidden flex flex-col min-h-screen">
        {/* Images section - scaled desktop composition */}
        <div className="relative w-full h-[350px] sm:h-[400px] md:h-[480px] lg:h-[550px] mt-[80px] overflow-hidden">
          {/* Background floor plan image */}
          <div className="absolute left-[-5%] mix-blend-lighten w-[50%] sm:w-[45%] aspect-square top-0">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src="/images/6c7c028e74db5ea2c485a653344802bd08faf5a5.png" />
            </div>
          </div>

          {/* Floor Plan Card - scaled from desktop */}
          <div className="absolute bg-white border-[4px] sm:border-[5px] md:border-[6px] border-[#f2f2f2] rounded-[6px] sm:rounded-[8px] shadow-lg left-[-20%] sm:left-[-15%] md:left-[-10%] top-[15%] w-[75%] sm:w-[70%] md:w-[65%] h-[75%] sm:h-[80%] flex items-center justify-center overflow-hidden">
            <img
              alt="Floor plan"
              className="absolute w-full h-full object-cover"
              src="/images/hero-floor-plan-main.png"
            />
          </div>

          {/* Small color screenshot - overlapping */}
          <div className="absolute h-[65%] sm:h-[70%] left-[30%] sm:left-[35%] md:left-[40%] overflow-clip rounded-[8px] sm:rounded-[10px] top-[20%] sm:top-[18%] w-[45%] sm:w-[40%] md:w-[35%]">
            <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="/images/1464d2a6761181a16640ae6b4d5125ddc1739c02.png" />
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-[16px] sm:gap-[20px] items-start px-5 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 md:py-14 w-full">
          {/* Badge */}
          <div className="bg-[#555] flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[6px] rounded-[5px]">
            <div className="size-[6px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                <circle cx="4" cy="4" fill="#F02C2C" r="4" />
              </svg>
            </div>
            <p className="font-mono leading-[1.2] text-[14px] sm:text-[16px] text-nowrap text-white">Cases Study</p>
          </div>

          {/* Title */}
          <div className="flex flex-col font-trap font-semibold leading-[1.1] text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] text-white w-full">
            <h1 className="block mb-0">{`Built for `}</h1>
            <h1 className="block">real cases</h1>
          </div>

          {/* Description */}
          <div className="flex flex-col font-inter font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-white tracking-[-0.12px] w-full max-w-[600px]">
            <p className="leading-[1.45]">Freeda is not used in theory. It is applied on real projects, under real regulatory and operational constraints.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyHero;
