import React from "react";

interface UseCaseImageCompositionProps {
  className?: string;
  scale?: number;
  // Dynamic images from Prismic
  mainImage?: string;
  cardImage?: string;
  smallImage?: string;
}

const UseCaseImageComposition: React.FC<UseCaseImageCompositionProps> = ({
  className = "",
  scale = 1,
  mainImage = "/images/use-cases/main-screenshot.png",
  cardImage = "/images/use-cases/card-requirements.png",
  smallImage = "/images/use-cases/small-frame.png",
}) => {
  // Base dimensions from Figma (523x560)
  const s = (value: number) => value * scale;

  return (
    <div
      className={`relative overflow-hidden rounded-[10px] bg-[#F5F5F5] shrink-0 ${className}`}
      style={{
        width: s(523),
        height: s(560),
      }}
    >
      {/* Red badge with Freeda icon */}
      <div
        className="absolute z-30"
        style={{
          left: s(27),
          top: s(26),
          width: s(76),
          height: s(76),
        }}
      >
        <div className="relative w-full h-full">
          {/* Red circle background */}
          <div className="absolute inset-0 rounded-full bg-[#F02C2C]" />
          {/* Freeda icon centered */}
          <img
            src="/images/use-cases/freeda-icon.svg"
            alt=""
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: s(37),
              height: s(32),
            }}
          />
        </div>
      </div>

      {/* Large main screenshot - with light gray shadow */}
      <div
        className="absolute z-10 rounded-[10px]"
        style={{
          left: s(180),
          top: s(131),
          width: s(860),
          height: s(483),
          boxShadow: `${s(40)}px ${s(4)}px ${s(4)}px rgba(251, 251, 251, 1)`,
        }}
      >
        <img
          src={mainImage}
          alt="Main analysis screenshot"
          className="w-full h-full object-cover rounded-[10px]"
        />
      </div>

      {/* Card requirements - top right with drop shadow */}
      <div
        className="absolute z-20"
        style={{
          left: s(307),
          top: s(48),
          width: s(258),
          height: s(166),
          boxShadow: `0px ${s(6)}px ${s(6)}px rgba(0, 0, 0, 0.25)`,
        }}
      >
        <img
          src={cardImage}
          alt="Card requirements"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Small frame - bottom left with drop shadow */}
      <div
        className="absolute z-20"
        style={{
          left: s(32),
          top: s(290),
          width: s(239),
          height: s(192),
          boxShadow: `0px ${s(4)}px ${s(4)}px rgba(0, 0, 0, 0.25)`,
        }}
      >
        <img
          src={smallImage}
          alt="Analysis frame"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default UseCaseImageComposition;
