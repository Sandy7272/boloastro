import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import WhyBoloAstroSection from "@/components/WhyBoloAstroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* 1. Hero with form */}
        <HeroSection />
        
        {/* 2. How it works */}
        <HowItWorksSection />
        
        {/* 3. Services */}
        <ServicesSection />
        
        {/* 4. Why trust us */}
        <WhyBoloAstroSection />
        
        {/* 5. Testimonials */}
        <TestimonialsSection />
        
        {/* 6. Pricing */}
        <PricingSection />
        
        {/* 7. FAQ */}
        <FAQSection />
      </main>
      
      {/* 8. Footer with Final CTA */}
      <Footer />
    </div>
  );
};

export default Index;
