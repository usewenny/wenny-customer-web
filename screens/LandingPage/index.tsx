import Header from "@/components/header";
import React from "react";
import HeroSection from "./_partials/HeroSection";
import BusinessTypesSection from "./_partials/BusinessTypesSection";
import OneToolSection from "./_partials/OneToolSection";
import ReachNewCustomersSection from "./_partials/ReachNewCustomersSection";
import SecureYourTimeSection from "./_partials/SecureYourTimeSection";
import AutomatedRemindersSection from "./_partials/AutomatedRemindersSection";
import EliminateMagicSection from "./_partials/EliminateMagicSection";
// import WhyUs from "./_partials/WhyUs";
import Footer from "@/components/footer";
import Faq from "./_partials/faq";
import GrowYourEmpireSection from "./_partials/GrowYourEmpireSection";

const LandingPage = () => {
  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <Header />
      <main className="w-full min-w-0 pt-20">
        <HeroSection />
        <BusinessTypesSection />
        <OneToolSection />
        <section id="why">
          <ReachNewCustomersSection />
          <SecureYourTimeSection />
          <AutomatedRemindersSection />
          <EliminateMagicSection />
        </section>
        <section id="faqs">
          <Faq />
        </section>
        <GrowYourEmpireSection />
        <section id="contact">
          <Footer />
        </section>
        {/* Page content goes here */}
      </main>
    </div>
  );
};

export default LandingPage;
