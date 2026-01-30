/**
 * WhyTrustSection - "Why Thousands Trust BoloAstro"
 * 
 * Features:
 * - Trust-building cards with icons
 * - Placeholder testimonials
 * - Mobile responsive layout
 */

import { useTranslation } from "react-i18next";
import { Shield, Brain, MessageSquare, Lock, Quote } from "lucide-react";
import { motion } from "framer-motion";

const WhyTrustSection = () => {
  const { t } = useTranslation();

  const trustCards = [
    {
      icon: Shield,
      title: t('whyTrust.vedic'),
      titleHi: "प्रामाणिक वैदिक ज्योतिष",
      description: t('whyTrust.vedicDesc'),
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      icon: Brain,
      title: t('whyTrust.ai'),
      titleHi: "AI प्रशिक्षित",
      description: t('whyTrust.aiDesc'),
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      icon: MessageSquare,
      title: t('whyTrust.simple'),
      titleHi: "सरल भाषा",
      description: t('whyTrust.simpleDesc'),
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: Lock,
      title: t('whyTrust.secure'),
      titleHi: "निजी और सुरक्षित",
      description: t('whyTrust.secureDesc'),
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
  ];

  const testimonials = [
    {
      text: t('whyTrust.t1'),
      textHi: "बहुत आसान और सटीक भविष्यवाणियां।",
      author: "Priya S.",
      location: "Mumbai",
    },
    {
      text: t('whyTrust.t2'),
      textHi: "मुझे अपना करियर पथ समझने में मदद मिली।",
      author: "Rahul K.",
      location: "Delhi",
    },
    {
      text: t('whyTrust.t3'),
      textHi: "WhatsApp पर सबसे अच्छा ज्योतिष अनुभव।",
      author: "Sneha P.",
      location: "Pune",
    },
  ];

  return (
    <section 
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-card/30"
      id="why-trust"
      aria-labelledby="why-trust-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            ✨ {t('whyTrust.badge')}
          </span>
          <h2 
            id="why-trust-heading" 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4"
          >
            {t('whyTrust.title')}
          </h2>
          <p className="text-primary text-lg sm:text-xl font-medium mb-2">
            {t('whyTrust.titleHi')}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t('whyTrust.subtitle')}
          </p>
        </motion.div>

        {/* Trust Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-16">
          {trustCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-2xl p-5 sm:p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${card.bg} flex items-center justify-center mx-auto mb-4`}>
                <card.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${card.color}`} />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-primary mb-2">{card.titleHi}</p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <motion.p 
            className="text-center text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('whyTrust.whatPeopleSay')}
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-card/50 border border-border/50 rounded-xl p-4 sm:p-5 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Quote className="w-6 h-6 text-primary/30 absolute top-4 right-4" />
                <p className="text-sm text-foreground mb-2 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-xs text-muted-foreground italic mb-3">
                  "{testimonial.textHi}"
                </p>
                <div className="flex items-center gap-2 pt-3 border-t border-border/50">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-[10px] text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustSection;
