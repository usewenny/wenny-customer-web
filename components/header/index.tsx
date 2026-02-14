"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeaderSidebar from "./_partials/headerSidebar";
import appDarkLogo from "@/assets/images/app-dark-logo.png";
import { CUSTOMER_FORM_URL, WAITLIST_FORM_URL } from "@/lib/constants";
import menuIcon from "@/assets/images/icon-menu.png";
import { NAVIGATION_ITEMS } from "./constants";

const SCROLL_THRESHOLD = 60;

const NAV_LINK_ANIMATION = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
} as const;

const LOGO_ANIMATION = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5, delay: 0.1 },
} as const;

const BUTTON_ANIMATION = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay: 0.3 },
} as const;

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
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
  };

  const navLinks = useMemo(
    () =>
      NAVIGATION_ITEMS.map((item) =>
        item.id === "customers" ? (
          <motion.a
            key={item.id}
            href={CUSTOMER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#282A3A] hover:text-gray-900 text-[14px] font-montserrat font-semibold transition-colors cursor-pointer"
            whileHover={NAV_LINK_ANIMATION.hover}
            whileTap={NAV_LINK_ANIMATION.tap}
            aria-label={item.label}
          >
            {item.label}
          </motion.a>
        ) : (
          <motion.a
            key={item.id}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="text-[#282A3A] hover:text-gray-900 text-[14px] font-montserrat font-semibold transition-colors cursor-pointer"
            whileHover={NAV_LINK_ANIMATION.hover}
            whileTap={NAV_LINK_ANIMATION.tap}
            aria-label={item.label}
          >
            {item.label}
          </motion.a>
        )
      ),
    []
  );

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent shadow-none"
        }`}
      >
        <div className="px-4 sm:px-6 md:px-10 lg:px-[71px]">
          <div className="flex items-center justify-between py-[15px] ">
            {/* Logo Section */}
            <motion.a
              href="/"
              className="flex items-center gap-3"
              {...LOGO_ANIMATION}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Wenny Home"
            >
              <Image
                src={appDarkLogo}
                alt="Wenny Logo"
                priority
                className="w-[80px] h-[23px] object-contain"
              />
            </motion.a>

            {/* Navigation Links - hidden on tablet (iPad), show from lg (1024px) */}
            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Main navigation"
            >
              {navLinks}
            </nav>

            {/* Mobile/Tablet Menu Icon - show until lg (1024px) for iPad */}
            <motion.button
              className="lg:hidden flex items-center justify-center p-2"
              {...BUTTON_ANIMATION}
              onClick={toggleSidebar}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Open menu"
              aria-expanded={isSidebarOpen}
            >
              <Image
                src={menuIcon}
                alt="Menu"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
            </motion.button>

            {/* Early Access Button - Desktop only (lg and up), outline style per UI */}
            <motion.div {...BUTTON_ANIMATION} className="hidden lg:block">
              <a
                href={WAITLIST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 text-[#282A3A] font-semibold text-[14px] rounded-[10px] border-[1px] border-[#000000] bg-transparent font-montserrat hover:bg-[#282A3A] hover:text-white transition-colors cursor-pointer"
              >
                Early Access
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <HeaderSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Header;
