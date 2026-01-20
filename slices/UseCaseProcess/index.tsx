"use client";

import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type UseCaseProcessProps =
  SliceComponentProps<Content.UseCaseProcessSlice>;

const UseCaseProcess: FC<UseCaseProcessProps> = ({ slice }) => {
  const [activeStep, setActiveStep] = useState(0);

  // Hardcoded steps data based on Figma design
  const steps = [
    {
      label: "Step 1 — Configuration",
      title: "Our team works with you to understand your exact needs before project context before running any checks.",
      content: [
        "Applicable accessibility standards and regulations based on country / jurisdiction",
        "Areas to be checked (parking, entrances, circulation, sanitary, etc.)",
        "Specific compensations or constraints to apply",
        "Expected level of detail for result",
        "Timeline based and specific key boundary, detailed findings, supporting conclusions",
      ],
    },
    {
      label: "Step 2 — Upload your plans and documents",
      title: "Upload your architectural plans and related documents for analysis.",
      content: [
        "Support for PDF, DWG, and image formats",
        "Automatic document classification",
        "Multiple file upload capability",
        "Version control and tracking",
      ],
    },
    {
      label: "Step 3 — Receive your accessibility results",
      title: "Get comprehensive accessibility compliance reports with detailed findings.",
      content: [
        "Detailed compliance checklist",
        "Visual annotations on plans",
        "Prioritized recommendations",
        "Exportable reports in multiple formats",
      ],
    },
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-[1512px] mx-auto px-5 md:px-10 lg:px-[40px]">
        {/* Header */}
        <div className="max-w-[1087px] mx-auto text-center mb-10 md:mb-16">
          <h2 className="font-trap text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-semibold leading-[1.15] tracking-[-0.95px] text-black m-0">
            {slice.primary.title || "Verify accessibility compliance early — directly from your plans"}
          </h2>
          {slice.primary.subtitle && (
            <div className="mt-4 md:mt-6 font-inter text-base md:text-lg text-black/65 leading-[1.45] [&_p]:m-0">
              <PrismicRichText field={slice.primary.subtitle} />
            </div>
          )}
        </div>

        {/* Steps Tabs */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`px-4 py-2 rounded-full font-mono text-sm md:text-base transition-all ${
                activeStep === index
                  ? "bg-black text-white"
                  : "bg-transparent text-black/55 hover:text-black"
              }`}
            >
              {step.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Side - Image/Plan */}
          <div className="w-full lg:w-1/2 aspect-[4/3] bg-[#EDEDED] rounded-[10px] overflow-hidden relative">
            {/* Placeholder for floor plan image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-full h-full text-black/10"
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Floor plan placeholder SVG */}
                <rect x="50" y="50" width="300" height="200" stroke="currentColor" strokeWidth="2" fill="none" />
                <rect x="50" y="50" width="100" height="100" stroke="currentColor" strokeWidth="1" fill="none" />
                <rect x="150" y="50" width="100" height="100" stroke="currentColor" strokeWidth="1" fill="none" />
                <rect x="250" y="50" width="100" height="100" stroke="currentColor" strokeWidth="1" fill="none" />
                <rect x="50" y="150" width="150" height="100" stroke="currentColor" strokeWidth="1" fill="none" />
                <rect x="200" y="150" width="150" height="100" stroke="currentColor" strokeWidth="1" fill="none" />
                {/* Red marker dot */}
                <circle cx="200" cy="150" r="8" fill="#F02C2C" />
              </svg>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="font-inter text-lg md:text-xl font-medium text-black mb-6 leading-[1.45]">
              {steps[activeStep].title}
            </h3>
            <p className="font-inter text-base text-black/65 mb-4">
              This setup phase includes:
            </p>
            <ul className="space-y-3">
              {steps[activeStep].content.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F02C2C] mt-2 shrink-0" />
                  <span className="font-inter text-base text-black/65 leading-[1.45]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseProcess;
