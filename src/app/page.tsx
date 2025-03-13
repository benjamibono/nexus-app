import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-4";
import StatsSection from "@/components/stats";
import TestimonialsSection from "@/components/testimonials";
import PricingSection from "@/components/pricing";
import FAQSection from "@/components/faqs";
import CTASection from "@/components/cta";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
