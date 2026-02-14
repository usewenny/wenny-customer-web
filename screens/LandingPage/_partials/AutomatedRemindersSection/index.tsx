"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import automatedReminderImg from "@/assets/images/automated-reminder.png";
import whatsappImage from "@/assets/images/whatsapp-image.png";
import arrowPointerImg from "@/assets/images/arrow-pointer-icon.png";
import girlBoostLine from "@/assets/images/girl-boost-line.png";
import JetIcon from "@/assets/icons/JetIcon";

const imageTransition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };
const textTransition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

const cursorTransition = {
  duration: 3.5,
  repeat: Infinity,
  repeatDelay: 2.5,
  ease: "easeInOut" as const,
};

const AutomatedRemindersSection = () => {
  const blockRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(blockRef, { once: false, amount: 0.2 });

  return (
    <section
      id="automated-reminders"
      className="py-0 md:py-[89px] bg-white overflow-hidden"
    >
      <div className="pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-10 md:pr-10 lg:px-[40px] xl:px-[50px]">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          {/* Left: red background + lady (centered, prominent) + WhatsApp image (lower-left) + cursor */}
          <motion.div
            ref={blockRef}
            className="relative flex-1 min-h-[380px] md:min-h-[440px] max-w-[576px] flex items-center justify-center lg:justify-start order-1 lg:order-1 rounded-[5px] overflow-hidden bg-[#FC4305]"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={imageTransition}
          >
            {/* Line behind lady's head — curved line starts from the right */}
            <motion.div
              className="absolute inset-0 z-[5] pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: "-20px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute top-0 left-0 right-[20px] bottom-0 flex items-center justify-end">
                <div className="relative w-[85%] h-[75%] max-w-[480px]">
                  <Image
                    src={girlBoostLine}
                    alt=""
                    fill
                    className="object-contain object-right"
                    unoptimized
                  />
                </div>
              </div>
            </motion.div>
            {/* Lady image — positioned to the right, on top of the line */}
            <motion.div
              className="absolute inset-0 z-10 flex items-center justify-end"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ ...imageTransition, delay: 0.1 }}
            >
              <div className="relative w-full h-full min-h-[320px] max-w-[95%]">
                <Image
                  src={automatedReminderImg}
                  alt="Person with peace sign"
                  fill
                  className="object-contain object-right"
                  sizes="(max-width: 1024px) 85vw, 480px"
                  unoptimized
                />
              </div>
            </motion.div>
            {/* Jet icon — starts on the curve (right side), then flies to action position (upper left) */}
            <motion.div
              className="absolute z-[15] w-[80px] h-[45px] sm:w-[90px] sm:h-[50px] md:w-[100px] md:h-[56px] pointer-events-none flex items-center justify-center"
              initial={{ left: "52%", top: "38%", opacity: 0.8 }}
              whileInView={{ left: "6%", top: "8%", opacity: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="flex w-full h-full items-center justify-center scale-75 origin-center">
                <JetIcon />
              </span>
            </motion.div>
            {/* whatsapp-image.png — smooth “hover” when cursor animates in (synced with cursor) */}
            <motion.div
              className="absolute z-20 left-[21%] bottom-[28%] md:bottom-[23%] w-[72%] max-w-[299px] h-[120px] sm:h-[140px] md:h-[160px]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <motion.div
                className="relative w-full h-full"
                initial={false}
                animate={
                  isInView
                    ? { scale: [1, 1.05, 1.05, 1], y: [0, -4, -4, 0] }
                    : { scale: 1, y: 0 }
                }
                transition={cursorTransition}
              >
                <Image
                  src={whatsappImage}
                  alt="WhatsApp appointment reminder"
                  fill
                  className="object-contain object-left-bottom pointer-events-none"
                  unoptimized
                />
              </motion.div>
            </motion.div>
            {/* Cursor — below/left of WhatsApp, pointing at it; enter/leave animation (only when section in view) */}
            <motion.div
              className="absolute z-30 left-[21%] bottom-[22%] md:bottom-[26%] w-10 h-10 flex items-center justify-center pointer-events-none"
              initial={false}
              animate={
                isInView
                  ? { opacity: [0, 1, 1, 0], y: [16, 0, 0, -10] }
                  : { opacity: 0, y: 16 }
              }
              transition={cursorTransition}
            >
              <Image
                src={arrowPointerImg}
                alt=""
                width={40}
                height={40}
                className="object-contain drop-shadow-lg"
                unoptimized
              />
            </motion.div>
          </motion.div>

          {/* Right: title + paragraph */}
          <motion.div
            className="lg:flex-1 lg:min-w-0 lg:max-w-[720px] order-2 lg:order-2"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={textTransition}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-[40px] font-semibold font-lato text-[#12141D] mb-6 lg:mb-8 leading-tight"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ ...textTransition, delay: 0.15 }}
            >
              Automated Reminders on the App
              <br className="hidden lg:block" />{" "}
              <motion.span
                className="relative inline-block"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ ...textTransition, delay: 0.25 }}
              >
                your customers
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#12141D] origin-left"
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
              Use Most
            </motion.h2>
            <motion.p
              className="text-[#12141D]/80 font-montserrat text-base md:text-[18px] leading-relaxed"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              Wenny sends automated booking confirmations and reminders directly
              to your clients via WhatsApp, email or SMS.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AutomatedRemindersSection;
