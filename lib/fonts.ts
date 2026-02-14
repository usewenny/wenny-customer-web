import localFont from "next/font/local";

/**
 * Inter font family with all weight variants
 * Configured for use throughout the application
 *
 * Available weights:
 * - Light (300)
 * - Regular (400)
 * - Medium (500)
 * - SemiBold (600)
 * - Bold (700)
 *
 * Usage in Tailwind:
 * - font-inter (applied by default)
 * - font-light, font-normal, font-medium, font-semibold, font-bold
 *
 * Usage in CSS:
 * - font-family: var(--font-inter)
 * - font-weight: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
 */
export const inter = localFont({
  src: [
    {
      path: "../assets/fonts/Inter/Inter_18pt-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Inter/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Inter/Inter_18pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Inter/Inter_18pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Inter/Inter_18pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

/**
 * Montserrat font family
 * Usage: font-montserrat in Tailwind, or font-family: var(--font-montserrat)
 */
export const montserrat = localFont({
  src: [
    {
      path: "../assets/fonts/Montserrat/static/Montserrat-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat/static/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat/static/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat/static/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});

/**
 * Lato font family
 * Usage: font-lato in Tailwind, or font-family: var(--font-lato)
 */
export const lato = localFont({
  src: [
    {
      path: "../assets/fonts/Lato/Lato-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Lato/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Lato/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lato",
  display: "swap",
  preload: true,
});

/**
 * Font weight constants for type-safe usage
 */
export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export type FontWeight = keyof typeof fontWeights;
