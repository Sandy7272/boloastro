import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Check, Star, Sparkles, Crown } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/919876543210?text=";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Basic horoscope to get started",
    icon: Star,
    features: [
      "Daily Rashifal",
      "Basic Zodiac Info",
      "General Predictions",
      "WhatsApp Access",
    ],
    buttonText: "Start Free",
    variant: "heroOutline" as const,
    featured: false,
    whatsappMsg: "Hi%20BoloAstro!%20I%20want%20to%20try%20the%20Free%20plan",
  },
  {
    name: "Premium",
    price: "₹199",
    period: "/month",
    description: "Complete kundali analysis",
    icon: Sparkles,
    features: [
      "Everything in Free",
      "Detailed Kundali PDF",
      "Birth Chart Analysis",
      "Dasha Predictions",
      "Marriage Timing",
      "Career Guidance",
    ],
    buttonText: "Get Premium",
    variant: "hero" as const,
    featured: true,
    whatsappMsg: "Hi%20BoloAstro!%20I%20want%20to%20get%20the%20Premium%20plan%20for%20₹199",
  },
  {
    name: "VIP",
    price: "₹499",
    period: "/month",
    description: "Personal guidance & priority support",
    icon: Crown,
    features: [
      "Everything in Premium",
      "Personal AI Guidance",
      "Unlimited Questions",
      "Priority Support",
      "Monthly Predictions",
      "Remedies & Solutions",
      "Human Astrologer Access",
    ],
    buttonText: "Go VIP",
    variant: "gold" as const,
    featured: false,
    whatsappMsg: "Hi%20BoloAstro!%20I%20want%20the%20VIP%20plan%20for%20₹499",
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-light/20 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-radial from-gold/5 to-transparent blur-3xl" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-radial from-saffron/5 to-transparent blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16 lg:mb-20 space-y-5">
          <p className="text-gold font-medium uppercase tracking-widest text-sm">Pricing</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            Simple <span className="text-gradient-saffron">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. Start free and upgrade anytime.
          </p>
        </ScrollReveal>
        
        {/* Pricing cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch" staggerDelay={0.15}>
          {plans.map((plan, index) => (
            <StaggerItem key={index} direction={index === 1 ? "up" : index === 0 ? "left" : "right"}>
              <Card 
                variant={plan.featured ? "pricingFeatured" : "pricing"}
                className={`relative ${plan.featured ? 'md:scale-105 z-10 border-gold/40' : ''} h-full flex flex-col`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-gold to-saffron rounded-full text-cosmic-dark text-sm font-bold shadow-lg shadow-gold/30">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-saffron/10 border border-gold/20 flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-7 h-7 text-gold" />
                  </div>
                  <CardTitle className="text-2xl font-display">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="text-center flex-grow">
                  <div className="mb-8">
                    <span className="text-5xl font-display font-bold text-foreground">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground text-lg">{plan.period}</span>}
                  </div>
                  
                  <ul className="space-y-4 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-gold" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-4">
                  <Button variant={plan.variant} size="lg" className="w-full font-semibold" asChild>
                    <a href={`${WHATSAPP_BASE}${plan.whatsappMsg}`} target="_blank" rel="noopener noreferrer">
                      {plan.buttonText}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default PricingSection;