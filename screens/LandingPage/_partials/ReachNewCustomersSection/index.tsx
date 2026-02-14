"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CommandIcon from "@/assets/icons/CommandIcon";

// Add reach-new-customer-image.png to assets/images/
import reachNewCustomerImg from "@/assets/images/reach-new-customer-image.png";

const BULLET_POINTS = [
  "Promote your business and reach new clients on Nigeria's largest marketplace",
  "Reach millions of clients looking to book their next appointment",
  "Free up time and get your clients self-booking online 24/7",
] as const;

const imageTransition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };
const textTransition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

const ReachNewCustomersSection = () => {
  return (
    <section
      id="reach-new-customers"
      className="pt-16 pb-0 md:py-[89px] bg-white overflow-hidden"
    >
      <div className="pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-10 md:pr-10 lg:px-[40px] xl:px-[50px]">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          {/* Left: image — lift-in + scale */}
          <motion.div
            className="relative flex-1 min-h-[380px] md:min-h-[440px] max-w-[576px] flex items-center justify-center lg:justify-start"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={imageTransition}
          >
            <motion.div
              className="relative w-full h-full min-h-[380px] md:min-h-[440px]"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ ...imageTransition, delay: 0.1 }}
            >
              <Image
                src={reachNewCustomerImg}
                alt="Business owner giving thumbs up"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 85vw, 380px"
                unoptimized
              />
            </motion.div>
          </motion.div>

          {/* Right: heading + bullets — stagger and underline animation */}
          <motion.div
            className="lg:flex-shrink-0 lg:max-w-[576px]"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={textTransition}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-[40px] font-semibold font-lato text-[#000000] mb-6 lg:mb-8 leading-tight"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ ...textTransition, delay: 0.15 }}
            >
              Reach new customers on our{" "}
              <motion.span
                className="relative inline-block"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ ...textTransition, delay: 0.25 }}
              >
                marketplace
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#000000] origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  aria-hidden
                />
              </motion.span>{" "}
              to grow your business.
            </motion.h2>
            <ul className="space-y-4 sm:space-y-6">
              {BULLET_POINTS.map((text, i) => (
                <motion.li
                  key={i}
                  className="flex gap-3 text-[#00000080] font-montserrat font-medium text-base md:text-[20px] leading-relaxed"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: 0.35 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                >
                  <span className="flex-shrink-0 mt-1 inline-flex items-center justify-center w-[22px] h-[22px]">
                    <CommandIcon />
                  </span>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReachNewCustomersSection;
