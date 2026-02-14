"use client";

import React, { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "size" | "onClick"
> {
  /**
   * The content to display inside the button
   */
  children: React.ReactNode;
  /**
   * The visual style variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;
  /**
   * The size of the button
   * @default 'md'
   */
  size?: ButtonSize;
  /**
   * Click handler function
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Whether the button should take full width of its container
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Whether to disable animations (useful for reduced motion preferences)
   * @default false
   */
  disableAnimation?: boolean;
}

const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-primary hover:bg-primary-700 active:bg-primary-800 text-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
  secondary:
    "bg-gray-600 hover:bg-gray-700 active:bg-gray-800 text-white focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white active:bg-primary-700 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
  ghost:
    "text-primary hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shadow-none",
} as const;

const BUTTON_SIZES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
} as const;

const ANIMATION_CONFIG = {
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
  primaryHoverShadow: "0 10px 20px rgba(22, 163, 74, 0.3)",
} as const;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      onClick,
      disabled = false,
      type = "button",
      className,
      fullWidth = false,
      disableAnimation = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 shadow-md focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

    const classes = cn(
      baseStyles,
      BUTTON_VARIANTS[variant],
      BUTTON_SIZES[size],
      fullWidth && "w-full",
      className
    );

    const animationProps = disableAnimation
      ? {}
      : {
          whileHover: {
            ...ANIMATION_CONFIG.hover,
            ...(variant === "primary" && {
              boxShadow: ANIMATION_CONFIG.primaryHoverShadow,
            }),
          },
          whileTap: ANIMATION_CONFIG.tap,
        };

    if (disabled || disableAnimation) {
      return (
        <button
          ref={ref}
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={classes}
          aria-disabled={disabled}
          {...props}
        >
          {children}
        </button>
      );
    }

    const MotionButton = motion.button;

    return (
      <MotionButton
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={classes}
        aria-disabled={disabled}
        {...animationProps}
        {...(props as HTMLMotionProps<"button">)}
      >
        {children}
      </MotionButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
