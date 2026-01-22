"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import type { GlobalPresenceSlice } from "@/prismicio-types";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import FadeIn from "@/components/FadeIn";

export type GlobalPresenceProps = SliceComponentProps<GlobalPresenceSlice>;

// Map aspect ratio (width / height) - adjust this to match your world-map.svg
const MAP_ASPECT_RATIO = 2.1; // approximate world map ratio

// Location Marker with radar pulse effect
const LocationMarker = ({
  left,
  top,
  hasPulse = true,
  isActive = false,
  onClick,
}: {
  left: number;
  top: number;
  hasPulse?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}) => (
  <div
    className="absolute cursor-pointer z-20"
    style={{ left: `${left}%`, top: `${top}%`, transform: "translate(-50%, -50%)" }}
    onClick={onClick}
  >
    {/* Radar pulse rings - always show for all markers */}
    <span className="absolute inset-0 w-[17px] h-[17px] rounded-full bg-[#F02C2C] animate-radar" />
    <span className="absolute inset-0 w-[17px] h-[17px] rounded-full bg-[#F02C2C] animate-radar-delayed-1" />
    <span className="absolute inset-0 w-[17px] h-[17px] rounded-full bg-[#F02C2C] animate-radar-delayed-2" />
    {/* Main dot */}
    <span
      className={`relative block w-[17px] h-[17px] rounded-full bg-[#F02C2C] transition-all ${
        isActive ? "ring-[3px] ring-[#FF9E9E]" : ""
      }`}
    />
  </div>
);

