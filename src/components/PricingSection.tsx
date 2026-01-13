import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Check, Star, Sparkles, Crown } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/917261969798?text=";

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
    <section className="py-28 lg:py-36 relative overflow-hidden" id="pricing">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-cosmic-light/30 to-cosmic-dark" />
      <div className="nebula-bg opacity-40" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-radial from-gold/8 to-transparent blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-radial from-saffron/8 to-transparent blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-20 lg:mb-24 space-y-6">
          <div className="ornament-divider mb-8">✦</div>
          <p className="text-gold font-semibold uppercase tracking-[0.2em] text-sm">Pricing</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            Simple <span className="text-gradient-saffron">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Choose the plan that fits your needs. Start free and upgrade anytime.
          </p>
        </ScrollReveal>
        
        {/* Pricing cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch" staggerDelay={0.15}>
          {plans.map((plan, index) => (
            <StaggerItem key={index} direction={index === 1 ? "up" : index === 0 ? "left" : "right"}>
              <Card 
                variant={plan.featured ? "pricingFeatured" : "pricing"}
                className={`relative ${plan.featured ? 'md:scale-[1.08] z-10 border-gold/50 shadow-2xl shadow-gold/20' : 'border-border/40'} h-full flex flex-col card-premium`}
              >
                {plan.featured && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-gold via-saffron to-gold rounded-full text-cosmic-dark text-sm font-bold shadow-xl shadow-gold/40 animate-shimmer bg-[length:200%_auto]">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pb-6 pt-8 relative z-10">
                  <div className={`w-18 h-18 rounded-2xl ${plan.featured ? 'bg-gradient-to-br from-gold/40 to-saffron/30' : 'bg-gradient-to-br from-gold/25 to-saffron/15'} border border-gold/30 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-gold/10`}>
                    <plan.icon className={`w-9 h-9 ${plan.featured ? 'text-gold-light' : 'text-gold'}`} />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-display">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground text-base">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="text-center flex-grow relative z-10 px-8">
                  <div className="mb-10">
                    <span className="text-5xl md:text-6xl font-display font-bold text-foreground">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground text-xl ml-1">{plan.period}</span>}
                  </div>
                  
                  <ul className="space-y-5 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full ${plan.featured ? 'bg-gold/25 border-gold/40' : 'bg-gold/15 border-gold/25'} border flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3.5 h-3.5 text-gold" />
                        </div>
                        <span className="text-base text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-6 pb-8 px-8 relative z-10">
                  <Button 
                    variant={plan.variant} 
                    size="xl" 
                    className={`w-full font-bold text-lg rounded-xl ${plan.featured ? 'btn-premium-glow' : ''}`} 
                    asChild
                  >
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