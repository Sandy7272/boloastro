/**
 * Index Page - Comprehensive UX Redesign
 * 
 * Optimized page flow for conversions:
 * 1. Hero (with form + dual CTAs)
 * 2. Trust Section (social proof)
 * 3. How It Works (visual flow)
 * 4. Services (benefit-focused)
 * 5. Sample Report Preview
 * 6. Testimonials
 * 7. Pricing
 * 8. FAQ
 * 9. Final CTA
 * 10. Footer
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import SampleReportPreview from "@/components/SampleReportPreview";
import WhatsAppChatTestimonials from "@/components/WhatsAppChatTestimonials";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import SEO, { SEO_CONFIGS } from "@/components/SEO";
import SkipToContent from "@/components/SkipToContent";

// Structured Data for SEO
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
        {/* 1. Hero with form + dual CTAs */}
        <HeroSection />
        
        {/* 2. Trust Section - social proof immediately */}
        <TrustSection />
        
        {/* 3. How it works - visual step flow */}
        <HowItWorksSection />
        
        {/* 4. Services - benefit-focused cards */}
        <ServicesSection />
        
        {/* 5. Sample Report Preview - show value */}
        <SampleReportPreview />
        
        {/* 6. Testimonials - WhatsApp chat style */}
        <WhatsAppChatTestimonials />
        
        {/* 7. Pricing - clear tiers */}
        <PricingSection />
        
        {/* 8. FAQ - common questions */}
        <FAQSection />
        
        {/* 9. Final WhatsApp CTA */}
        <FinalCTASection />
      </main>
      
      {/* 10. Footer */}
      <Footer />
    </div>
  );
};

export default Index;
