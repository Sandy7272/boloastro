/**
 * HowItWorksSection - Phase 4: Hinglish Steps
 * 
 * Features:
 * - Simple 3-step process in Hinglish
 * - Clean icons and cards
 * - No heavy animations
 */

import { MessageCircle, Calendar, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const HowItWorksSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Calendar,
      step: "1",
      title: t('howItWorks.step1Title'),
      description: t('howItWorks.step1Desc'),
      emoji: "📝",
    },
    {
      icon: Sparkles,
      step: "2",
      title: t('howItWorks.step2Title'),
      description: t('howItWorks.step2Desc'),
      emoji: "🔮",
    },
    {
      icon: MessageCircle,
      step: "3",
      title: t('howItWorks.step3Title'),
      description: t('howItWorks.step3Desc'),
      emoji: "📱",
    },
  ];

  return (
    <section 
      className="py-16 lg:py-20 bg-background" 
      id="how-it-works" 
      aria-labelledby="how-it-works-heading"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            {t('howItWorks.badge')}
          </p>
          <h2 
            id="how-it-works-heading" 
            className="text-3xl lg:text-4xl font-semibold text-foreground mb-3"
          >
            {t('howItWorks.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Steps - Simple Cards */}
        <ol 
          className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto list-none" 
          aria-label="Steps to get started"
        >
          {steps.map((step, index) => (
            <li 
              key={index}
              className="relative text-center bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              {/* Step Number Badge */}
              <div 
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm"
                aria-hidden="true"
              >
                {step.step}
              </div>

              {/* Emoji Icon */}
              <div className="text-4xl mb-4 mt-2" aria-hidden="true">
                {step.emoji}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                <span className="sr-only">Step {step.step}: </span>
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorksSection;