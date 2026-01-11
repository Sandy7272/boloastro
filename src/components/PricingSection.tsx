import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Sparkles, Crown } from "lucide-react";

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
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-light/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Simple <span className="text-gradient-saffron">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. Start free and upgrade anytime.
          </p>
        </div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              variant={plan.featured ? "pricingFeatured" : "pricing"}
              className={`relative ${plan.featured ? 'scale-105 z-10' : ''}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-saffron to-gold rounded-full text-cosmic-dark text-sm font-bold">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-saffron/20 to-gold/20 flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-7 h-7 text-saffron" />
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-display font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-saffron/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-saffron" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button variant={plan.variant} size="lg" className="w-full">
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
