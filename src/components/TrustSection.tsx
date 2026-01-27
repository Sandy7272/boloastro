/**
 * TrustSection - Mobile-First Social Proof
 * 
 * Features:
 * - Compact stats grid for mobile
 * - AI Pandit profile card
 * - Security badges
 */

import { useTranslation } from "react-i18next";
import { Star, MapPin, Users, Clock, ShieldCheck, Award, BookOpen, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const TrustSection = () => {
  const { t } = useTranslation();

  const cities = ["Delhi", "Mumbai", "Pune", "Bangalore", "Jaipur", "Chennai"];

  const stats = [
    { 
      icon: Users, 
      value: "10K+", 
      label: t('trust.happyUsers') || "Happy Users",
      labelHi: "खुश ग्राहक",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    { 
      icon: Star, 
      value: "4.9★", 
      label: t('trust.rating') || "Rating",
      labelHi: "रेटिंग",
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    { 
      icon: BookOpen, 
      value: "5K+", 
      label: "Scriptures",
      labelHi: "ग्रंथ",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    { 
      icon: Clock, 
      value: "24/7", 
      label: t('trust.available') || "Available",
      labelHi: "उपलब्ध",
      color: "text-green-500",
      bg: "bg-green-500/10"
    },
  ];

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-card/50 to-background"
      aria-labelledby="trust-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Stats - 4 columns grid */}
        <motion.div 
          className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-2 sm:mb-3`}>
                <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ${stat.color}`} />
              </div>
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-foreground mb-0.5 sm:mb-1">{stat.value}</div>
              <div className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground line-clamp-1">{stat.label}</div>
              <div className="hidden sm:block text-[10px] lg:text-xs text-primary">{stat.labelHi}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Pandit Profile Card */}
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-primary/5 via-card to-accent/5 border border-primary/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              {/* AI Pandit Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-primary/40 flex items-center justify-center shadow-lg">
                  <span className="text-4xl sm:text-5xl">🙏</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-accent rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
              
              {/* AI Pandit Info */}
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                    BoloAstro AI Pandit
                  </h3>
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <p className="text-primary font-medium text-sm sm:text-base mb-3">
                  बोलोएस्ट्रो AI पंडित
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center sm:justify-start mb-3 sm:mb-4">
                  <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-[10px] sm:text-xs font-medium">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-medium">
                    <BookOpen className="w-3 h-3" />
                    5K+ Scriptures
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-[10px] sm:text-xs font-medium">
                    <Clock className="w-3 h-3" />
                    24/7
                  </span>
                </div>
                
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-2">
                  Our <span className="text-primary font-medium">AI Pandit</span> combines 
                  traditional Vedic knowledge with modern AI for instant, accurate predictions.
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  वैदिक ज्ञान और AI का संगम - सटीक भविष्यवाणी
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* City Trust Indicator */}
        <motion.div 
          className="text-center mt-6 sm:mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span>Trusted in:</span>
            <span className="font-medium text-foreground">
              {cities.slice(0, 3).join(" • ")}
            </span>
            <span className="text-primary">+more</span>
          </div>
        </motion.div>

        {/* Security Badges - Simplified for mobile */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[
            { icon: "🔒", text: "Secure", textHi: "सुरक्षित" },
            { icon: "✓", text: "Authentic", textHi: "प्रामाणिक" },
            { icon: "🤖", text: "AI Powered", textHi: "AI" },
            { icon: "📱", text: "WhatsApp", textHi: "व्हाट्सएप" },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-1.5 text-[10px] sm:text-xs text-muted-foreground">
              <span className="text-sm sm:text-lg">{badge.icon}</span>
              <span className="font-medium text-foreground">{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
