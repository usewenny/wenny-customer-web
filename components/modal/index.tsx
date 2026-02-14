"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ModalProps {
  /**
   * Whether the modal is open
   */
  isOpen: boolean;
  /**
   * Callback function when modal should close
   */
  onClose: () => void;
  /**
   * Modal content
   */
  children: React.ReactNode;
  /**
   * Whether to show the close button
   * @default true
   */
  showCloseButton?: boolean;
  /**
   * Whether to close on backdrop click
   * @default true
   */
  closeOnBackdropClick?: boolean;
  /**
   * Whether to close on escape key press
   * @default true
   */
  closeOnEscape?: boolean;
  /**
   * Custom className for the modal container
   */
  className?: string;
  /**
   * Custom className for the modal content
   */
  contentClassName?: string;
  /**
   * Maximum width of the modal
   * @default 'max-w-4xl'
   */
  maxWidth?: string;
  /**
   * Whether to disable animations
   * @default false
   */
  disableAnimation?: boolean;
  /**
   * Whether to prevent body scroll when modal is open
   * @default true
   */
  preventBodyScroll?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  className,
  contentClassName,
  maxWidth = "max-w-4xl",
  disableAnimation = false,
  preventBodyScroll = true,
}) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (preventBodyScroll && isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen, preventBodyScroll]);

  // Handle escape key press
  useEffect(() => {
    if (!closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen, onClose, closeOnEscape]);

  const backdropVariants = disableAnimation
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      };

  const modalVariants = disableAnimation
    ? {}
    : {
        initial: {
          opacity: 0,
          scale: 0.95,
          y: 20,
        },
        animate: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        },
        exit: {
          opacity: 0,
          scale: 0.95,
          y: 20,
          transition: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        },
      };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
          {...backdropVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Modal Content */}
          <motion.div
            className={cn(
              "relative rounded-2xl shadow-xl w-full bg-white",
              maxWidth,
              className
            )}
            style={{ maxHeight: "90vh", overflow: "hidden" }}
            {...modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Fixed position, doesn't scroll */}
            {showCloseButton && (
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100 bg-white/80 backdrop-blur-sm"
                aria-label="Close modal"
                whileHover={!disableAnimation ? { scale: 1.1, rotate: 90 } : {}}
                whileTap={!disableAnimation ? { scale: 0.9 } : {}}
                transition={{
                  duration: 0.2,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </motion.button>
            )}

            {/* Modal Body */}
            <div
              className={cn("w-full", contentClassName)}
              style={{ maxHeight: "90vh", height: "100%" }}
            >
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
