"use client";

import { useState, useRef, useEffect } from "react";
import type { HeroSlice } from "@/prismicio-types";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import FadeIn from "@/components/FadeIn";

export type HeroProps = SliceComponentProps<HeroSlice>;

const Hero = ({ slice }: HeroProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
      className="relative w-full h-[700px] sm:h-[800px] md:h-[900px] xl:h-[982px] bg-[#F2F2F2] overflow-hidden"
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

      {/* Decorative Red Dots with "12300" Labels */}
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
      <div className="relative z-[9999] flex items-center justify-between px-5 md:px-10 lg:px-14 py-6 md:py-8">
        {/* Left: Navigation */}
        <nav className="hidden md:flex items-center gap-8 z-10">
          {/* Applications Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="font-mono text-[16px] leading-[145%] text-black no-underline hover:opacity-70 transition-opacity flex items-center gap-1"
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
          <a href="/working-with-freeda" className="font-mono text-[16px] leading-[145%] text-black no-underline hover:opacity-70 transition-opacity">
            Working with Freeda
          </a>
          <a href="/resources" className="font-mono text-[16px] leading-[145%] text-black no-underline hover:opacity-70 transition-opacity">
            Resources
          </a>
        </nav>

        {/* Center: Logo */}
        <a href="/" className="flex items-center no-underline hover:opacity-80 transition-opacity absolute left-1/2 -translate-x-1/2 z-0">
          <img
            src="/images/freeda-logo-dark.svg"
            alt="Freeda"
            className="h-8 md:h-10 lg:h-12 w-auto"
          />
        </a>

        {/* Right: Contact Button */}
        <PrismicNextLink
          field={slice.primary.header_button_link}
          className="hidden sm:flex items-center justify-center px-4 py-3 bg-[#F2F2F2] border-2 border-black/15 rounded-[9px] font-mono text-sm lg:text-[18px] leading-[145%] text-black no-underline hover:bg-black/5 transition-colors z-10"
        >
          {slice.primary.header_button_text || "Discuss a project"}
        </PrismicNextLink>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-[1250px] mx-auto px-5 md:px-10">
        {/* Hero Content */}
        <div className="flex flex-col items-center text-center pt-8 md:pt-12 lg:pt-16 xl:pt-20">
          {/* Title */}
          <FadeIn delay={100}>
            <h1 className="font-trap text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-semibold leading-[1.1] tracking-[-1.6px] text-black max-w-[1152px] whitespace-pre-line">
              {slice.primary.heading || "You build. We double-check."}
            </h1>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={200}>
            <div className="mt-4 md:mt-6 max-w-[705px] font-inter text-sm sm:text-base md:text-lg xl:text-[18px] font-normal leading-[145%] tracking-[-0.09px] text-black/65 [&_p]:m-0">
              {slice.primary.description && slice.primary.description.length > 0 ? (
                <PrismicRichText field={slice.primary.description} />
              ) : (
                <p>Construction risk starts long before the site opens. Freeda analyses plans and technical documents to detect errors early - before they turn into delays, redesigns, or disputes.</p>
              )}
            </div>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mt-6 md:mt-8">
              <PrismicNextLink
                field={slice.primary.primary_button_link}
                className="inline-flex items-center justify-center h-[50px] px-4 bg-[#F02C2C] rounded-[9px] font-mono text-base md:text-lg xl:text-[18px] leading-[145%] text-white no-underline hover:bg-[#d92626] transition-colors"
              >
                {slice.primary.primary_button_text || "Discuss a project"}
              </PrismicNextLink>
              <PrismicNextLink
                field={slice.primary.secondary_button_link}
                className="inline-flex items-center justify-center h-[50px] px-4 border-2 border-black/15 rounded-[9px] font-mono text-base md:text-lg xl:text-[18px] leading-[145%] text-black no-underline hover:border-black/30 transition-colors"
              >
                {slice.primary.secondary_button_text || "Explore use cases"}
              </PrismicNextLink>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Hero Image - fixed position from bottom */}
      <FadeIn delay={400} className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[95%] max-w-[1400px] translate-y-[10%] sm:translate-y-[5%] md:translate-y-[0%] xl:translate-y-[5%]">
        {slice.primary.hero_image?.url ? (
          <PrismicNextImage
            field={slice.primary.hero_image}
            className="w-full h-auto"
            priority
            fallbackAlt=""
          />
        ) : (
          <img
            src="/images/hero-dashboard.png"
            alt="Freeda Dashboard"
            className="w-full h-auto"
          />
        )}
      </FadeIn>
    </section>
  );
};

export default Hero;
