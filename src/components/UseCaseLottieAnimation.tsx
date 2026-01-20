"use client";

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface UseCaseLottieAnimationProps {
  src: string;
  className?: string;
}

const UseCaseLottieAnimation: React.FC<UseCaseLottieAnimationProps> = ({
  src,
  className = "",
}) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        setLoading(true);
        const response = await fetch(src);
        if (!response.ok) throw new Error("Failed to load animation");
        const data = await response.json();
        setAnimationData(data);
        setError(false);
      } catch (err) {
        console.error("Error loading Lottie animation:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadAnimation();
  }, [src]);

  if (loading) {
    return (
      <div
        className={`relative w-[523px] h-[560px] rounded-[10px] bg-[#F5F5F5] flex items-center justify-center ${className}`}
      >
        <div className="w-8 h-8 border-2 border-[#F02C2C] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !animationData) {
    return (
      <div
        className={`relative w-[523px] h-[560px] rounded-[10px] bg-[#F5F5F5] flex items-center justify-center ${className}`}
      >
        <p className="text-black/50 text-sm">Animation failed to load</p>
      </div>
    );
  }

  return (
    <div
      className={`relative w-[523px] h-[560px] rounded-[10px] bg-[#F5F5F5] overflow-hidden shrink-0 ${className}`}
    >
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default UseCaseLottieAnimation;
