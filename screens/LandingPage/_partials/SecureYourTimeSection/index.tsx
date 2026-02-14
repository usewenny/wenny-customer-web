"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import secureYourTimeImg from "@/assets/images/secure-your-time.png";

const imageTransition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };
const textTransition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

const SecureYourTimeSection = () => {
  return (
    <section
      id="secure-your-time"
      className="py-16 md:py-[89px] bg-[white] overflow-hidden"
    >
      <div className="pl-4  pr-4 sm:pl-6 sm:pr-6 md:pl-10 md:pr-10 lg:px-[40px] xl:px-[50px]">
        <div className="flex  flex-col lg:flex-row  gap-12 lg:gap-16">
          {/* Left: heading + paragraph — wider text section */}
          <motion.div
            className="lg:flex-1  lg:min-w-0 lg:max-w-[720px] sm:pt-[64px] order-2 lg:order-1"
            initial={{ opacity: 0, x: -32 }}
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
              Secure Your Time with
              <br className="hidden lg:block" />{" "}
              <motion.span
                className="relative inline-block"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ ...textTransition, delay: 0.25 }}
              >
                Upfront
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
              Deposits
            </motion.h2>
            <motion.p
              className="text-[#00000080] font-montserrat text-base md:text-[20px] leading-relaxed"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              Tired of clients ghosting? Wenny enforces mandated deposits or
              full payments before booking. If they don&apos;t show, you still
              get paid.
            </motion.p>
          </motion.div>

          {/* Right: image section — same structure as ReachNewCustomersSection */}
          <motion.div
            className="relative flex-1 min-h-[380px] md:min-h-[440px] max-w-[576px] flex items-center justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: 32 }}
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
                src={secureYourTimeImg}
                alt="Professional with deposit notification"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 85vw, 380px"
                unoptimized
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecureYourTimeSection;
