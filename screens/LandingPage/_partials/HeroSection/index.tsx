"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import heroImageOverlay from "@/assets/images/hero-image-overlay.png";
import heroOverlay2 from "@/assets/images/hero-overlay-2.png";
import newHero1 from "@/assets/images/new-hero1.png";
import newHero2 from "@/assets/images/new-hero2.png";
import newHero3 from "@/assets/images/new-hero3.png";
import { WAITLIST_FORM_URL } from "@/lib/constants";

const HEADLINE_ANIMATION = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-80px" },
  transition: { duration: 0.6, delay: 0.2 },
} as const;

const SUBHEADING_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-80px" },
  transition: { duration: 0.6, delay: 0.35 },
} as const;

const BUTTON_ANIMATION = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-80px" },
  transition: { duration: 0.5, delay: 0.5 },
} as const;

const IMAGE_CARD_ANIMATION = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
} as const;

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col -mt-20 min-h-0 pt-[80px] pb-0 md:min-h-[600px] lg:h-screen lg:min-h-[700px]"
      style={{ backgroundColor: "#F8FDEC" }}
    >
      {/* Pattern overlay - speckled/dotted texture (CSS background so it always shows) */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none bg-no-repeat bg-center opacity-70"
        style={{
          backgroundImage: `url(${heroImageOverlay.src})`,
          backgroundSize: "cover",
        }}
        aria-hidden
      />

      {/* Second overlay - hero-overlay-2.png */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none bg-no-repeat bg-center opacity-70"
        style={{
          backgroundImage: `url(${heroOverlay2.src})`,
          backgroundSize: "cover",
        }}
        aria-hidden
      />

      {/* Content - on mobile/tablet start from top with tight spacing; on desktop centered */}
      <div className="relative z-10  flex flex-1 min-h-0 flex-col items-center justify-start pt-6 px-4 sm:px-6 md:justify-center md:pt-8 md:px-8 lg:justify-center lg:pt-0 lg:px-8">
        <div className="max-w-[900px] mx-auto text-center w-full">
          <motion.h1
            className="text-[32px] sm:text-[38px] md:text-5xl lg:text-[62px] font-lato font-bold text-[#011627] mb-3 sm:mb-4 md:mb-5 lg:mb-[26px] leading-tight"
            {...HEADLINE_ANIMATION}
          >
            Focus on your{" "}
            <span className="relative inline-block text-[#3CB472]">
              craft
              <span
                className="absolute -bottom-0.5 left-0 right-0 h-[2px] md:h-[2px] bg-[#3CB472] rounded-sm -z-10"
                aria-hidden
              />
            </span>
            , let&apos;s handle the business
          </motion.h1>

          <motion.p
            className="text-[15px] sm:text-[17px] md:text-[20px] text-[#00000080] max-w-3xl font-medium font-montserrat mx-auto leading-relaxed mb-5 sm:mb-6 md:mb-8 lg:mb-10"
            {...SUBHEADING_ANIMATION}
          >
            Stop chasing payments and answering calls. Let Wenny handle
            bookings, deposits, and reminders. Join the waitlist to get early
            access.
          </motion.p>

          <motion.div {...BUTTON_ANIMATION} className="flex justify-center">
            <a
              href={WAITLIST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 border-[1px] border-[#011627] text-[#131111] font-montserrat font-semibold text-[15px] sm:text-base md:text-[17px] rounded-[10px] bg-[#3CB472] hover:bg-primary-700 transition-colors shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Join Waitlist
            </a>
          </motion.div>
        </div>
      </div>

      {/* Three hero images - tight gap and short boxes on mobile */}
      <motion.div
        className="relative z-10 flex flex-shrink-0 w-full px-4 sm:px-6 md:px-10 lg:px-[65px] items-end justify-center mt-3 sm:mt-4 md:mt-10 lg:mt-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        {/* Left - short on mobile */}
        <motion.div
          className="relative w-[30%] min-w-[100px] sm:min-w-[120px] md:min-w-[120px] aspect-[3/2] md:aspect-[3/4] max-h-[26vh] sm:max-h-[28vh] md:max-h-[45vh] -mr-[1%] rounded-lg overflow-hidden"
          style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.12))" }}
          {...IMAGE_CARD_ANIMATION}
          transition={{ ...IMAGE_CARD_ANIMATION.transition, delay: 0.1 }}
        >
          <Image
            src={newHero1}
            alt="Professional with camera"
            fill
            className="object-contain object-bottom select-none pointer-events-none"
            sizes="(max-width: 768px) 35vw, 28vw"
            priority
            draggable={false}
          />
        </motion.div>
        {/* Center - short on mobile */}
        <motion.div
          className="relative z-10 w-[40%] min-w-[130px] sm:min-w-[150px] md:min-w-[180px] aspect-[3/2] md:aspect-[3/4] max-h-[28vh] sm:max-h-[30vh] md:max-h-[50vh] -mx-[5%] sm:-mx-[6%] rounded-lg overflow-hidden"
          style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.12))" }}
          {...IMAGE_CARD_ANIMATION}
          transition={{ ...IMAGE_CARD_ANIMATION.transition, delay: 0.2 }}
        >
          <Image
            src={newHero2}
            alt="Barber professional"
            fill
            className="object-contain object-bottom select-none pointer-events-none"
            sizes="(max-width: 768px) 45vw, 44vw"
            priority
            draggable={false}
          />
        </motion.div>
        {/* Right - short on mobile */}
        <motion.div
          className="relative w-[30%] min-w-[100px] sm:min-w-[120px] md:min-w-[120px] aspect-[3/2] md:aspect-[3/4] max-h-[26vh] sm:max-h-[28vh] md:max-h-[45vh] -ml-[1%] rounded-lg overflow-hidden"
          style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.12))" }}
          {...IMAGE_CARD_ANIMATION}
          transition={{ ...IMAGE_CARD_ANIMATION.transition, delay: 0.3 }}
        >
          <Image
            src={newHero3}
            alt="Hairstylist professional"
            fill
            className="object-contain object-bottom select-none pointer-events-none"
            sizes="(max-width: 768px) 35vw, 28vw"
            priority
            draggable={false}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
