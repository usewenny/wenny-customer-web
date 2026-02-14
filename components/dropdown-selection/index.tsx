"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export type DropdownSize = "sm" | "md" | "lg";

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownSelectionProps {
  /**
   * Array of options to display in the dropdown
   */
  options: DropdownOption[];
  /**
   * Currently selected value
   */
  value?: string;
  /**
   * Placeholder text when no option is selected
   * @default 'Select an option'
   */
  placeholder?: string;
  /**
   * Label text displayed above the dropdown
   */
  label?: string;
  /**
   * Helper text displayed below the dropdown
   */
  helperText?: string;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * The size of the dropdown
   * @default 'md'
   */
  size?: DropdownSize;
  /**
   * Whether the dropdown is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Whether the dropdown is searchable
   * @default true
   */
  searchable?: boolean;
  /**
   * Custom onChange handler
   */
  onChange?: (value: string) => void;
  /**
   * Custom onBlur handler
   */
  onBlur?: () => void;
  /**
   * Custom className for the container
   */
  className?: string;
  /**
   * Whether to disable animations
   * @default false
   */
  disableAnimation?: boolean;
  /**
   * Whether the field is required
   * @default false
   */
  required?: boolean;
}

const DROPDOWN_SIZES: Record<DropdownSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-3 text-base",
  lg: "px-5 py-4 text-lg",
} as const;

const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

const DropdownSelection: React.FC<DropdownSelectionProps> = ({
  options,
  value,
  placeholder = "Select an option",
  label,
  helperText,
  error,
  size = "md",
  disabled = false,
  searchable = true,
  onChange,
  onBlur,
  className,
  disableAnimation = false,
  required = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Filter options based on search query
  const filteredOptions = searchable
    ? options.filter((option) =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchQuery("");
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  // Focus input when dropdown opens
  useEffect(() => {
    if (isOpen && searchable && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleSelect = (optionValue: string) => {
    if (onChange) {
      onChange(optionValue);
    }
    setIsOpen(false);
    setSearchQuery("");
  };

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setSearchQuery("");
      }
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) {
      onBlur();
    }
  };

  const hasError = !!error;
  const isActive = isFocused || isOpen;

  const baseStyles =
    "w-full bg-white border rounded-lg transition-all duration-300 font-inter outline-none focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 relative cursor-pointer";

  const sizeStyles = DROPDOWN_SIZES[size];
  const borderStyles = hasError
    ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200"
    : isActive
      ? "border-primary focus:border-primary-600 focus:ring-2 focus:ring-primary-200"
      : "border-gray-300 hover:border-gray-400";

  const containerClasses = cn(baseStyles, sizeStyles, borderStyles, className);

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

  const dropdownProps = disableAnimation
    ? {}
    : {
        initial: {
          opacity: 0,
          y: -10,
          scale: 0.95,
        },
        animate: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.2,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        },
        exit: {
          opacity: 0,
          y: -10,
          scale: 0.95,
          transition: {
            duration: 0.15,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        },
      };

  return (
    <motion.div className="w-full" {...containerProps}>
      {label && (
        <motion.label
          className="block text-sm font-medium text-gray-700 mb-2"
          animate={{
            color: hasError ? "#ef4444" : isActive ? "#16a34a" : "#6b7280",
          }}
          transition={{
            duration: 0.2,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </motion.label>
      )}

      <div className="relative" ref={dropdownRef}>
        <motion.div
          className={containerClasses}
          onClick={handleToggle}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          tabIndex={disabled ? -1 : 0}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label={label || placeholder}
          animate={
            !disableAnimation && isActive
              ? {
                  scale: 1.01,
                  transition: {
                    duration: 0.2,
                    ease: [0.22, 1, 0.36, 1] as const,
                  },
                }
              : {}
          }
        >
          <div className="flex items-center justify-between min-w-0 w-full">
            {searchable && isOpen ? (
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                onFocus={(e) => {
                  e.stopPropagation();
                  setIsFocused(true);
                }}
                className="flex-1 min-w-0 bg-transparent outline-none text-gray-900 placeholder-gray-400 pr-2"
                placeholder={selectedOption?.label || placeholder}
              />
            ) : (
              <span
                className={cn(
                  "flex-1 min-w-0 text-left truncate pr-2",
                  selectedOption ? "text-gray-900" : "text-gray-400"
                )}
              >
                {selectedOption?.label || placeholder}
              </span>
            )}

            <motion.div
              className="flex-shrink-0 text-gray-900"
              animate={
                !disableAnimation
                  ? {
                      rotate: isOpen ? 180 : 0,
                      transition: {
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1] as const,
                      },
                    }
                  : {}
              }
            >
              <ChevronDownIcon isOpen={isOpen} />
            </motion.div>
          </div>
        </motion.div>

        {isActive && !disableAnimation && (
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

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="absolute z-50 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto"
              {...dropdownProps}
              role="listbox"
            >
              {filteredOptions.length === 0 ? (
                <li className="px-4 py-3 text-sm text-gray-500 text-center">
                  No options found
                </li>
              ) : (
                filteredOptions.map((option, index) => (
                  <motion.li
                    key={option.value}
                    custom={index}
                    {...(disableAnimation
                      ? {}
                      : {
                          initial: { opacity: 0, x: -10 },
                          animate: {
                            opacity: 1,
                            x: 0,
                            transition: {
                              delay: index * 0.02,
                              duration: 0.2,
                              ease: [0.22, 1, 0.36, 1] as const,
                            },
                          },
                          exit: {
                            opacity: 0,
                            x: -10,
                            transition: {
                              duration: 0.15,
                            },
                          },
                        })}
                    className={cn(
                      "px-4 py-3 cursor-pointer transition-colors duration-150",
                      option.value === value
                        ? "bg-primary-50 text-primary-700 font-medium"
                        : "text-gray-900 hover:bg-gray-50",
                      option.disabled &&
                        "opacity-50 cursor-not-allowed hover:bg-transparent"
                    )}
                    onClick={() =>
                      !option.disabled && handleSelect(option.value)
                    }
                    onMouseEnter={(e) => {
                      if (!option.disabled && !disableAnimation) {
                        e.currentTarget.style.backgroundColor =
                          option.value === value ? "#dcfce7" : "#f9fafb";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!option.disabled && !disableAnimation) {
                        e.currentTarget.style.backgroundColor =
                          option.value === value ? "#dcfce7" : "transparent";
                      }
                    }}
                    role="option"
                    aria-selected={option.value === value}
                  >
                    <motion.div
                      whileHover={
                        !disableAnimation && !option.disabled ? { x: 4 } : {}
                      }
                      transition={{
                        duration: 0.2,
                        ease: [0.22, 1, 0.36, 1] as const,
                      }}
                    >
                      {option.label}
                    </motion.div>
                  </motion.li>
                ))
              )}
            </motion.ul>
          )}
        </AnimatePresence>
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
};

export default DropdownSelection;
