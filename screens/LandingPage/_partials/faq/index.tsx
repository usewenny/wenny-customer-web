"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "1",
    question: "How does Wenny help my business ?",
    answer:
      "Wenny provides you with the tools that help you manage and grow your business with ease. From retaining existing customers to attracting new customers from our robust marketplace where customers can easily find your business. Wenny can do many and potentially more of these listed features which includes; salon management system, revenue growth, customer retention and attraction, reduce no-shows, team management, payment processing, product inventory, memberships, promos, customer loyalty rewards, business performance and analytics insight, robust marketplace etc.",
  },
  {
    id: "2",
    question: "Are there hidden charges using Wenny ?",
    answer:
      "No! Wenny operates a transparent pricing model with no hidden charges. Wenny provides businesses and professionals with affordable monthly subscription pricing for independent professionals and team professionals with no hidden charges.",
  },
  {
    id: "3",
    question: "Does Wenny support all businesses ?",
    answer:
      "Wenny is available for all beauty and wellness businesses as well as professionals who provide beauty and wellness services.",
  },
  {
    id: "4",
    question: "Does Wenny operate globally ?",
    answer:
      "While we aspire to be a global brand, Wenny currently operates within the 36 states of the federation.",
  },
  {
    id: "5",
    question: "How does Wenny benefit me as a customer or client ?",
    answer:
      "Wenny robust beauty and wellness marketplace is designed specifically for all customers seeking beauty and wellness services. From our marketplace you can easily discover and book top-rated beauty and wellness professionals around you, know your appointment time and get reminders about your appointment with no stress. Wenny saves you the waiting time in the salon, spas, studio or clinic, back and forth phone calls and messages, and lets you book at your convenience.",
  },
];

const Faq = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(["1"]));

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-[74px] md:py-24 px-4 sm:px-6 md:px-[131px] bg-[#FAFBF9]">
      <div className="max-w-[1176px] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-[32px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-[40px] font-lato font-bold text-[#000000] mb-[21px]">
            FAQs
          </h2>
          <p className="text-[#000000B2] font-medium font-montserrat text-base md:text-[20px]">
            Some frequently asked questions
          </p>
        </motion.div>

        {/* FAQ list — single white block with dividers */}
        <motion.div
          className="bg-white rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {FAQ_DATA.map((item, index) => {
            const isOpen = openItems.has(item.id);
            const isLast = index === FAQ_DATA.length - 1;
            return (
              <div key={item.id}>
                <motion.button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 md:px-8 py-5 flex items-center justify-between text-left gap-4"
                  whileTap={{ scale: 0.998 }}
                >
                  <span className="text-[#000000] font-medium font-montserrat text-base md:text-[24px] flex-1">
                    {item.question}
                  </span>
                  {/* Plus icon in dark grey circle */}
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full border border-[#00000080] flex items-center justify-center text-[#374151] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 2v10M2 7h10" />
                    </svg>
                  </span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-5 pt-0">
                        <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!isLast && (
                  <div className="mx-6 md:mx-8 h-px bg-[#E5E7EB]" aria-hidden />
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
