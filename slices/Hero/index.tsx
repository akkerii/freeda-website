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
      className="relative w-full min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] bg-[#F2F2F2] overflow-hidden"
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
      <div className="relative z-10 max-w-[1152px] mx-auto px-5 md:px-10">
        {/* Hero Content - Figma: gap-[27px] between elements */}
        <div className="flex flex-col items-center text-center pt-4 md:pt-6 lg:pt-8 gap-[27px]">
          {/* Title - Figma: Trap 64px Semi Bold, leading-none, capitalize */}
          <FadeIn delay={100}>
            <h1 className="font-trap text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-semibold leading-none text-black max-w-[1152px] whitespace-pre-line capitalize">
              {slice.primary.heading || "You build.\nWe de-risk."}
            </h1>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={200}>
            <div className="max-w-[705px] font-inter text-sm sm:text-base md:text-lg xl:text-[18px] font-normal leading-[145%] tracking-[-0.09px] text-black/65 [&_p]:m-0">
              {slice.primary.description && slice.primary.description.length > 0 ? (
                <PrismicRichText field={slice.primary.description} />
              ) : (
                <p>Construction risk starts long before the site opens. Freeda analyses plans and technical documents to detect errors early - before they turn into delays, redesigns, or disputes.</p>
              )}
            </div>
          </FadeIn>

          {/* CTA Buttons - Figma: gap-[16px] */}
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              <PrismicNextLink
                field={slice.primary.primary_button_link}
                className="inline-flex items-center justify-center px-4 py-3 bg-[#F02C2C] rounded-[9px] font-mono text-[16px] leading-[1.1] text-white capitalize no-underline hover:bg-[#d92626] transition-colors"
              >
                {slice.primary.primary_button_text || "Discuss a project"}
              </PrismicNextLink>
              <PrismicNextLink
                field={slice.primary.secondary_button_link}
                className="inline-flex items-center justify-center px-4 py-3 bg-[#F2F2F2] border-2 border-black/15 rounded-[9px] font-mono text-[16px] leading-[1.1] text-black capitalize no-underline hover:border-black/30 transition-colors"
              >
                {slice.primary.secondary_button_text || "Explore use cases"}
              </PrismicNextLink>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Hero Image Card - Floor plan with annotations */}
      {/* Figma: w-[1138.935px] h-[674px], px-[155px] py-[39px], positioned at bottom extending outside */}
      <FadeIn delay={400} className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[95%] max-w-[1139px] translate-y-[35%] sm:translate-y-[40%] md:translate-y-[45%] lg:translate-y-[50%]">
        <div className="relative bg-white rounded-[10px] border-[8px] border-[#F2F2F2] shadow-[0px_4px_4px_7px_rgba(0,0,0,0.1)] px-4 sm:px-8 md:px-16 lg:px-[155px] py-4 sm:py-6 md:py-8 lg:py-[39px]">
          {/* Floor Plan Image Container - Figma: 949×628px */}
          <div className="relative w-full" style={{ paddingBottom: '66.17%' }}>
            {/* Floor Plan Image */}
            <img
              src="/images/hero-floor-plan-main.png"
              alt="Floor Plan Analysis"
              className="absolute inset-0 w-full h-full object-contain"
            />

            {/* Large Red Semi-transparent Circle - Figma: left:543px top:230px size:73px */}
            {/* Percentages: left: 47.7%, top: 34.1%, size: 6.4% */}
            <img
              src="/images/hero-red-circle.png"
              alt=""
              className="absolute"
              style={{ left: '47.7%', top: '34.1%', width: '6.4%', height: 'auto' }}
            />

            {/* Green Checkmark 1 - Figma: left:595px top:189px size:35px */}
            {/* Percentages: left: 52.2%, top: 28.0%, size: 3.1% */}
            <img
              src="/images/hero-annotation-green.png"
              alt=""
              className="absolute"
              style={{ left: '52.2%', top: '28.0%', width: '3.1%', height: 'auto' }}
            />

            {/* Green Checkmark 2 - Figma: left:613px top:99px size:28px */}
            {/* Percentages: left: 53.8%, top: 14.7%, size: 2.5% */}
            <img
              src="/images/hero-annotation-green.png"
              alt=""
              className="absolute"
              style={{ left: '53.8%', top: '14.7%', width: '2.5%', height: 'auto' }}
            />

            {/* Red X 1 (top right area) - Figma: left:873px top:45px size:33px */}
            {/* Percentages: left: 76.6%, top: 6.7%, size: 2.9% */}
            <img
              src="/images/hero-annotation-red.png"
              alt=""
              className="absolute"
              style={{ left: '76.6%', top: '6.7%', width: '2.9%', height: 'auto' }}
            />

            {/* Red X 2 - Figma: left:595px top:109px size:35px */}
            {/* Percentages: left: 52.2%, top: 16.2%, size: 3.1% */}
            <img
              src="/images/hero-annotation-red.png"
              alt=""
              className="absolute"
              style={{ left: '52.2%', top: '16.2%', width: '3.1%', height: 'auto' }}
            />

            {/* Red X 3 (large, bottom area) - Figma: left:544px top:439px size:51px */}
            {/* Percentages: left: 47.8%, top: 65.1%, size: 4.5% */}
            <img
              src="/images/hero-annotation-red.png"
              alt=""
              className="absolute"
              style={{ left: '47.8%', top: '65.1%', width: '4.5%', height: 'auto' }}
            />

            {/* Non-Compliant Badge - positioned above the tooltip */}
            {/* Approximately at left: 45%, top: 30% based on Figma screenshot */}
            <div
              className="absolute flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm border border-gray-100"
              style={{ left: '45%', top: '30%' }}
            >
              <div className="w-2 h-2 rounded-full bg-[#F02C2C] border border-[#F02C2C]">
                <svg viewBox="0 0 8 8" className="w-full h-full">
                  <circle cx="4" cy="4" r="3" fill="#F02C2C" stroke="white" strokeWidth="0.5"/>
                  <path d="M2.5 2.5L5.5 5.5M5.5 2.5L2.5 5.5" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-mono text-[9px] md:text-[11px] text-black whitespace-nowrap">Non-Compliant</span>
            </div>

            {/* Red X 4 (small, far right) - Figma: left:1047px top:152px size:19px */}
            {/* Percentages: left: 91.9%, top: 22.6%, size: 1.7% */}
            <img
              src="/images/hero-annotation-red.png"
              alt=""
              className="absolute"
              style={{ left: '91.9%', top: '22.6%', width: '1.7%', height: 'auto' }}
            />

            {/* Red X 5 (small) - Figma: left:851px top:142px size:20px */}
            {/* Percentages: left: 74.7%, top: 21.1%, size: 1.8% */}
            <img
              src="/images/hero-annotation-red.png"
              alt=""
              className="absolute"
              style={{ left: '74.7%', top: '21.1%', width: '1.8%', height: 'auto' }}
            />

            {/* Tooltip Card with dropdown - Figma: left:641px top:159px width:474px height:79px */}
            {/* Percentages: left: 56.3%, top: 23.6%, width: 41.6%, height: 11.7% */}
            <img
              src="/images/hero-tooltip-card.png"
              alt=""
              className="absolute shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              style={{ left: '56.3%', top: '23.6%', width: '41.6%', height: 'auto' }}
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Hero;
