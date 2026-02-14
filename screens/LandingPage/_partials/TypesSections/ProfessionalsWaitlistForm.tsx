"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import AppInput from "@/components/input";
import DropdownSelection from "@/components/dropdown-selection";
import Button from "@/components/button";
import appLogo from "@/assets/images/app-logo.png";
import { NIGERIAN_STATES } from "@/lib/constants";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  whatsappNumber: Yup.string().required("WhatsApp number is required"),
  businessName: Yup.string().required("Business name is required"),
  role: Yup.string().required("Role is required"),
  businessType: Yup.string().required("Business type is required"),
  businessAddress: Yup.string().required("Business address is required"),
  state: Yup.string().required("State is required"),
});

const roleOptions = [
  { value: "owner", label: "Owner" },
  { value: "employee", label: "Employee" },
];

const stateOptions = NIGERIAN_STATES;

const ProfessionalsWaitlistForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      whatsappNumber: "",
      businessName: "",
      role: "",
      businessType: "",
      businessAddress: "",
      state: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Form values:", values);
      // Handle form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Form submitted successfully!");
    },
  });

  return (
    <div className="bg-white p-[16px] md:p-8">
      {/* Logo */}
      <div className="mb-6">
        <Image
          src={appLogo}
          alt="Wenny"
          width={100}
          height={35}
          className="mb-8"
        />
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          For Professionals
        </h2>
        <p className="text-gray-600 text-sm">
          Manage your business with excellent reliability
        </p>
      </div>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* First Name and Last Name */}
        <div className="grid grid-cols-2 gap-3">
          <AppInput
            placeholder="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="firstName"
            error={
              formik.touched.firstName && formik.errors.firstName
                ? formik.errors.firstName
                : undefined
            }
          />
          <AppInput
            placeholder="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="lastName"
            error={
              formik.touched.lastName && formik.errors.lastName
                ? formik.errors.lastName
                : undefined
            }
          />
        </div>

        {/* Email Address */}
        <AppInput
          placeholder="Email Address"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="email"
          error={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : undefined
          }
        />

        {/* WhatsApp Number */}
        <AppInput
          placeholder="WhatsApp Number"
          type="tel"
          value={formik.values.whatsappNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="whatsappNumber"
          error={
            formik.touched.whatsappNumber && formik.errors.whatsappNumber
              ? formik.errors.whatsappNumber
              : undefined
          }
        />

        {/* Business Name */}
        <AppInput
          placeholder="Business Name"
          value={formik.values.businessName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="businessName"
          error={
            formik.touched.businessName && formik.errors.businessName
              ? formik.errors.businessName
              : undefined
          }
        />

        {/* Role */}
        <DropdownSelection
          placeholder="Role"
          options={roleOptions}
          value={formik.values.role}
          onChange={(value) => formik.setFieldValue("role", value)}
          onBlur={() => formik.setFieldTouched("role", true)}
          error={
            formik.touched.role && formik.errors.role
              ? formik.errors.role
              : undefined
          }
        />

        {/* Business Type */}
        <AppInput
          placeholder="Business type (Barber salon, Hair salon, Spa)"
          value={formik.values.businessType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="businessType"
          error={
            formik.touched.businessType && formik.errors.businessType
              ? formik.errors.businessType
              : undefined
          }
        />

        {/* Business Address */}
        <AppInput
          placeholder="Business Address"
          value={formik.values.businessAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="businessAddress"
          error={
            formik.touched.businessAddress && formik.errors.businessAddress
              ? formik.errors.businessAddress
              : undefined
          }
        />

        {/* State */}
        <DropdownSelection
          placeholder="State"
          options={stateOptions}
          value={formik.values.state}
          onChange={(value) => formik.setFieldValue("state", value)}
          onBlur={() => formik.setFieldTouched("state", true)}
          error={
            formik.touched.state && formik.errors.state
              ? formik.errors.state
              : undefined
          }
        />

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          disabled={formik.isSubmitting}
          className="!bg-primary-500 hover:!bg-primary-600 !text-white"
        >
          {formik.isSubmitting ? "Submitting..." : "Join the Waitlist"}
        </Button>
      </form>
    </div>
  );
};

export default ProfessionalsWaitlistForm;
