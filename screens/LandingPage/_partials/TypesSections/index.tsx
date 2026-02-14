"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/button";
import CloudIcon from "@/assets/icons/CloudIcon";
import ProfessionalsWaitlist from "@/modals/landingPage/professionalsWaitlist";
import { CUSTOMER_FORM_URL } from "@/lib/constants";

interface TypeCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TYPE_CARDS: readonly TypeCard[] = [
  {
    id: "professionals",
    title: "For Professionals",
    description: "Manage your business with excellent reliability",
    icon: <CloudIcon />,
  },
  {
    id: "customers",
    title: "For Customers",
    description: "Book beauty and wellness services with confidence.",
    icon: <CloudIcon />,
  },
] as const;

const TypesSections = () => {
  const [isProfessionalsModalOpen, setIsProfessionalsModalOpen] =
    useState(false);

  const handleOpenProfessionalsModal = () => {
    setIsProfessionalsModalOpen(true);
  };

  const handleCloseProfessionalsModal = () => {
    setIsProfessionalsModalOpen(false);
  };

  const cards = useMemo(
    () =>
      TYPE_CARDS.map((card, index) => (
        <motion.div
          key={card.id}
          className="bg-white rounded-[15px] px-[26px] py-[36px] border border-[#E4E4E7]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          {/* Icon */}
          <div className="mb-6 w-[53px] h-[53px] bg-[#12141D] rounded-full flex items-center justify-center">
            {card.icon}
          </div>

          {/* Title */}
          <h3 className="text-[18px] font-bold text-[#12141D] mb-[15px]">
            {card.title}
          </h3>

          {/* Description */}
          <p className="text-[#12141D] text-[16px] mb-[37px] leading-relaxed">
            {card.description}
          </p>

          {/* Button: professionals opens modal, customers opens form in new tab */}
          {card.id === "professionals" ? (
            <Button
              variant="secondary"
              className="w-full bg-[#0B0B0B] rounded-[15px] text-white text-[18px]"
              onClick={handleOpenProfessionalsModal}
            >
              Join the Waitlist
            </Button>
          ) : (
            <a
              href={CUSTOMER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 px-6 bg-[#0B0B0B] rounded-[15px] text-white text-[18px] font-semibold hover:opacity-90 transition-opacity"
            >
              Join the Waitlist
            </a>
          )}
        </motion.div>
      )),
    []
  );

  return (
    <>
      <section id="types" className="py-16 md:py-24 bg-white">
        <div className="px-4 sm:px-6 md:px-10 lg:px-[136px]">
          {/* Tablet + iPad Pro: flex-col (content on top, cards below). Desktop (xl): two-column grid (text left, cards right) */}
          <div className="flex flex-col xl:grid xl:grid-cols-2 gap-12 md:gap-14 xl:gap-16 xl:items-center">
            {/* Text - on tablet/iPad Pro full width on top; on desktop left column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-4xl md:text-[42px] font-bold text-gray-900 mb-[10px] leading-tight">
                Built for the beauty and wellness ecosystem.
              </h2>
              <p className="text-lg text-[#0B0B0B] text-[16px] mb-8 leading-relaxed max-w-2xl xl:max-w-none">
                Join Wenny and be part of a structured, reliable marketplace for
                beauty and wellness services.
              </p>
            </motion.div>

            {/* Cards - on tablet/iPad Pro below content, side-by-side; on desktop right column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{cards}</div>
          </div>
        </div>
      </section>

      {/* Professionals Waitlist Modal */}
      <ProfessionalsWaitlist
        isOpen={isProfessionalsModalOpen}
        onClose={handleCloseProfessionalsModal}
      />
    </>
  );
};

export default TypesSections;
