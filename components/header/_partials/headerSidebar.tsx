"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION_ITEMS } from "../constants";
import { CUSTOMER_FORM_URL, WAITLIST_FORM_URL } from "@/lib/constants";

interface HeaderSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SIDEBAR_ANIMATION = {
  initial: { x: "100%" },
  animate: { x: 0 },
  exit: { x: "100%" },
  transition: { type: "spring", damping: 25, stiffness: 200 },
} as const;

const BACKDROP_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
} as const;

const ITEM_ANIMATION = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
} as const;

const HeaderSidebar: React.FC<HeaderSidebarProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    onClose(); // Close sidebar first
    setTimeout(() => {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const headerHeight = 80; // Height of fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300); // Wait for sidebar animation to complete
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - visible on mobile and tablet (iPad) until lg */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden"
            {...BACKDROP_ANIMATION}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Sidebar */}
          <motion.aside
            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-[70] lg:hidden overflow-y-auto"
            {...SIDEBAR_ANIMATION}
            aria-label="Navigation menu"
          >
            <div className="flex flex-col h-full p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Navigation Links */}
              <nav
                className="flex flex-col gap-6 mb-8"
                aria-label="Mobile navigation"
              >
                {NAVIGATION_ITEMS.map((item, index) =>
                  item.id === "customers" ? (
                    <motion.a
                      key={item.id}
                      href={CUSTOMER_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#282A3A] hover:text-primary text-[16px] font-medium transition-colors py-2 border-b border-gray-100 cursor-pointer"
                      {...ITEM_ANIMATION}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onClose()}
                    >
                      {item.label}
                    </motion.a>
                  ) : (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-[#282A3A] hover:text-primary text-[16px] font-medium transition-colors py-2 border-b border-gray-100 cursor-pointer"
                      {...ITEM_ANIMATION}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.a>
                  )
                )}
              </nav>

              {/* Early Access Button - outline style to match desktop */}
              <motion.div
                {...ITEM_ANIMATION}
                transition={{ delay: NAVIGATION_ITEMS.length * 0.1 + 0.3 }}
                className="mt-auto"
              >
                <a
                  href={WAITLIST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-4 text-center text-[#282A3A] font-medium text-[16px] rounded-[15px] border-2 border-[#282A3A] bg-transparent hover:bg-[#282A3A] hover:text-white transition-colors"
                  onClick={() => onClose()}
                >
                  Early Access
                </a>
              </motion.div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default HeaderSidebar;
