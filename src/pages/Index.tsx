/**
 * Index Page - Phase 2: Added DailyPanchang below hero
 * 
 * Main landing page for BoloAstro with:
 * - Hero section with form
 * - Daily Panchang (new in Phase 2)
 * - How it works, Services, Trust, Testimonials, Pricing, FAQ sections
 */

import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DailyPanchang from "@/components/DailyPanchang";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import WhyBoloAstroSection from "@/components/WhyBoloAstroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import DecorativeSeparator from "@/components/ui/decorative-separator";

// Structured Data for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BoloAstro",
  "url": "https://boloastro.com",
  "logo": "https://boloastro.com/logo.png",
  "description": "AI-powered Vedic astrology platform providing free kundali, horoscope predictions, and personalized guidance on WhatsApp.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-7261969798",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi", "Marathi"]
  },
  "sameAs": [
    "https://facebook.com/boloastro",
    "https://instagram.com/boloastro",
    "https://twitter.com/boloastro"
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BoloAstro",
  "operatingSystem": "WhatsApp",
  "applicationCategory": "LifestyleApplication",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "10000"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Free Kundali on WhatsApp | BoloAstro - AI Vedic Astrology</title>
        <meta 
          name="description" 
          content="Get your free kundali and AI-powered Vedic astrology predictions on WhatsApp. Accurate janam kundali, rashifal, career, marriage, and life guidance. Trusted by 10,000+ Indians." 
        />
        <meta 
          name="keywords" 
          content="kundali, janam kundali, free kundali, rashifal, horoscope, vedic astrology, career astrology, love marriage, panchang, AI astrology" 
        />
        <link rel="canonical" href="https://boloastro.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free Kundali on WhatsApp | BoloAstro" />
        <meta property="og:description" content="Get your free kundali and AI-powered Vedic astrology predictions instantly on WhatsApp." />
        <meta property="og:url" content="https://boloastro.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://boloastro.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Kundali on WhatsApp | BoloAstro" />
        <meta name="twitter:description" content="Get your free kundali and AI-powered Vedic astrology predictions instantly." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(softwareApplicationSchema)}
        </script>
      </Helmet>

      <Navbar />
      <main>
        {/* 1. Hero with form */}
        <HeroSection />
        
        {/* Daily Panchang - Phase 2 addition */}
        <section className="py-6 container mx-auto px-4">
          <DailyPanchang />
        </section>
        
        <DecorativeSeparator size="lg" className="my-8" />
        
        {/* 2. How it works */}
        <HowItWorksSection />
        
        <DecorativeSeparator className="my-4" />
        
        {/* 3. Services */}
        <ServicesSection />
        
        <DecorativeSeparator className="my-4" />
        
        {/* 4. Why trust us */}
        <WhyBoloAstroSection />
        
        <DecorativeSeparator className="my-4" />
        
        {/* 5. Testimonials */}
        <TestimonialsSection />
        
        <DecorativeSeparator className="my-4" />
        
        {/* 6. Pricing */}
        <PricingSection />
        
        <DecorativeSeparator className="my-4" />
        
        {/* 7. FAQ */}
        <FAQSection />
      </main>
      
      {/* 8. Footer with Final CTA */}
      <Footer />
    </div>
  );
};

export default Index;
