/**
 * HowItWorksSection - Visual Step-by-Step Flow
 * 
 * Features:
 * - Clear 4-step process with visual indicators
 * - Progress-like connected steps
 * - Simple explanations in Hinglish
 */

import { FileText, Sparkles, MessageCircle, Download, ArrowRight, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const HowItWorksSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: FileText,
      step: "1",
      title: "Enter Birth Details",
      titleHi: "जन्म विवरण भरें",
      description: "Fill in your name, date, time & place of birth",
      descHi: "नाम, जन्म तिथि, समय और स्थान दर्ज करें",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Sparkles,
      step: "2",
      title: "AI Generates Kundali",
      titleHi: "AI कुंडली बनाता है",
      description: "Our AI analyzes your chart using Vedic methods",
      descHi: "वैदिक विधि से आपकी कुंडली का विश्लेषण",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageCircle,
      step: "3",
      title: "Choose Report or Chat",
      titleHi: "रिपोर्ट या चैट चुनें",
      description: "Get detailed PDF report or ask questions live",
      descHi: "विस्तृत PDF रिपोर्ट या लाइव सवाल पूछें",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Download,
      step: "4",
      title: "Receive on WhatsApp",
      titleHi: "WhatsApp पर पाएं",
      description: "Get instant results delivered to your WhatsApp",
      descHi: "WhatsApp पर तुरंत रिजल्ट मिलता है",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section 
      className="py-20 lg:py-28 bg-card/50" 
      id="how-it-works" 
      aria-labelledby="how-it-works-heading"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Simple Process • आसान प्रक्रिया
          </span>
          <h2 
            id="how-it-works-heading" 
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4"
          >
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get your personalized kundali in just 4 simple steps
            <span className="block text-primary text-base mt-1">सिर्फ 4 आसान स्टेप्स में कुंडली पाएं</span>
          </p>
        </motion.div>

        {/* Steps - Desktop */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connection Line */}
            <div className="absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 hidden md:block" />
            
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
                <div className="relative mx-auto mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center font-bold text-primary text-sm shadow">
                    {step.step}
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-primary mb-3">{step.titleHi}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Steps - Mobile */}
        <div className="md:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="flex gap-4 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Step Indicator */}
              <div className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-primary/20 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                    Step {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-0.5">
                  {step.title}
                </h3>
                <p className="text-sm text-primary mb-2">{step.titleHi}</p>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-700 font-medium">
              Takes less than 2 minutes • 2 मिनट से भी कम समय लगता है
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
