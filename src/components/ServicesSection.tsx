/**
 * ServicesSection - Mobile-First Responsive Design
 * 
 * Features:
 * - Benefit-focused cards with simple explanations
 * - Mobile-optimized grid layout
 * - Clear CTAs with WhatsApp integration
 */

import { 
  Star,
  HeartHandshake,
  Briefcase,
  Heart,
  TrendingUp,
  Gem,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/917261969798?text=Hi%20BoloAstro!%20I%20want%20to%20know%20about%20";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Star,
      title: t('services.kundali'),
      titleHi: "AI कुंडली रिपोर्ट",
      description: t('services.kundaliDesc'),
      benefits: ["Detailed PDF report", "Dasha predictions", "Lucky factors"],
      benefitsHi: ["विस्तृत PDF", "दशा भविष्य", "शुभ तत्व"],
      query: "kundali%20report",
      color: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-500",
    },
    {
      icon: HeartHandshake,
      title: t('services.loveMarriage'),
      titleHi: "कुंडली मिलान",
      description: t('services.loveMarriageDesc'),
      benefits: ["36 Gunas analysis", "Compatibility score", "Dosha check"],
      benefitsHi: ["36 गुण", "अनुकूलता", "दोष जांच"],
      query: "kundali%20matching",
      color: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-500",
    },
    {
      icon: Briefcase,
      title: t('services.career'),
      titleHi: "करियर मार्गदर्शन",
      description: t('services.careerDesc'),
      benefits: ["Best career timing", "Job change advice", "Business yoga"],
      benefitsHi: ["सही समय", "नौकरी सलाह", "व्यापार योग"],
      query: "career%20guidance",
      color: "from-blue-500/20 to-indigo-500/20",
      iconColor: "text-blue-500",
    },
    {
      icon: Heart,
      title: "Love & Marriage",
      titleHi: "प्रेम और विवाह",
      description: "Partner compatibility and marriage timing predictions",
      benefits: ["Marriage timing", "Love match", "Partner traits"],
      benefitsHi: ["शादी समय", "प्रेम मिलान", "साथी गुण"],
      query: "love%20marriage%20prediction",
      color: "from-red-500/20 to-pink-500/20",
      iconColor: "text-red-500",
    },
    {
      icon: TrendingUp,
      title: t('services.money'),
      titleHi: "धन और वित्त",
      description: t('services.moneyDesc'),
      benefits: ["Money periods", "Investment tips", "Property yoga"],
      benefitsHi: ["धन काल", "निवेश सलाह", "संपत्ति योग"],
      query: "wealth%20finance%20prediction",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500",
    },
    {
      icon: Gem,
      title: t('services.remedies'),
      titleHi: "उपाय और रत्न",
      description: t('services.remediesDesc'),
      benefits: ["Custom remedies", "Gemstone advice", "Mantra guidance"],
      benefitsHi: ["व्यक्तिगत उपाय", "रत्न सलाह", "मंत्र"],
      query: "remedies%20gemstones",
      color: "from-purple-500/20 to-violet-500/20",
      iconColor: "text-purple-500",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-background to-card/30" id="services" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4" />
            {t('services.badge')} • हमारी सेवाएं
          </span>
          <h2 id="services-heading" className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-3 sm:mb-4">
            {t('services.title')}
            <span className="text-primary block sm:inline"> जीवन के हर पहलू के लिए</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid - 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={`${WHATSAPP_LINK}${service.query}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className="h-full bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group-hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-3 sm:mb-4`}>
                  <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ${service.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground mb-0.5 group-hover:text-primary transition-colors line-clamp-1">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-primary/80 mb-2">{service.titleHi}</p>

                {/* Description - Hidden on mobile for space */}
                <p className="hidden sm:block text-muted-foreground text-xs sm:text-sm mb-3 leading-relaxed line-clamp-2">
                  {service.description}
                </p>

                {/* Benefits - Simplified on mobile */}
                <ul className="space-y-1 mb-3 sm:mb-4">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="line-clamp-1">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center text-xs sm:text-sm font-medium text-primary group-hover:gap-2 gap-1 transition-all">
                  <span className="hidden sm:inline">Ask on WhatsApp</span>
                  <span className="sm:hidden">Ask Now</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
            Have a specific question? Our AI astrologer is available 24/7
          </p>
          <Button 
            size="lg" 
            className="btn-gold rounded-xl px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg gap-2"
            asChild
          >
            <a href={`${WHATSAPP_LINK}my%20question`} target="_blank" rel="noopener noreferrer">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              Chat with AI Pandit
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
