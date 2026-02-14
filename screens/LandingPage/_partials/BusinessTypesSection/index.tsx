/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import BusinessTypeCard from "@/components/business-type-card";
import { BUSINESS_TYPE_LABELS } from "./constants";
import heroImage1 from "@/assets/images/hero-image1.jpg";
import heroImage2 from "@/assets/images/hero-image2.jpg";
import heroImage3 from "@/assets/images/hero-image3.jpg";
import heroImage4 from "@/assets/images/hero-image4.jpg";
import heroImage5 from "@/assets/images/hero-image5.jpg";
import heroImage6 from "@/assets/images/hero-image6.jpg";
import heroImage7 from "@/assets/images/hero-image7.jpg";
import heroImage8 from "@/assets/images/hero-image8.jpg";
import heroImage9 from "@/assets/images/hero-image9.jpg";
import heroImage10 from "@/assets/images/hero-image10.jpg";
import heroImage11 from "@/assets/images/hero-image11.jpg";
import heroImage12 from "@/assets/images/hero-image12.jpg";
import heroImage13 from "@/assets/images/hero-image13.jpg";
import heroImage14 from "@/assets/images/hero-image14.jpg";
import heroImage15 from "@/assets/images/hero-image15.jpg";
import heroImage16 from "@/assets/images/hero-image16.jpg";

const HERO_IMAGES = [
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  heroImage6,
  heroImage7,
  heroImage8,
  heroImage9,
  heroImage10,
  heroImage11,
  heroImage12,
  heroImage13,
  heroImage14,
  heroImage15,
  heroImage16,
];

const PARALLAX_RATE = 0.15;
const XL_BREAKPOINT = 1280; // Only enable parallax on xl and up to avoid covering text on mobile/tablet

const BusinessTypesSection = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const items = useMemo(
    () =>
      BUSINESS_TYPE_LABELS.map((item, i) => ({
        ...item,
        imageSrc: HERO_IMAGES[i % HERO_IMAGES.length],
      })),
    []
  );

  // Only enable parallax on desktop (xl+) so mobile/tablet scroll normally and text isn't covered
  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= XL_BREAKPOINT);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isDesktop || !sectionRef.current || !galleryRef.current) {
        if (!isDesktop) setParallaxOffset(0);
        return;
      }
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrolled = -rect.top * PARALLAX_RATE;
        setParallaxOffset(scrolled);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  const handleCardClick = (_id: string) => {
    // Optional: navigate or open modal
  };

  return (
    <section
      ref={sectionRef}
      id="business-types"
      className="py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="px-4 sm:px-6 md:px-10 lg:px-[72px] xl:px-[50px]">
        <div className="flex flex-col xl:flex-row xl:items-start gap-12 xl:gap-16">
          {/* Left: content-fit text */}
          <motion.div
            className="xl:flex-shrink-0 w-full xl:w-fit xl:max-w-[613px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl xl:text-[40px] font-lato font-bold text-[#000000] mb-[21px] leading-tight">
              One{" "}
              <span className="relative inline-block">
                platform
                <span
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-black"
                  aria-hidden
                />
              </span>{" "}
              for all your businesses
            </h2>
            <p className="text-[#00000080] font-montserrat font-medium text-base md:text-[16px] leading-relaxed max-w-xl">
              Wenny offers innovative tools that bring convenience, efficiency
              and an improved experience for both your team members and clients.
            </p>
          </motion.div>

          {/* Right: scrollable gallery; parallax only on desktop (xl+) to avoid covering text on mobile */}
          <div className="xl:flex-1 xl:min-w-0 relative mt-6 xl:mt-0">
            <div
              ref={galleryRef}
              className="relative transition-transform duration-100"
              style={{
                transform: isDesktop
                  ? `translateY(${parallaxOffset}px)`
                  : "none",
                willChange: isDesktop ? "transform" : "auto",
              }}
            >
              <div className="max-h-[65vh] sm:max-h-[70vh] xl:max-h-[75vh] overflow-y-auto overflow-x-hidden scrollbar-hide scroll-smooth sm:px-4">
                <div className="grid grid-cols-2 gap-4 md:gap-5 pb-4">
                  {items.map((item, index) => (
                    <BusinessTypeCard
                      key={item.id}
                      id={item.id}
                      label={item.label}
                      imageSrc={item.imageSrc}
                      index={index}
                      onClick={() => handleCardClick(item.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessTypesSection;
