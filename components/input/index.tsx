"use client";

import React, { forwardRef, useState, useRef, useEffect } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export type InputSize = "sm" | "md" | "lg";

export interface AppInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "onChange" | "onFocus" | "onBlur"
> {
  /**
   * The size of the input field
   * @default 'md'
   */
  size?: InputSize;
  /**
   * Label text displayed above the input
   */
  label?: string;
  /**
   * Helper text displayed below the input
   */
  helperText?: string;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Whether to show a floating label animation
   * @default false
   */
  floatingLabel?: boolean;
  /**
   * Custom onChange handler
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Custom onFocus handler
   */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Custom onBlur handler
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Whether to disable animations
   * @default false
   */
  disableAnimation?: boolean;
  /**
   * Icon to display on the left side of the input
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon to display on the right side of the input
   */
  rightIcon?: React.ReactNode;
}

const INPUT_SIZES: Record<InputSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-3 text-base",
  lg: "px-5 py-4 text-lg",
} as const;

const AppInput = forwardRef<HTMLInputElement, AppInputProps>(
  (
    {
      size = "md",
      label,
      helperText,
      error,
      floatingLabel = false,
      placeholder,
      value,
      onChange,
      onFocus,
      onBlur,
      className,
      disabled = false,
      disableAnimation = false,
      leftIcon,
      rightIcon,
      type = "text",
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const internalRef = useRef<HTMLInputElement>(null);
    const inputRef = (ref as React.RefObject<HTMLInputElement>) || internalRef;

    useEffect(() => {
      if (value !== undefined && value !== null && value !== "") {
        setIsFilled(true);
      } else {
        setIsFilled(false);
      }
    }, [value]);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsFilled(e.target.value.length > 0);
      onChange?.(e);
    };

    const isActive = isFocused || isFilled;
    const hasError = !!error;

    const baseStyles =
      "w-full bg-white border rounded-lg transition-all duration-300 font-inter outline-none focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50";

    const sizeStyles = INPUT_SIZES[size];
    const borderStyles = hasError
      ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200"
      : isFocused
        ? "border-primary focus:border-primary-600 focus:ring-2 focus:ring-primary-200"
        : "border-gray-300 hover:border-gray-400";

    const inputClasses = cn(
      baseStyles,
      sizeStyles,
      borderStyles,
      leftIcon && "pl-10",
      rightIcon && "pr-10",
      className
    );

    const containerProps = disableAnimation
      ? {}
      : {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

    const inputProps = disableAnimation
      ? {}
      : {
          whileFocus: {
            scale: 1.01,
            transition: {
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1] as const,
            },
          },
        };

    const MotionInput = motion.input;

    return (
      <motion.div className="w-full" {...containerProps}>
        {label && !floatingLabel && (
          <motion.label
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-700 mb-2"
            animate={{
              color: hasError ? "#ef4444" : isFocused ? "#16a34a" : "#6b7280",
            }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </motion.label>
        )}

        <div className="relative">
          {leftIcon && (
            <motion.div
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10"
              animate={{
                color: isFocused ? "#16a34a" : "#9ca3af",
                scale: isFocused ? 1.1 : 1,
              }}
              transition={{
                duration: 0.2,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              {leftIcon}
            </motion.div>
          )}

          {floatingLabel && label && (
            <motion.label
              htmlFor={props.id}
              className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 font-inter transition-all duration-200 origin-left z-10"
              animate={{
                y: isActive ? -28 : 0,
                scale: isActive ? 0.85 : 1,
                color: hasError ? "#ef4444" : isActive ? "#16a34a" : "#6b7280",
              }}
              transition={{
                duration: 0.2,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              {label}
              {props.required && <span className="text-red-500 ml-1">*</span>}
            </motion.label>
          )}

          <MotionInput
            ref={inputRef}
            type={type}
            value={value}
            placeholder={floatingLabel && label ? undefined : placeholder}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            className={inputClasses}
            {...inputProps}
            {...(props as HTMLMotionProps<"input">)}
          />

          {rightIcon && (
            <motion.div
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10"
              animate={{
                color: isFocused ? "#16a34a" : "#9ca3af",
                scale: isFocused ? 1.1 : 1,
              }}
              transition={{
                duration: 0.2,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              {rightIcon}
            </motion.div>
          )}

          {isFocused && !disableAnimation && (
            <motion.div
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{
                boxShadow: hasError
                  ? "0 0 0 2px rgba(239, 68, 68, 0.1)"
                  : "0 0 0 2px rgba(22, 163, 74, 0.1)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </div>

        {(helperText || error) && (
          <motion.p
            className={cn(
              "mt-2 text-sm",
              error ? "text-red-500" : "text-gray-500"
            )}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {error || helperText}
          </motion.p>
        )}
      </motion.div>
    );
  }
);

AppInput.displayName = "AppInput";

export default AppInput;
