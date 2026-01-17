import { MessageCircle, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HowItWorksSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Calendar,
      step: "1",
      title: t('howItWorks.step1Title'),
      description: t('howItWorks.step1Desc'),
    },
    {
      icon: Sparkles,
      step: "2",
      title: t('howItWorks.step2Title'),
      description: t('howItWorks.step2Desc'),
    },
    {
      icon: MessageCircle,
      step: "3",
      title: t('howItWorks.step3Title'),
      description: t('howItWorks.step3Desc'),
    },
  ];

  return (
    <section className="py-24 lg:py-32" id="how-it-works">
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
            {t('howItWorks.badge')}
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-px bg-gradient-to-r from-border to-transparent" />
              )}

              {/* Step number & Icon */}
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 rounded-2xl bg-card border border-border flex items-center justify-center">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg">
                  {step.step}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;