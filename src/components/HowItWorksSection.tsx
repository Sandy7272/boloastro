/**
 * HowItWorksSection - Mobile-First Visual Step Flow
 * 
 * Features:
 * - Clear 4-step process
 * - Responsive layout for all screens
 * - Bilingual text support
 */

import { FileText, Sparkles, MessageCircle, Download, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const HowItWorksSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: FileText,
      step: "1",
      title: t('howItWorks.step1Title'),
      titleHi: "जन्म विवरण भरें",
      description: t('howItWorks.step1Desc'),
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Sparkles,
      step: "2",
      title: t('howItWorks.step2Title'),
      titleHi: "AI कुंडली बनाता है",
      description: t('howItWorks.step2Desc'),
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageCircle,
      step: "3",
      title: t('howItWorks.step3Title') || "Choose Report or Chat",
      titleHi: "रिपोर्ट या चैट चुनें",
      description: "Get detailed PDF report or ask questions live",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Download,
      step: "4",
      title: "Receive on WhatsApp",
      titleHi: "WhatsApp पर पाएं",
      description: "Get instant results delivered to your WhatsApp",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section 
      className="py-16 sm:py-20 lg:py-28 bg-card/50" 
      id="how-it-works" 
      aria-labelledby="how-it-works-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            {t('howItWorks.badge')} • आसान प्रक्रिया
          </span>
          <h2 
            id="how-it-works-heading" 
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-3 sm:mb-4"
          >
            {t('howItWorks.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t('howItWorks.subtitle')}
            <span className="block text-primary text-sm sm:text-base mt-1">सिर्फ 4 आसान स्टेप्स में कुंडली पाएं</span>
          </p>
        </motion.div>

        {/* Steps - Mobile: Vertical timeline, Desktop: Horizontal */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop View - Hidden on mobile */}
          <div className="hidden md:block">
            <div className="grid md:grid-cols-4 gap-4 lg:gap-6 relative">
              {/* Connection Line */}
              <div className="absolute top-16 lg:top-20 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
              
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  {/* Icon Circle */}
                  <div className="relative mx-auto mb-4 lg:mb-6">
                    <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center font-bold text-primary text-xs lg:text-sm shadow">
                      {step.step}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-card border border-border rounded-xl lg:rounded-2xl p-4 lg:p-6 hover:border-primary/30 transition-colors">
                    <h3 className="text-sm lg:text-base font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-primary mb-2">{step.titleHi}</p>
                    <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile View - Vertical Timeline */}
          <div className="md:hidden space-y-0">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex gap-3 sm:gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Step Indicator */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0 relative`}>
                    <step.icon className="w-6 h-6 text-white" />
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-card border-2 border-primary flex items-center justify-center font-bold text-primary text-[10px]">
                      {step.step}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-12 sm:h-16 bg-gradient-to-b from-primary to-primary/20 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4 sm:pb-6">
                  <h3 className="text-base font-semibold text-foreground mb-0.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-primary mb-1.5">{step.titleHi}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div 
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-green-500/10 border border-green-500/20">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            <span className="text-xs sm:text-sm text-green-700 font-medium">
              Takes less than 2 minutes • 2 मिनट से भी कम
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