const GlobalPresence = ({ slice }: GlobalPresenceProps) => {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapBounds, setMapBounds] = useState({ offsetX: 0, offsetY: 0, width: 100, height: 100 });

  // Calculate the actual map bounds within the container (accounting for object-contain)
  useEffect(() => {
    const calculateBounds = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const containerRatio = containerWidth / containerHeight;

      let mapWidth, mapHeight, offsetX, offsetY;

      if (containerRatio > MAP_ASPECT_RATIO) {
        // Container is wider than map - map will have horizontal letterboxing
        mapHeight = containerHeight;
        mapWidth = containerHeight * MAP_ASPECT_RATIO;
        offsetX = (containerWidth - mapWidth) / 2;
        offsetY = 0;
      } else {
        // Container is taller than map - map will have vertical letterboxing
        mapWidth = containerWidth;
        mapHeight = containerWidth / MAP_ASPECT_RATIO;
        offsetX = 0;
        offsetY = (containerHeight - mapHeight) / 2;
      }

      setMapBounds({
        offsetX: (offsetX / containerWidth) * 100,
        offsetY: (offsetY / containerHeight) * 100,
        width: (mapWidth / containerWidth) * 100,
        height: (mapHeight / containerHeight) * 100,
      });
    };

    calculateBounds();
    window.addEventListener("resize", calculateBounds);
    return () => window.removeEventListener("resize", calculateBounds);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveLocation(activeLocation === index ? null : index);
  };

  const handleClose = () => {
    setActiveLocation(null);
  };

  // Convert marker position from map-relative % to container-relative %
  const getAdjustedPosition = (x: number, y: number) => {
    return {
      left: mapBounds.offsetX + (x / 100) * mapBounds.width,
      top: mapBounds.offsetY + (y / 100) * mapBounds.height,
    };
  };

  // Only show markers from Prismic items - no defaults
  const markers =
    slice.items && slice.items.length > 0
      ? slice.items.map((item) => ({
          x: item.position_x || 50,
          y: item.position_y || 50,
          hasPulse: item.has_pulse || false,
        }))
      : [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative bg-white w-full py-[60px] md:py-[80px] overflow-visible"
    >
      <div className="max-w-[1512px] mx-auto px-5 md:px-[64px]">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col items-center gap-[16px] text-center mb-[32px]">
            {slice.primary.title && (
              <h2 className="font-trap text-2xl sm:text-3xl md:text-[38px] font-semibold leading-[44px] tracking-[0] text-black text-center capitalize m-0">
                {slice.primary.title}
              </h2>
            )}
            {slice.primary.description && (
              <p className="font-inter text-sm sm:text-base md:text-[18px] font-normal leading-[145%] tracking-[-0.09px] text-black/65 text-center max-w-[343px] m-0">
                {slice.primary.description}
              </p>
            )}
          </div>
        </FadeIn>

        {/* Map Section */}
        <FadeIn delay={200}>
          <div ref={containerRef} className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[593px] overflow-visible">
            {/* SVG World Map from Figma */}
            <div className="absolute inset-0">
              <Image
                src="/world-map.svg"
                alt="World Map"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Location Markers - positioned relative to actual map bounds */}
            {markers.map((marker, i) => {
              const pos = getAdjustedPosition(marker.x, marker.y);
              return (
                <LocationMarker
                  key={i}
                  left={pos.left}
                  top={pos.top}
                  hasPulse={marker.hasPulse}
                  isActive={activeLocation === i}
                  onClick={() => handleDotClick(i)}
                />
              );
            })}

            {/* Info Card - Shows when a marker is clicked */}
            {activeLocation !== null && slice.items && slice.items[activeLocation] && (
              <div
                className="absolute z-[100] w-[300px] sm:w-[320px] md:w-[343px] bg-[#F2F2F2] rounded-[10px] overflow-hidden shadow-xl animate-fade-in-up"
                style={{
                  left: "3%",
                  top: "3%",
                }}
              >
                {/* Card Content */}
                <div className="p-6 relative">
                  {/* Close button */}
                  <button
                    onClick={handleClose}
                    className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center text-black/40 hover:text-black transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M1 1L13 13M1 13L13 1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>

                  {/* Location name */}
                  <span className="font-trap text-[16px] font-semibold text-black block mb-4">
                    {slice.items[activeLocation].location_name}
                  </span>

                  {/* Project Title */}
                  <h3 className="font-trap text-[20px] sm:text-[24px] font-semibold leading-[110%] text-black mb-4 pr-6">
                    {slice.items[activeLocation].project_title}
                  </h3>

                  {/* Project Description */}
                  {slice.items[activeLocation].project_description && (
                    <div className="font-inter text-[14px] sm:text-[16px] font-normal leading-[120%] text-black [&_p]:m-0">
                      <PrismicRichText
                        field={slice.items[activeLocation].project_description}
                      />
                    </div>
                  )}
                </div>

                {/* Project Image */}
                {slice.items[activeLocation].project_image?.url && (
                  <div className="relative h-[150px] sm:h-[178px]">
                    <PrismicNextImage
                      field={slice.items[activeLocation].project_image}
                      className="w-full h-full object-cover"
                      fallbackAlt=""
                    />
                    {/* Client Logo overlay */}
                    {slice.items[activeLocation].client_logo?.url && (
                      <div className="absolute bottom-4 left-4">
                        <PrismicNextImage
                          field={slice.items[activeLocation].client_logo}
                          className="h-5 w-auto"
                          fallbackAlt=""
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* CTA Button with radar effect - Always visible, higher z-index than card */}
            {slice.primary.button_text && (
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[5%] sm:bottom-[8%] lg:bottom-[10%] z-40">
                <div className="relative inline-block">
                  {/* Radar pulse rings for button */}
                  <span className="absolute inset-0 rounded-[9px] bg-[#F02C2C] animate-button-radar" />
                  <span className="absolute inset-0 rounded-[9px] bg-[#F02C2C] animate-button-radar-delayed-1" />
                  <span className="absolute inset-0 rounded-[9px] bg-[#F02C2C] animate-button-radar-delayed-2" />
                  <PrismicNextLink
                    field={slice.primary.button_link}
                    className="relative inline-flex items-center justify-center px-[16px] py-[12px] bg-[#F02C2C] rounded-[9px] font-mono text-sm sm:text-base md:text-[18px] font-normal leading-[145%] text-white no-underline hover:opacity-90 transition-opacity whitespace-nowrap"
                  >
                    {slice.primary.button_text}
                  </PrismicNextLink>
                </div>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default GlobalPresence;
