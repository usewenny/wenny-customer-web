"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import WhyWennyIcon from "@/assets/icons/WhyWennyIcon";

interface WhyUsSection {
  id: string;
  title: string;
  paragraphs: string[];
  icon: React.ReactNode;
}

const WHY_US_SECTIONS: readonly WhyUsSection[] = [
  {
    id: "businesses",
    title: "For Businesses",
    paragraphs: [
      "Wenny provides beauty and wellness businesses and professionals with the tools that help them manage and grow their business as well as their revenue with ease. Thereby giving them more time to focus on their craft, while Wenny handles all their business demands and enables them to become more efficient.",
      "Amongst other robust features Wenny provides you with, our real-time performance and insight analytics enables you to track your business performance, show you where to improve and change strategies for better performance.",
    ],
    icon: (
      <div className="w-[60px] h-[60px] bg-[#DAF070] rounded-full flex items-center justify-center">
        <WhyWennyIcon />
      </div>
    ),
  },
  {
    id: "customers",
    title: "For Customers",
    paragraphs: [
      "Wenny helps customers seeking beauty and wellness service to discover and book top-rated beauty and wellness professionals around them from our robust marketplace, know their appointment time without having to call or drop messages ahead of their appointment, and get appointment reminders via email, google calendar, text or WhatsApp messages.",
      "Our rating and reviews features help customers to know the businesses and professionals that meet their needs.",
    ],
    icon: (
      <div className="w-[60px] h-[60px] bg-[#DAF070] rounded-full flex items-center justify-center">
        <WhyWennyIcon />
      </div>
    ),
  },
] as const;

const WhyUs = () => {
  const sections = useMemo(
    () =>
      WHY_US_SECTIONS.map((section, index) => (
        <motion.div
          key={section.id}
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: index * 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Icon with gentle floating animation */}
          <motion.div
            className="mb-[30px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              opacity: {
                duration: 0.6,
                delay: index * 0.15 + 0.2,
                ease: [0.16, 1, 0.3, 1],
              },
              scale: {
                duration: 0.6,
                delay: index * 0.15 + 0.2,
                ease: [0.16, 1, 0.3, 1],
              },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            {section.icon}
          </motion.div>

          {/* Title with smooth fade */}
          <motion.h3
            className="text-2xl md:text-[18px] font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: index * 0.15 + 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {section.title}
          </motion.h3>

          {/* Paragraphs with gentle reveal */}
          <div className="space-y-4">
            {section.paragraphs.map((paragraph, pIndex) => (
              <motion.p
                key={pIndex}
                className="text-gray-600 text-base md:text-[16px] font-medium leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15 + 0.4 + pIndex * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      )),
    []
  );

  return (
    <section className="py-16 md:py-[57px] bg-primary-50">
      <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-[136px]">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-[42px] font-bold text-gray-900 text-center mb-12 md:mb-[35px]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Why Wenny
        </motion.h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-14 lg:gap-16">
          {sections}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
