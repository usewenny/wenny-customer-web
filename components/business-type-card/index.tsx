"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import ArrowRight from "@/assets/icons/ArrowRight";

export interface BusinessTypeCardProps {
  id: string;
  label: string;
  imageSrc: StaticImageData | string;
  onClick?: () => void;
  index?: number;
}

const CARD_ANIMATION = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-40px" },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
} as const;

const BusinessTypeCard: React.FC<BusinessTypeCardProps> = ({
  label,
  imageSrc,
  onClick,
  index = 0,
}) => {
  const isStringSrc = typeof imageSrc === "string";

  return (
    <motion.article
      className="group relative w-full aspect-[4/3] min-h-[200px] sm:min-h-[403px] rounded-[10px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      {...CARD_ANIMATION}
      transition={{
        ...CARD_ANIMATION.transition,
        delay: index * 0.06,
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      aria-label={`${label} - view more`}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        {isStringSrc ? (
          // eslint-disable-next-line @next/next/no-img-element -- external URLs
          <img
            src={imageSrc}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </div>

      {/* Bottom gradient overlay */}
      <div
        className="absolute inset-x-0 bottom-0 h-[45%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
        }}
      />

      {/* Content row: label + arrow button */}
      <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between gap-3">
        <span className="text-white font-bold font-montserrat text-base md:text-[16px] drop-shadow-sm">
          {label}
        </span>
        <span
          className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md group-hover:bg-gray-100 transition-colors"
          aria-hidden
        >
          <ArrowRight />
        </span>
      </div>
    </motion.article>
  );
};

export default BusinessTypeCard;
