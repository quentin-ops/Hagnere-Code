import { CTAWithDashedGridLines } from "@/components/cta-dashed";
import { FAQs } from "@/components/faqs";
import { Features } from "@/components/features";
import { FeaturesSecondary } from "@/components/features-secondary";
import { FeaturesWithStickyScroll } from "@/components/features-sticky-scroll";
import { FeaturesTertiary } from "@/components/features-tertiary";
import { Hero } from "@/components/hero";
import { Offers } from "@/components/offers";
import { Outcomes } from "@/components/outcomes";
import { Pricing } from "@/components/pricing";
import { PricingHeader } from "@/components/pricing-header";
import { ServicesChips } from "@/components/services-chips";
import { Speed } from "@/components/speed";
import { StatsSection } from "@/components/stats-section";
import { StatsGrowth } from "@/components/stats-growth";
import { Team } from "@/components/team";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Speed />
      <FeaturesWithStickyScroll />
      <CTAWithDashedGridLines />
      <Offers />
      <ServicesChips />
      <StatsSection />
      <StatsGrowth />
      <FeaturesSecondary />
      <Team />
      <Outcomes />
      <PricingHeader />
      <FeaturesTertiary />
      <Pricing />
      <FAQs />
    </div>
  );
}
