"use client";

import React from "react";
import Modal from "@/components/modal";
import Image from "next/image";
import WaitlistImage from "@/assets/images/for-customers.png";
import CustomersWaitlistForm from "@/screens/LandingPage/_partials/TypesSections/CustomersWaitlistForm";

export interface CustomersWaitlistProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomersWaitlist: React.FC<CustomersWaitlistProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="max-w-[1100px]"
      contentClassName="!p-0"
    >
      <div className="flex w-full p-[12px] md:p-[12px] gap-4 md:gap-6">
        {/* Left Section - Bootstrap: col-lg-7 (>= 992px) */}
        <div className="hidden min-[992px]:block min-[992px]:w-7/12 bg-[#1a1a1a] relative overflow-hidden rounded-lg flex-shrink-0">
          <Image
            src={WaitlistImage}
            alt="image"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Section - Bootstrap: col-lg-5 (form). Full width under 992px */}
        <div className="w-full min-[992px]:w-5/12 flex flex-col overflow-hidden flex-shrink-0">
          <div className="flex-1 overflow-y-auto">
            <CustomersWaitlistForm />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CustomersWaitlist;
