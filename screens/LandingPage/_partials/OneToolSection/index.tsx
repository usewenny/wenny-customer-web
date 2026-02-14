"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import dashboardImg from "@/assets/images/wenny-app-dashboard.png";
import mobileImg from "@/assets/images/wenny-app-mobile.png";
import arrowPointerImg from "@/assets/images/arrow-pointer-icon.png";
import CommandIcon from "@/assets/icons/CommandIcon";

const BULLET_POINTS = [
  "Modern calendar with endless bookings, clients, Locations and much more.",
  "360 degree view of each client, including booking behaviours, client preferences, preferred payment methods, preferred marketing channels, lifetime value and more.",
  "Designed to deliver a unique experience that elevates your business and customer experience.",
] as const;

// Keyframe positions for arrow (percentage of right column) - cycles between desktop and mobile
const ARROW_KEYFRAMES = {
  left: ["55%", "28%", "62%", "22%", "50%", "55%"],
  top: ["35%", "48%", "52%", "62%", "40%", "35%"],
};

const OneToolSection = () => {
  return (
    <section
      id="one-tool"
      className="pt-16 md:pt-24 bg-[#F7FCEB] overflow-hidden"
    >
      <div className="pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-10 md:pr-10 lg:pl-[72px] lg:pr-0 xl:pl-[50px] xl:pr-0">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-12">
          {/* Left: heading + bullet list */}
          <motion.div
            className="lg:flex-shrink-0 lg:max-w-[621px]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold font-lato text-[#000000] mb-6 lg:mb-[32px] leading-tight">
              One{" "}
              <span className="relative inline-block">
                tool
                <span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#282A3A]"
                  aria-hidden
                />
              </span>{" "}
              for all your business needs
            </h2>
            <ul className="space-y-[32px]">
              {BULLET_POINTS.map((text, i) => (
                <motion.li
                  key={i}
                  className="flex gap-3 text-[#00000080] font-montserrat font-medium text-base md:text-[20px] leading-relaxed"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <span className="flex-shrink-0 mt-1.5 w-6 h-6   flex items-center justify-center">
                    <CommandIcon />
                  </span>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: desktop (530px on lg) fills to the right edge; mobile (361px on lg) overlaps a small part */}
          <motion.div
            className="relative flex-1 min-w-0 flex justify-end"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative w-full max-lg:max-w-[90vw] overflow-hidden pb-0"
              style={{
                aspectRatio: `${(dashboardImg as { width: number; height: number }).width} / ${(dashboardImg as { width: number; height: number }).height}`,
              }}
            >
              {/* Desktop app — fills container, no empty space at bottom */}
              <div className="absolute inset-0 rounded-l-xl overflow-hidden z-0">
                <Image
                  src={dashboardImg}
                  alt="Wenny app dashboard"
                  fill
                  className="object-cover object-left-top"
                  sizes="100vw"
                  unoptimized
                />
              </div>

              {/* Mobile — same image, bigger so it matches the design */}
              <div className="absolute -left-[1%] bottom-[30%] w-[200px] h-[280px] sm:w-[220px] sm:h-[310px] md:w-[240px] md:h-[340px] lg:w-[260px] lg:h-[420px] xl:w-[280px] xl:h-[452px] rounded-2xl overflow-hidden z-10">
                <Image
                  src={mobileImg}
                  alt="Wenny app mobile"
                  fill
                  className="object-contain object-top"
                  sizes="280px"
                  unoptimized
                />
              </div>

              {/* Animated arrow */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                <ArrowKeyframes />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function ArrowKeyframes() {
  return (
    <motion.div
      className="absolute w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
      style={{ left: 0, top: 0 }}
      animate={{
        left: ARROW_KEYFRAMES.left,
        top: ARROW_KEYFRAMES.top,
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span className="block -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 relative">
        <Image
          src={arrowPointerImg}
          alt=""
          fill
          className="object-contain drop-shadow-lg"
          unoptimized
        />
      </span>
    </motion.div>
  );
}

export default OneToolSection;
