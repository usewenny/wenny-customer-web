"use client";

import React from "react";
import { motion } from "framer-motion";
import heroImageOverlay from "@/assets/images/hero-image-overlay.png";
import heroOverlay2 from "@/assets/images/hero-overlay-2.png";
import { WAITLIST_FORM_URL } from "@/lib/constants";

const GrowYourEmpireSection = () => {
  return (
    <section
      className="relative w-full py-16 md:py-[139px] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#3CB472" }}
    >
      {/* Same two overlays as hero - dotted/halftone pattern */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none bg-no-repeat bg-center opacity-70"
        style={{
          backgroundImage: `url(${heroImageOverlay.src})`,
          backgroundSize: "cover",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[2] pointer-events-none bg-no-repeat bg-center opacity-70"
        style={{
          backgroundImage: `url(${heroOverlay2.src})`,
          backgroundSize: "cover",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-[900px] mx-auto text-center px-4 sm:px-6 md:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-lato font-bold text-[#000000] leading-tight mb-4 md:mb-[21px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Grow Your Empire for Less than the
          <br className="hidden sm:block" /> Cost of a Haircut.
        </motion.h2>
        <motion.p
          className="text-base md:text-[20px] font-montserrat text-[#000000] font-medium mb-8 md:mb-[21px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Plans start at just ₦3,500/month. No hidden fees. Cancel anytime.
        </motion.p>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href={WAITLIST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 rounded-[10px] bg-[#12141D] text-white font-semibold text-base md:text-[16px] hover:bg-[#282A3A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12141D] focus-visible:ring-offset-2"
          >
            Join Wenny
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowYourEmpireSection;
