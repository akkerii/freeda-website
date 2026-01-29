"use client";

import { useState, useRef, useEffect } from "react";

interface NavigationProps {
  theme?: "light" | "dark";
}

export default function Navigation({ theme = "light" }: NavigationProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const textColor = theme === "dark" ? "text-white" : "text-black";
  const bgColor = theme === "dark" ? "bg-[#202020]" : "bg-white";

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
    <div className="absolute top-0 left-0 right-0 z-[9999] flex items-center justify-between px-5 md:px-10 lg:px-14 py-6 md:py-8">
      {/* Left: Navigation - hidden until 2xl breakpoint to prevent overlap */}
      <nav className="hidden 2xl:flex items-center gap-6 z-10">
        {/* Applications Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`font-mono text-[15px] 2xl:text-[16px] leading-[145%] ${textColor} no-underline hover:opacity-70 transition-opacity flex items-center gap-1`}
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
        <a href="/working-with-freeda" className={`font-mono text-[15px] 2xl:text-[16px] leading-[145%] ${textColor} no-underline hover:opacity-70 transition-opacity whitespace-nowrap`}>
          Working with Freeda
        </a>
        <a href="/blog" className={`font-mono text-[15px] 2xl:text-[16px] leading-[145%] ${textColor} no-underline hover:opacity-70 transition-opacity`}>
          Blog
        </a>
      </nav>

      {/* Mobile Menu Button - show below 2xl */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`2xl:hidden flex flex-col justify-center items-center w-10 h-10 z-20 ${textColor}`}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 ${theme === "dark" ? "bg-white" : "bg-black"} transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
        <span className={`block w-6 h-0.5 ${theme === "dark" ? "bg-white" : "bg-black"} my-1 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 ${theme === "dark" ? "bg-white" : "bg-black"} transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Center: Logo */}
      <a href="/" className="flex items-center no-underline hover:opacity-80 transition-opacity absolute left-1/2 -translate-x-1/2 z-0 pointer-events-auto">
        <img
          src={theme === "dark" ? "/images/freeda-logo.svg" : "/images/freeda-logo-dark.svg"}
          alt="Freeda"
          className="h-8 md:h-10 lg:h-12 w-auto"
        />
      </a>

      {/* Right: Contact Button */}
      <a
        href="https://form.typeform.com/to/QsXZbKn1"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex items-center justify-center px-4 py-3 bg-[#F2F2F2] border-2 border-black/15 hover:bg-[#E8E8E8] rounded-[9px] font-mono text-sm lg:text-[16px] xl:text-[18px] leading-[145%] text-black no-underline transition-colors z-10"
      >
        Discuss a project
      </a>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={`fixed inset-0 ${bgColor} z-[9999] 2xl:hidden`}>
          {/* Header with Close Button */}
          <div className="flex items-center justify-between px-5 py-6">
            <div className="w-10" /> {/* Spacer */}
            {/* Logo in center */}
            <a href="/" className="flex items-center">
              <img
                src="/images/freeda-logo-dark.svg"
                alt="Freeda"
                className="h-8 w-auto"
              />
            </a>
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-black"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-6 pt-8 px-6">
            <a href="/case-study" className={`font-mono text-[18px] ${textColor} no-underline hover:opacity-70 transition-opacity`}>
              Case Study
            </a>
            <a href="/use-cases" className={`font-mono text-[18px] ${textColor} no-underline hover:opacity-70 transition-opacity`}>
              Use Cases
            </a>
            <a href="/working-with-freeda" className={`font-mono text-[18px] ${textColor} no-underline hover:opacity-70 transition-opacity`}>
              Working with Freeda
            </a>
            <a href="/blog" className={`font-mono text-[18px] ${textColor} no-underline hover:opacity-70 transition-opacity`}>
              Blog
            </a>
            <a
              href="https://form.typeform.com/to/QsXZbKn1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center px-4 py-3 bg-[#F02C2C] rounded-[9px] font-mono text-[18px] text-white no-underline transition-colors"
            >
              Discuss a project
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
