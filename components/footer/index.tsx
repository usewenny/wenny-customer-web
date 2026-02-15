"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import appDarkLogo from "@/assets/images/app-dark-logo.png";
import heroImageOverlay from "@/assets/images/hero-image-overlay.png";
import heroOverlay2 from "@/assets/images/hero-overlay-2.png";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import Xicon from "@/assets/icons/Xicon";
import FacebookIcon from "@/assets/icons/FacebookIcon";

const ABOUT_LINKS = [{ label: "Why Wenny", href: "#" }] as const;

const SOCIAL_LINKS = [
  {
    id: "facebook",
    name: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61580448456735&sk=about",
    icon: <FacebookIcon />,
  },
  {
    id: "instagram",
    name: "Instagram",
    href: "https://www.instagram.com/usewenny",
    icon: <InstagramIcon />,
  },
  {
    id: "twitter",
    name: "Twitter/X",
    href: "https://x.com/usewenny",
    icon: <Xicon />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/wenny/",
    icon: <LinkedInIcon />,
  },
] as const;

const Footer = () => {
  return (
    <footer className="relative bg-[#0f1419] text-white overflow-hidden">
      {/* Top green strip - textured */}
      <div
        className="relative h-2 w-full flex-shrink-0"
        style={{ backgroundColor: "#3CB472" }}
        aria-hidden
      >
        <div
          className="absolute inset-0 opacity-60 pointer-events-none bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${heroImageOverlay.src})`,
            backgroundSize: "cover",
          }}
        />
        <div
          className="absolute inset-0 opacity-60 pointer-events-none bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${heroOverlay2.src})`,
            backgroundSize: "cover",
          }}
        />
      </div>

      <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-[40px] xl:px-[50px] pt-10 pb-8 md:pt-12 md:pb-10">
        {/* Main: logo left, columns right */}
        <motion.div
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-16 mb-12 md:mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo - left */}
          <div className="flex flex-col">
            <Image
              src={appDarkLogo}
              alt="Wenny"
              className="w-[80px] h-[23px] object-contain brightness-0 invert"
            />
          </div>

          {/* About Wenny + Our Social - right; on mobile align content from left */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 md:gap-24 w-full md:w-auto items-start text-left">
            {/* About Wenny */}
            <div className="flex flex-col gap-3 items-start text-left w-full md:w-auto">
              <h3 className="text-white font-bold text-base md:text-[24px] font-lato mb-[21px]">
                About Wenny
              </h3>
              <ul className="flex flex-col gap-2 items-start text-left">
                {ABOUT_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#FFFFFF8A] hover:text-white transition-colors text-sm md:text-[18px] font-montserrat font-medium text-left"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Social */}
            <div className="flex flex-col gap-3 items-start text-left w-full md:w-auto">
              <h3 className="text-white font-bold text-base md:text-[24px] font-lato mb-[21px]">
                Our Social
              </h3>
              <ul className="flex flex-col gap-2 items-start text-left">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.id} className="w-full">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 mb-[21px] text-[#FFFFFF8A] hover:text-white transition-colors text-sm md:text-[18px] font-montserrat font-medium text-left justify-start"
                    >
                      {/* <span className="[&_svg]:w-4 [&_svg]:h-4 text-current flex-shrink-0">
                        {link.icon}
                      </span> */}
                      <span className="text-left">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Copyright - bottom right */}
        <motion.p
          className=" text-[#FFFFFF8A] font-lato text-xs md:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Copyright © 2026 Wenny Technologies Ltd. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
