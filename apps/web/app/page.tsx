import { CapabilitiesSection } from "@/components/landing/capabilities-section";
import { DayInLifeSection } from "@/components/landing/day-in-life-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingHeader } from "@/components/landing/landing-header";
import { OperationsSection } from "@/components/landing/operations-section";
import { PrivacySection } from "@/components/landing/privacy-section";
import { ProductDecisionSection } from "@/components/landing/product-decision-section";
import { WeeklyStorySection } from "@/components/landing/weekly-story-section";

export default function LandingPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-nw-violet focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <LandingHeader />

      <main id="main" className="flex-1">
        <HeroSection />
        <DayInLifeSection />
        <CapabilitiesSection />
        <HowItWorksSection />
        <ProductDecisionSection />
        <WeeklyStorySection />
        <PrivacySection />
        <OperationsSection />
        <FinalCtaSection />
      </main>

      <LandingFooter />
    </>
  );
}
