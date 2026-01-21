import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Navigation from "@/components/Navigation";

/**
 * Props for `UseCaseHero`.
 */
export type UseCaseHeroProps = SliceComponentProps<Content.UseCaseHeroSlice>;

/**
 * Component for "UseCaseHero" Slices.
 */
const UseCaseHero: FC<UseCaseHeroProps> = ({ slice }) => {
  return (
    <div className="bg-[#202020] relative w-full" data-name="Hero">
      {/* Navigation */}
      <Navigation theme="dark" />

      {/* Desktop layout (xl+) */}
      <div className="hidden xl:block h-[1050px]">
        {/* Background floor plan image */}
        <div className="absolute left-0 mix-blend-lighten size-[712px] top-[131px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src="/images/6c7c028e74db5ea2c485a653344802bd08faf5a5.png" />
          </div>
        </div>

        {/* Images wrapper - both images scale together as one unit */}
        <div className="absolute left-[-400px] top-[250px] w-[1200px] h-[674px] origin-top-left scale-[0.85] min-[1400px]:scale-[0.95] min-[1500px]:scale-100 min-[1600px]:scale-105 min-[1800px]:scale-110">
          {/* Large grayscale report screenshot - back */}
          <div className="absolute h-[674px] left-0 top-0 pointer-events-none rounded-[10px] w-[1138.935px] grayscale">
            <img alt="" className="absolute inset-0 max-w-none object-center object-cover rounded-[10px] size-full" src="/images/6478d52c5db017fb5e4c6a867bd0123e67f6bc69.png" />
            <div aria-hidden="true" className="absolute border-8 border-[rgba(0,0,0,0.02)] border-solid inset-[-8px] rounded-[18px]" />
          </div>

          {/* Small color screenshot - front, fixed position relative to back */}
          <div className="absolute h-[553px] left-[777px] rounded-[10px] top-[55px] w-[407px]">
            <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[10px] size-full" src="/images/67b9bbfe06c9bbfdd83967f7ba2e655e69ba1480.png" />
          </div>
        </div>

        {/* Red vertical line with gradient */}
        <div className="absolute flex h-[982px] items-center justify-center left-[559.52px] top-0 w-0">
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <div className="h-[977.217px] relative w-0">
              <div className="absolute inset-[0_-0.63px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.2593 977.217">
                  <path d="M0.62965 0V977.217" stroke="url(#paint0_linear_use_case)" strokeWidth="1.2593" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_use_case" x1="1.11405" x2="1.11405" y1="114.734" y2="953.479">
                      <stop stopColor="#EC0606" />
                      <stop offset="1" stopColor="white" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Red dot on line */}
        <div className="absolute left-[557px] size-[5.037px] top-[404.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.0372 5.0372">
            <circle cx="2.5186" cy="2.5186" fill="#EC0606" r="2.5186" />
          </svg>
        </div>

        {/* 1345 text */}
        <div className="absolute flex flex-col font-mono justify-center leading-[0] left-[579.67px] not-italic text-[#ec0606] text-[20px] top-[406px] tracking-[-1px] -translate-y-1/2 uppercase">
          <p className="leading-[normal]">1345</p>
        </div>

        {/* Text content - vertically centered, responsive positioning */}
        <div className="absolute content-stretch flex flex-col gap-[29px] items-start left-[700px] min-[1400px]:left-[820px] min-[1500px]:left-[900px] min-[1600px]:left-[980px] min-[1800px]:left-[1080px] top-1/2 -translate-y-1/2 w-[420px] min-[1400px]:w-[480px] min-[1500px]:w-[523px]">
          {/* Badge */}
          <div className="bg-[#555] content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[16px] py-[7px] relative rounded-[5px] shrink-0">
            <div className="relative shrink-0 size-[8px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                <circle cx="4" cy="4" fill="#F02C2C" r="4" />
              </svg>
            </div>
            <p className="font-mono leading-[1.2] not-italic relative shrink-0 text-[18px] text-nowrap text-white">Uses cases</p>
          </div>

          {/* Title */}
          <div className="content-stretch flex flex-col gap-[21px] items-start leading-[0] not-italic relative shrink-0 w-full">
            <div className="flex flex-col font-trap font-semibold justify-center leading-[1.1] relative shrink-0 text-[64px] text-white tracking-[-1.6px] w-full">
              <h1 className="block mb-0">{`Real use. `}</h1>
              <h1 className="block">Real impact.</h1>
            </div>
            <div className="flex flex-col font-inter font-normal justify-center relative shrink-0 text-[24px] text-white/65 tracking-[-0.12px] w-full">
              <p className="leading-[1.45]">Freeda is not used in theory. It is applied on real projects, under real regulatory and operational constraints.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet/Mobile layout (below xl) - stacked vertical layout */}
      <div className="xl:hidden flex flex-col min-h-screen">
        {/* Images section */}
        <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] mt-[80px]">
          {/* Background floor plan image */}
          <div className="absolute left-0 mix-blend-lighten w-[60%] max-w-[400px] aspect-square top-0 hidden md:block">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src="/images/6c7c028e74db5ea2c485a653344802bd08faf5a5.png" />
            </div>
          </div>

          {/* Large report screenshot */}
          <div className="absolute h-[85%] left-[5%] pointer-events-none rounded-[10px] top-[10%] w-[85%] sm:w-[80%] md:w-[75%]">
            <div className="absolute inset-0 overflow-hidden rounded-[10px]">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full grayscale object-cover" src="/images/6478d52c5db017fb5e4c6a867bd0123e67f6bc69.png" />
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.02)] border-solid inset-[-2px] rounded-[12px]" />
          </div>

          {/* Small color screenshot - foreground */}
          <div className="absolute h-[70%] left-[25%] sm:left-[30%] md:left-[35%] overflow-clip rounded-[10px] top-[20%] w-[45%] sm:w-[40%] md:w-[35%] hidden sm:block">
            <div className="absolute inset-0">
              <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src="/images/67b9bbfe06c9bbfdd83967f7ba2e655e69ba1480.png" />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-[16px] sm:gap-[20px] items-start px-5 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-12 md:py-16 w-full">
          {/* Badge */}
          <div className="bg-[#555] flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[6px] rounded-[5px]">
            <div className="size-[6px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                <circle cx="4" cy="4" fill="#F02C2C" r="4" />
              </svg>
            </div>
            <p className="font-mono leading-[1.2] text-[14px] sm:text-[16px] text-nowrap text-white">Uses cases</p>
          </div>

          {/* Title */}
          <div className="flex flex-col font-trap font-semibold leading-[1.1] text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] text-white w-full">
            <h1 className="block mb-0">{`Real use. `}</h1>
            <h1 className="block">Real impact.</h1>
          </div>

          {/* Description */}
          <div className="flex flex-col font-inter font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-white/65 tracking-[-0.12px] w-full max-w-[600px]">
            <p className="leading-[1.45]">Freeda is not used in theory. It is applied on real projects, under real regulatory and operational constraints.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseCaseHero;
