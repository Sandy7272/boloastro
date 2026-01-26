/**
 * PricingSection - Enhanced with Sample Preview
 * 
 * Features:
 * - Clearer pricing tiers
 * - Value highlights
 * - Sample PDF button
 */
import { useState } from "react";
import { Check, Star, Sparkles, Crown, FileText, ArrowRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { trackPlanSelect, trackWhatsAppClick } from "@/lib/analytics";
import SamplePDFModal from "./SamplePDFModal";

const WHATSAPP_BASE = "https://wa.me/917261969798?text=";

const PricingSection = () => {
  const { t } = useTranslation();
  const [showSamplePDF, setShowSamplePDF] = useState(false);

  const handlePlanClick = (planName: string, planPrice: string) => {
    trackPlanSelect(planName, planPrice);
    trackWhatsAppClick("pricing", planName.toLowerCase());
  };

  const plans = [
    {
      name: "Basic",
      nameHi: "बेसिक",
      price: "Free",
      priceHi: "मुफ्त",
      description: "Quick horoscope & basic predictions",
      icon: Star,
      features: [
        "Daily Rashifal",
        "Basic Zodiac Info",
        "General Predictions",
        "WhatsApp Access",
      ],
      featuresHi: ["दैनिक राशिफल", "बेसिक जानकारी", "सामान्य भविष्यवाणी", "WhatsApp एक्सेस"],
      buttonText: "Start Free",
      buttonHi: "मुफ्त शुरू करें",
      featured: false,
      whatsappMsg: "Hi%20BoloAstro!%20I%20want%20to%20try%20the%20Free%20plan",
      color: "from-slate-500 to-slate-600",
      showSampleButton: false,
    },
    {
      name: "Premium",
      nameHi: "प्रीमियम",
      price: "₹199",
      priceHi: "₹199",
      period: "one-time",
      description: "Complete Kundali with detailed analysis",
      icon: Sparkles,
      features: [
        "Everything in Basic",
        "Full Kundali PDF (20 pages)",
        "Complete Birth Chart",
        "Dasha Predictions",
        "Marriage & Career Timing",
        "Personalized Remedies",
      ],
      featuresHi: ["बेसिक में सब कुछ", "पूर्ण कुंडली PDF", "जन्म कुंडली", "दशा भविष्यवाणी", "शादी और करियर", "व्यक्तिगत उपाय"],
      buttonText: "Get Full Kundali",
      buttonHi: "पूर्ण कुंडली पाएं",
      featured: true,
      whatsappMsg: "Hi%20BoloAstro!%20I%20want%20to%20get%20the%20Premium%20Kundali%20Report",
      color: "from-primary to-accent",
      showSampleButton: true,
      popular: true,
    },
    {
      name: "VIP",
      nameHi: "VIP",
      price: "₹499",
      priceHi: "₹499",
      period: "/month",
      description: "Priority support & unlimited guidance",
      icon: Crown,
      features: [
        "Everything in Premium",
        "Personal AI Guidance",
        "Unlimited Questions",
        "Priority Support",
        "Monthly Predictions",
        "Advanced Remedies",
      ],
      featuresHi: ["प्रीमियम में सब कुछ", "व्यक्तिगत AI मार्गदर्शन", "असीमित सवाल", "प्राथमिक सहायता", "मासिक भविष्यवाणी", "उन्नत उपाय"],
      buttonText: "Go VIP",
      buttonHi: "VIP बनें",
      featured: false,
      whatsappMsg: "Hi%20BoloAstro!%20I%20want%20the%20VIP%20plan",
      color: "from-violet-500 to-purple-600",
      showSampleButton: false,
    },
  ];

  return (
    <>
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-card/30" id="pricing">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <motion.div 
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Gift className="w-4 h-4" />
              Simple Pricing • सरल मूल्य
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-muted-foreground">
              Start free and upgrade anytime for detailed analysis
              <span className="block text-primary text-base mt-1">मुफ्त शुरू करें, कभी भी अपग्रेड करें</span>
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
            {plans.map((plan, index) => (
              <motion.div 
                key={index}
                className={`relative bg-card border rounded-3xl p-6 lg:p-8 flex flex-col ${
                  plan.featured 
                    ? 'border-primary shadow-2xl shadow-primary/10 scale-[1.02] z-10' 
                    : 'border-border'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Most Popular
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6 pt-2">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-primary">{plan.nameHi}</p>
                  <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground ml-1">{plan.period}</span>}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full ${plan.featured ? 'bg-primary/20' : 'bg-muted'} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className={`w-3 h-3 ${plan.featured ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <div>
                        <span className="text-sm text-foreground">{feature}</span>
                        <span className="text-xs text-primary block">{plan.featuresHi[idx]}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Sample PDF Button */}
                {plan.showSampleButton && (
                  <Button 
                    variant="outline"
                    className="w-full mb-3 gap-2 border-primary/30 text-primary hover:bg-primary/10 rounded-xl py-5"
                    onClick={() => setShowSamplePDF(true)}
                  >
                    <FileText className="w-4 h-4" />
                    View Sample PDF
                  </Button>
                )}

                {/* CTA Button */}
                <Button 
                  className={`w-full py-6 rounded-xl font-semibold text-base gap-2 ${
                    plan.featured 
                      ? 'btn-gold shadow-lg' 
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                  asChild
                >
                  <a 
                    href={`${WHATSAPP_BASE}${plan.whatsappMsg}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => handlePlanClick(plan.name, plan.price)}
                  >
                    {plan.buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Trust Note */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground">
              🔒 Secure payment via WhatsApp • 7-day satisfaction guarantee
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sample PDF Modal */}
      <SamplePDFModal isOpen={showSamplePDF} onClose={() => setShowSamplePDF(false)} />
    </>
  );
};

export default PricingSection;
