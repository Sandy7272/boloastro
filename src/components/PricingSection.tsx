/**
 * PricingSection - Phase 5: Added analytics tracking
 */
import { Check, Star, Sparkles, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { trackPlanSelect, trackWhatsAppClick } from "@/lib/analytics";

const WHATSAPP_BASE = "https://wa.me/917261969798?text=";

const PricingSection = () => {
  const { t } = useTranslation();

  // Track plan click with analytics
  const handlePlanClick = (planName: string, planPrice: string) => {
    trackPlanSelect(planName, planPrice);
    trackWhatsAppClick("pricing", planName.toLowerCase());
  };

  const plans = [
    {
      name: t('pricing.free'),
      price: "₹0",
      description: t('pricing.freeDesc'),
      icon: Star,
      features: [
        t('pricing.dailyRashifal'),
        t('pricing.basicZodiac'),
        t('pricing.generalPredictions'),
        t('pricing.whatsappAccess'),
      ],
      buttonText: t('pricing.startFree'),
      featured: false,
      whatsappMsg: "Hi%20BoloAstro!%20I%20want%20to%20try%20the%20Free%20plan",
    },
    {
      name: t('pricing.premium'),
      price: "₹199",
      period: t('pricing.perMonth'),
      description: t('pricing.premiumDesc'),
      icon: Sparkles,
      features: [
        t('pricing.everythingFree'),
        t('pricing.detailedKundali'),
        t('pricing.birthChart'),
        t('pricing.dashaPredictions'),
        t('pricing.marriageTiming'),
        t('pricing.careerGuidance'),
      ],
      buttonText: t('pricing.getPremium'),
      featured: true,
      whatsappMsg: "Hi%20BoloAstro!%20I%20want%20to%20get%20the%20Premium%20plan",
    },
    {
      name: t('pricing.vip'),
      price: "₹499",
      period: t('pricing.perMonth'),
      description: t('pricing.vipDesc'),
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
      featured: false,
      whatsappMsg: "Hi%20BoloAstro!%20I%20want%20the%20VIP%20plan",
    },
  ];

  return (
    <section className="py-24 lg:py-32" id="pricing">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
            {t('pricing.badge')}
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`relative bg-card border rounded-2xl p-6 lg:p-8 flex flex-col ${
                plan.featured 
                  ? 'border-primary shadow-lg shadow-primary/10 scale-[1.02]' 
                  : 'border-border'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Popular Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                  {t('pricing.popular')}
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6 pt-2">
                <div className={`w-14 h-14 rounded-xl ${plan.featured ? 'bg-primary/20' : 'bg-primary/10'} flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-5xl font-semibold text-foreground">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                className={`w-full py-6 rounded-xl font-semibold ${
                  plan.featured ? 'btn-gold' : 'bg-secondary hover:bg-secondary/80'
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
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;