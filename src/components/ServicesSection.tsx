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
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background via-card/20 to-background" id="services" aria-labelledby="services-heading">
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

        {/* Services Grid - 1 column mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={`${WHATSAPP_LINK}${service.query}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              {/* Fixed height card with consistent structure */}
              <div className="h-full min-h-[280px] flex flex-col bg-card border border-border rounded-2xl p-5 sm:p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group-hover:-translate-y-1">
                {/* Icon - Fixed size */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 flex-shrink-0`}>
                  <service.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${service.iconColor}`} />
                </div>

                {/* Title - Consistent sizing */}
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-primary/70 mb-3">{service.titleHi}</p>

                {/* Description - Fixed height */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2 h-10">
                  {service.description}
                </p>

                {/* Benefits - Flex grow to push CTA down */}
                <ul className="space-y-1.5 flex-1">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="line-clamp-1">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button - Always at bottom */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
                  <span className="text-sm font-medium text-primary">Ask on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
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
