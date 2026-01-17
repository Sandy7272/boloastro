/**
 * Services Page - Phase 4: SEO Enhanced
 * 
 * Features:
 * - Full SEO meta tags via SEO component
 * - Service schema for rich snippets
 * - Light theme styling
 * - Pricing plans with structured data
 */

import { motion } from "framer-motion";
import { 
  Star, Heart, Briefcase, Coins, 
  MessageCircle, FileText, Video, CheckCircle 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO, { SEO_CONFIGS } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { getWhatsAppLink, WHATSAPP_MESSAGES, PRICING_PLANS } from "@/config/constants";

const services = [
  {
    icon: Star,
    title: "Free Kundali",
    description: "Get your complete birth chart (Janam Kundali) with planetary positions, houses, and basic analysis.",
    price: "Free",
    features: ["Birth Chart", "Planet Positions", "Basic Analysis", "Moon Sign"],
    message: WHATSAPP_MESSAGES.freeKundali,
  },
  {
    icon: FileText,
    title: "Premium Report",
    description: "Detailed 20+ page PDF report with comprehensive life predictions and remedies.",
    price: "₹299",
    features: ["20+ Page PDF", "5 Year Forecast", "Remedies", "Lucky Gems"],
    message: WHATSAPP_MESSAGES.premiumReport,
  },
  {
    icon: Video,
    title: "VIP Consultation",
    description: "One-on-one video call with experienced Vedic astrologers for personalized guidance.",
    price: "₹999",
    features: ["30 Min Video Call", "Expert Astrologer", "Detailed Q&A", "Follow-up Support"],
    message: WHATSAPP_MESSAGES.vipConsultation,
  },
  {
    icon: Heart,
    title: "Match Making",
    description: "Kundali Milan with Gun Milan score, Mangal Dosha check, and compatibility analysis.",
    price: "₹199",
    features: ["36 Gun Milan", "Mangal Dosha Check", "Compatibility Score", "Best Muhurat"],
    message: WHATSAPP_MESSAGES.matchMaking,
  },
  {
    icon: Briefcase,
    title: "Career Prediction",
    description: "Detailed career analysis with best periods for job change, business, and promotions.",
    price: "₹249",
    features: ["Career Graph", "Best Periods", "Business Analysis", "Job Guidance"],
    message: WHATSAPP_MESSAGES.careerPrediction,
  },
  {
    icon: Coins,
    title: "Finance Prediction",
    description: "Wealth and financial analysis with investment guidance and lucky periods.",
    price: "₹249",
    features: ["Wealth Yoga", "Investment Timing", "Property Analysis", "Lucky Periods"],
    message: WHATSAPP_MESSAGES.financePrediction,
  },
];

// Services page schema for rich snippets
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": {
    "@type": "Organization",
    "name": "BoloAstro",
    "url": "https://boloastro.com",
  },
  "serviceType": "Vedic Astrology Services",
  "areaServed": {
    "@type": "Country",
    "name": "India",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Astrology Services",
    "itemListElement": services.map((service, index) => ({
      "@type": "Offer",
      "position": index + 1,
      "itemOffered": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
      },
      "price": service.price === "Free" ? "0" : service.price.replace("₹", ""),
      "priceCurrency": "INR",
    })),
  },
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        {...SEO_CONFIGS.services}
        structuredData={servicesSchema}
      />
      
      <Navbar />
      
      <main className="pt-32">
        {/* Hero */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
                Astrology Services <br />
                <span className="text-gradient-gold">For Every Need</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                From free kundali to VIP consultations, we have the right service for you.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {services.map((service, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group card-gold-border"
                    whileHover={{ y: -5 }}
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-display text-xl font-semibold text-foreground">{service.title}</h3>
                      <span className="text-primary font-bold">{service.price}</span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-5">{service.description}</p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      className="w-full btn-gold"
                      asChild
                    >
                      <a
                        href={getWhatsAppLink(service.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Get Started
                      </a>
                    </Button>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                Choose Your <span className="text-gradient-gold">Plan</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Simple pricing for continuous astrology guidance
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
              {PRICING_PLANS.map((plan, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className={`relative p-6 rounded-2xl ${
                      plan.popular 
                        ? "bg-gradient-to-br from-primary/10 to-accent/5 border-2 border-primary/40" 
                        : "bg-card border border-border"
                    } card-gold-border`}
                    whileHover={{ y: -5 }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-xs font-semibold text-primary-foreground">
                        Most Popular
                      </div>
                    )}

                    <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-display font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={plan.popular ? "w-full btn-gold" : "w-full"}
                      variant={plan.popular ? "default" : "outline"}
                      asChild
                    >
                      <a
                        href={getWhatsAppLink(plan.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {plan.cta}
                      </a>
                    </Button>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
