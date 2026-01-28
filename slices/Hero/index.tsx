"use client";

import { useState, useRef, useEffect } from "react";
import type { HeroSlice } from "@/prismicio-types";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import FadeIn from "@/components/FadeIn";
import Lottie from "lottie-react";
import heroFloorPlanAnimation from "../../public/animations/hero-floor-plan.json";

export type HeroProps = SliceComponentProps<HeroSlice>;

const Hero = ({ slice }: HeroProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full min-h-[550px] sm:min-h-[600px] md:min-h-[750px] lg:min-h-[900px] bg-[#F2F2F2] overflow-hidden"
    >
      {/* Floor Plan SVG Background Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: 'color-dodge' }}
      >
        <img
          src="/images/hero-floor-plan.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Vector 5 - Left Vertical Line (animated LED effect going up) */}
      <div className="absolute left-[28%] top-0 w-[1.26px] h-full pointer-events-none hidden lg:block z-20 hero-line-left" />

      {/* Vector 7 - Right Vertical Line (animated LED effect going down) */}
      <div className="absolute right-[26%] top-0 w-[1.26px] h-full pointer-events-none hidden lg:block z-20 hero-line-right" />

      {/* Decorative Red Dots with "12300" Labels - Desktop only */}
      {/* Top Left - near Vector 5 (moved up to avoid title overlap) */}
      <div className="absolute left-[28%] top-[10%] hidden lg:flex items-start gap-2 pointer-events-none z-20 -translate-x-[2.5px] hero-number-left-1">
        <div className="w-[5px] h-[5px] rounded-full bg-[#F02C2C] mt-2" />
        <span className="font-mono text-[20px] text-[#F02C2C] tracking-[-1px] uppercase">12300</span>
      </div>

      {/* Middle Left - near Vector 5 */}
      <div className="absolute left-[28%] top-[60%] hidden lg:flex items-start gap-2 pointer-events-none z-20 -translate-x-[2.5px] hero-number-left-2">
        <div className="w-[5px] h-[5px] rounded-full bg-[#F02C2C] mt-2" />
        <span className="font-mono text-[20px] text-[#F02C2C] tracking-[-1px] uppercase">12300</span>
      </div>

      {/* Bottom Left - near Vector 5 */}
      <div className="absolute left-[28%] top-[70.5%] hidden lg:flex items-start gap-2 pointer-events-none z-20 -translate-x-[2.5px] hero-number-left-3">
        <div className="w-[5px] h-[5px] rounded-full bg-[#F02C2C] mt-2" />
        <span className="font-mono text-[20px] text-[#F02C2C] tracking-[-1px] uppercase">12300</span>
      </div>

      {/* Far Left Bottom */}
      <div className="absolute left-[15%] top-[81%] hidden lg:flex items-start gap-2 pointer-events-none z-20 -translate-x-[2.5px] hero-number-left-4">
        <div className="w-[5px] h-[5px] rounded-full bg-[#F02C2C] mt-2" />
        <span className="font-mono text-[20px] text-[#F02C2C] tracking-[-1px] uppercase">12300</span>
      </div>

      {/* Top Right - dot at top level of number */}
      <div className="absolute right-[26%] top-[14%] hidden lg:flex items-start gap-2 pointer-events-none z-20 translate-x-[calc(100%-2.75px)] hero-number-right-1">
        <div className="w-[5px] h-[5px] rounded-full bg-[#F02C2C] mt-2" />
        <span className="font-mono text-[20px] text-[#F02C2C] tracking-[-1px] uppercase">12300</span>
      </div>

      {/* Upper Middle Right - number centered on line */}
      <div className="absolute right-[26%] top-[27%] hidden lg:flex items-center pointer-events-none z-20 translate-x-[28%] hero-number-right-2">
        <span className="font-mono text-[20px] text-[#F02C2C] tracking-[-1px] uppercase">12300</span>
      </div>

      {/* Middle Right - dot at top level of number */}
      <div className="absolute right-[26%] top-[60%] hidden lg:flex items-start gap-2 pointer-events-none z-20 translate-x-[200%] hero-number-right-3">
        <div className="w-[5px] h-[5px] rounded-full bg-[#F02C2C] mt-2" />
        <span className="font-mono text-[20px] text-[#F02C2C] tracking-[-1px] uppercase">12300</span>
      </div>

      {/* Header - Full width */}
      <div className="relative z-[9999] flex items-center justify-between px-5 md:px-10 lg:px-14 py-4 md:py-6 lg:py-8">
        {/* Left: Navigation - hidden until 2xl to prevent overlap with logo */}
        <nav className="hidden 2xl:flex items-center gap-6 z-10">
          {/* Applications Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="font-mono text-[15px] leading-[145%] text-black no-underline hover:opacity-70 transition-opacity flex items-center gap-1"
            >
              Applications
              <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-[10000]">
                <a href="/case-study" className="block px-4 py-3 font-mono text-[14px] text-black no-underline hover:bg-gray-100 rounded-t-lg transition-colors">
                  Case Study
                </a>
                <a href="/use-cases" className="block px-4 py-3 font-mono text-[14px] text-black no-underline hover:bg-gray-100 rounded-b-lg transition-colors">
                  Use Cases
                </a>
              </div>
            )}
          </div>
          <a href="/working-with-freeda" className="font-mono text-[15px] leading-[145%] text-black no-underline hover:opacity-70 transition-opacity whitespace-nowrap">
            Working with Freeda
          </a>
          <a href="/blog" className="font-mono text-[15px] leading-[145%] text-black no-underline hover:opacity-70 transition-opacity">
            Blog
          </a>
        </nav>

        {/* Mobile Menu Button - show below 2xl */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="2xl:hidden flex flex-col justify-center items-center w-10 h-10 z-[10001]"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black my-1 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>

        {/* Center: Logo */}
        <a href="/" className="flex items-center no-underline hover:opacity-80 transition-opacity absolute left-1/2 -translate-x-1/2 z-0">
          <img
            src="/images/freeda-logo-dark.svg"
            alt="Freeda"
            className="h-7 sm:h-8 md:h-10 lg:h-12 w-auto"
          />
        </a>

        {/* Right: Contact Button */}
        <a
          href="https://freeda-so.notion.site/Freeda-Careers-2065c01c88ed80259519e83d67a331aa"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center justify-center px-3 md:px-4 py-2 md:py-3 bg-[#F2F2F2] border-2 border-black/15 rounded-[9px] font-mono text-xs sm:text-sm lg:text-[16px] xl:text-[18px] leading-[145%] text-black no-underline hover:bg-black/5 transition-colors z-10"
        >
          {slice.primary.header_button_text || "Discuss a project"}
        </a>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#F2F2F2] z-[10000] 2xl:hidden pt-20 px-6">
          <nav className="flex flex-col gap-6">
            <a href="/case-study" className="font-mono text-[18px] text-black no-underline hover:opacity-70 transition-opacity">
              Case Study
            </a>
            <a href="/use-cases" className="font-mono text-[18px] text-black no-underline hover:opacity-70 transition-opacity">
              Use Cases
            </a>
            <a href="/working-with-freeda" className="font-mono text-[18px] text-black no-underline hover:opacity-70 transition-opacity">
              Working with Freeda
            </a>
            <a href="/blog" className="font-mono text-[18px] text-black no-underline hover:opacity-70 transition-opacity">
              Blog
            </a>
            <a
              href="https://freeda-so.notion.site/Freeda-Careers-2065c01c88ed80259519e83d67a331aa"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center px-4 py-3 bg-[#F02C2C] rounded-[9px] font-mono text-[18px] text-white no-underline transition-colors"
            >
              Discuss a project
            </a>
          </nav>
        </div>
      )}

      {/* Main Container */}
      <div className="relative z-10 max-w-[1152px] mx-auto px-5 md:px-10">
        {/* Hero Content - Figma: gap-[27px] between elements */}
        <div className="flex flex-col items-center text-center pt-2 sm:pt-4 md:pt-6 lg:pt-8 gap-4 sm:gap-5 md:gap-6 lg:gap-[27px]">
          {/* Title - Figma: Trap 64px Semi Bold, leading-none, capitalize */}
          <FadeIn delay={100}>
            <h1 className="font-trap text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-semibold leading-[1.05] text-black max-w-[1152px] whitespace-pre-line capitalize">
              {slice.primary.heading || "You build.\nWe de-risk."}
            </h1>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={200}>
            <div className="max-w-[705px] font-inter text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-[1.5] tracking-[-0.09px] text-black/65 [&_p]:m-0 px-2 sm:px-0">
              {slice.primary.description && slice.primary.description.length > 0 ? (
                <PrismicRichText field={slice.primary.description} />
              ) : (
                <p>Construction risk starts long before the site opens. Freeda analyses plans and technical documents to detect errors early - before they turn into delays, redesigns, or disputes.</p>
              )}
            </div>
          </FadeIn>

          {/* CTA Buttons - Figma: gap-[16px] */}
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="https://freeda-so.notion.site/Freeda-Careers-2065c01c88ed80259519e83d67a331aa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 sm:py-3 bg-[#F02C2C] rounded-[9px] font-mono text-[14px] sm:text-[16px] leading-[1.1] text-white capitalize no-underline hover:bg-[#d92626] transition-colors w-full sm:w-auto"
              >
                {slice.primary.primary_button_text || "Discuss a project"}
              </a>
              <PrismicNextLink
                field={slice.primary.secondary_button_link}
                className="inline-flex items-center justify-center px-4 py-2.5 sm:py-3 bg-[#F2F2F2] border-2 border-black/15 rounded-[9px] font-mono text-[14px] sm:text-[16px] leading-[1.1] text-black capitalize no-underline hover:border-black/30 transition-colors w-full sm:w-auto"
              >
                {slice.primary.secondary_button_text || "Explore use cases"}
              </PrismicNextLink>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Hero Image Card - Floor plan with annotations */}
      {/* Figma: w-[1138.935px] h-[674px], px-[155px] py-[39px], positioned at bottom extending outside */}
      <FadeIn delay={400} className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[92%] sm:w-[95%] max-w-[1139px] translate-y-[30%] sm:translate-y-[35%] md:translate-y-[42%] lg:translate-y-[50%]">
        <div className="relative bg-white rounded-[8px] sm:rounded-[10px] border-[4px] sm:border-[6px] md:border-[8px] border-[#F2F2F2] shadow-[0px_4px_4px_7px_rgba(0,0,0,0.1)] px-3 sm:px-6 md:px-12 lg:px-[155px] py-3 sm:py-5 md:py-7 lg:py-[39px]">
          {/* Floor Plan Image Container - Figma: 949×628px */}
          <div className="relative w-full" style={{ paddingBottom: '66.17%' }}>
            {/* Floor Plan Lottie Animation */}
            <Lottie
              animationData={heroFloorPlanAnimation}
              loop={true}
              autoplay={true}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Hero;
