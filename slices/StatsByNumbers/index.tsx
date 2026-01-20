"use client";

import { useEffect, useRef, useState } from "react";
import type { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import FadeIn from "@/components/FadeIn";

export type StatsByNumbersProps = SliceComponentProps<Content.StatsByNumbersSlice>;

// Parse number, prefix and suffix from stat value (e.g., "$20B" -> { prefix: "$", number: 20, suffix: "B" })
const parseStatValue = (value: string) => {
  const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
  if (match) {
    const prefix = match[1] || "";
    const number = parseFloat(match[2].replace(/,/g, ""));
    const suffix = match[3] || "";
    return { prefix, number, suffix };
  }
  return { prefix: "", number: 0, suffix: value };
};

// Format number with commas
const formatNumber = (num: number) => {
  return Math.round(num).toLocaleString();
};

// Animated counter component
const AnimatedNumber = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const { prefix, number, suffix } = parseStatValue(value);
            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepDuration = duration / steps;
            let currentStep = 0;

            const timer = setInterval(() => {
              currentStep++;
              const progress = currentStep / steps;
              // Ease out cubic for smooth deceleration
              const easedProgress = 1 - Math.pow(1 - progress, 3);
              const currentValue = number * easedProgress;
              setDisplayValue(prefix + formatNumber(currentValue) + suffix);

              if (currentStep >= steps) {
                clearInterval(timer);
                setDisplayValue(prefix + formatNumber(number) + suffix);
              }
            }, stepDuration);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span
      ref={ref}
      className="font-trap text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-semibold leading-[1] text-[#F02C2C] tracking-[-2px]"
    >
      {displayValue}
    </span>
  );
};

const StatsByNumbers = ({ slice }: StatsByNumbersProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#F2F2F2] w-full py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-[1250px] mx-auto px-5 md:px-10">
        {/* Title */}
        <FadeIn>
          {slice.primary.title && (
            <h2 className="font-trap text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-semibold leading-[110%] text-black text-center mb-12 md:mb-16">
              {slice.primary.title}
            </h2>
          )}
        </FadeIn>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {slice.items.map((item, index) => (
            <FadeIn key={index} delay={100 + index * 150}>
              <article className="flex flex-col items-center text-center gap-4">
                {/* Stat Value - Animated Large Red Number */}
                {item.stat_value && (
                  <AnimatedNumber value={item.stat_value} />
                )}

                {/* Stat Label */}
                {item.stat_label && (
                  <h3 className="font-trap text-xl md:text-2xl font-semibold leading-[120%] text-black">
                    {item.stat_label}
                  </h3>
                )}

                {/* Stat Description */}
                {item.stat_description && (
                  <p className="font-inter text-base md:text-lg text-black/55 leading-[145%] max-w-[300px]">
                    {item.stat_description}
                  </p>
                )}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsByNumbers;
