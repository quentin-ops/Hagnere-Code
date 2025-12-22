import { FAQs } from "@/components/faqs";
import { Features } from "@/components/features";
import { FeaturesSecondary } from "@/components/features-secondary";
import { FeaturesTertiary } from "@/components/features-tertiary";
import { Hero } from "@/components/hero";
import { Outcomes } from "@/components/outcomes";
import { Pricing } from "@/components/pricing";
import { Speed } from "@/components/speed";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Speed />
      <FeaturesSecondary />
      <Outcomes />
      <FeaturesTertiary />
      <Pricing />
      <FAQs />
    </div>
  );
}
