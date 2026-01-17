/**
 * Index Page - Phase 4: SEO Enhanced
 * 
 * Main landing page for BoloAstro with:
 * - Full SEO meta tags via SEO component
 * - Organization + SoftwareApplication structured data
 * - Hero section with form
 * - Daily Panchang (Phase 2)
 * - How it works, Services, Trust, Testimonials, Pricing, FAQ sections
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import DailyPanchang from "@/components/DailyPanchang";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import WhyBoloAstroSection from "@/components/WhyBoloAstroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import SEO, { SEO_CONFIGS } from "@/components/SEO";
import SkipToContent from "@/components/SkipToContent";

// Structured Data for SEO - Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BoloAstro",
  "url": "https://boloastro.com",
  "logo": "https://boloastro.com/logo.png",
  "description": "AI-powered Vedic astrology platform providing free kundali, horoscope predictions, and personalized guidance on WhatsApp.",
  "foundingDate": "2022",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-7261969798",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi", "Marathi"],
  },
  "sameAs": [
    "https://facebook.com/boloastro",
    "https://instagram.com/boloastro",
    "https://twitter.com/boloastro",
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pune",
    "addressCountry": "IN",
  },
};

// Structured Data - SoftwareApplication (for WhatsApp bot)
const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BoloAstro - AI Vedic Astrology",
  "operatingSystem": "WhatsApp",
  "applicationCategory": "LifestyleApplication",
  "description": "AI-powered Vedic astrology chatbot on WhatsApp for kundali, horoscope, and life predictions.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "10000",
    "bestRating": "5",
    "worstRating": "1",
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR",
    "description": "Free kundali generation",
  },
};

// Structured Data - WebSite (for sitelinks search)
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "BoloAstro",
  "url": "https://boloastro.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://boloastro.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SkipToContent />
      <SEO 
        {...SEO_CONFIGS.home}
        structuredData={[organizationSchema, softwareApplicationSchema, websiteSchema]}
      />

      <Navbar />
      <main role="main">
        {/* 1. Hero with form */}
        <HeroSection />
        
        {/* 2. Trust Section - builds credibility */}
        <TrustSection />
        
        {/* 3. Daily Panchang */}
        <section className="py-8 container mx-auto px-4">
          <DailyPanchang />
        </section>
        
        {/* 4. How it works */}
        <HowItWorksSection />
        
        {/* 5. Services */}
        <ServicesSection />
        
        {/* 6. Why trust us (detailed) */}
        <WhyBoloAstroSection />
        
        {/* 7. Testimonials */}
        <TestimonialsSection />
        
        {/* 8. Pricing */}
        <PricingSection />
        
        {/* 9. FAQ */}
        <FAQSection />
      </main>
      
      {/* 8. Footer with Final CTA */}
      <Footer />
    </div>
  );
};

export default Index;
