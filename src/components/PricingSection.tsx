/**
 * PricingSection - Mobile-First Responsive Pricing
 * 
 * Features:
 * - Clearer pricing tiers
 * - Mobile-optimized cards
 * - Sample PDF preview button
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
      name: t('pricing.free'),
      nameHi: "बेसिक",
      price: "Free",
      priceHi: "मुफ्त",
      description: "Quick horoscope & basic predictions",
      icon: Star,
      features: [
        t('pricing.dailyRashifal'),
        t('pricing.basicZodiac'),
        t('pricing.generalPredictions'),
        t('pricing.whatsappAccess'),
      ],
      buttonText: t('pricing.startFree'),
      buttonHi: "मुफ्त शुरू करें",
      featured: false,
      whatsappMsg: "Hi%20BoloAstro!%20I%20want%20to%20try%20the%20Free%20plan",
      color: "from-slate-500 to-slate-600",
      showSampleButton: false,
    },
    {
      name: t('pricing.premium'),
      nameHi: "प्रीमियम",
      price: "₹199",
      priceHi: "₹199",
      period: "one-time",
      description: "Complete Kundali with detailed analysis",
      icon: Sparkles,
      features: [
        t('pricing.everythingFree'),
        t('pricing.detailedKundali'),
        t('pricing.birthChart'),
        t('pricing.dashaPredictions'),
        t('pricing.marriageTiming'),
        t('pricing.remedies'),
      ],
      buttonText: t('pricing.getPremium'),
      buttonHi: "पूर्ण कुंडली पाएं",
      featured: true,
      whatsappMsg: "Hi%20BoloAstro!%20I%20want%20to%20get%20the%20Premium%20Kundali%20Report",
      color: "from-primary to-accent",
      showSampleButton: true,
      popular: true,
    },
    {
      name: t('pricing.vip'),
      nameHi: "VIP",
      price: "₹499",
      priceHi: "₹499",
      period: "/month",
      description: "Priority support & unlimited guidance",
      icon: Crown,
      features: [
        t('pricing.everythingPremium'),
        t('pricing.personalGuidance'),
        t('pricing.unlimitedQuestions'),
        t('pricing.prioritySupport'),
        t('pricing.monthlyPredictions'),
        t('pricing.remediesSolutions'),
      ],
      buttonText: t('pricing.goVip'),
      buttonHi: "VIP बनें",
      featured: false,
      whatsappMsg: "Hi%20BoloAstro!%20I%20want%20the%20VIP%20plan",
      color: "from-violet-500 to-purple-600",
      showSampleButton: false,
    },
  ];

  return (
    <>
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-background to-card/30" id="pricing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div 
            className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Gift className="w-4 h-4" />
              {t('pricing.badge')} • सरल मूल्य
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-3 sm:mb-4">
              {t('pricing.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              {t('pricing.subtitle')}
              <span className="block text-primary text-sm sm:text-base mt-1">मुफ्त शुरू करें, कभी भी अपग्रेड करें</span>
            </p>
          </motion.div>

          {/* Pricing Cards - Stack on mobile */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div 
                key={index}
                className={`relative bg-card border rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 flex flex-col ${
                  plan.featured 
                    ? 'border-primary shadow-xl shadow-primary/10 sm:scale-[1.02] z-10 order-first sm:order-none' 
                    : 'border-border'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full text-xs sm:text-sm font-semibold shadow-lg whitespace-nowrap">
                    ⭐ {t('pricing.popular')}
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-4 sm:mb-6 pt-2">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}>
                    <plan.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-primary">{plan.nameHi}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-1">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-4 sm:mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>}
                </div>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                  {plan.features.slice(0, plan.featured ? 6 : 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${plan.featured ? 'bg-primary/20' : 'bg-muted'} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${plan.featured ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <span className="text-xs sm:text-sm text-foreground leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Sample PDF Button */}
                {plan.showSampleButton && (
                  <Button 
                    variant="outline"
                    className="w-full mb-3 gap-2 border-primary/30 text-primary hover:bg-primary/10 rounded-xl py-4 sm:py-5 text-sm"
                    onClick={() => setShowSamplePDF(true)}
                  >
                    <FileText className="w-4 h-4" />
                    View Sample PDF
                  </Button>
                )}

                {/* CTA Button */}
                <Button 
                  className={`w-full py-5 sm:py-6 rounded-xl font-semibold text-sm sm:text-base gap-2 ${
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
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs sm:text-sm text-muted-foreground">
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
