/**
 * TrustSection - Enhanced Social Proof & Trust
 * 
 * Features:
 * - Cleaner stats presentation
 * - Better AI Pandit profile
 * - Security badges
 * - City-specific trust
 */

import { useTranslation } from "react-i18next";
import { Star, MapPin, Users, Clock, ShieldCheck, Award, BookOpen, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const TrustSection = () => {
  const { t } = useTranslation();

  const cities = ["Delhi", "Mumbai", "Pune", "Bangalore", "Jaipur", "Chennai", "Kolkata", "Hyderabad"];

  const stats = [
    { 
      icon: Users, 
      value: "10,000+", 
      label: "Happy Users",
      labelHi: "खुश ग्राहक",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    { 
      icon: Star, 
      value: "4.9★", 
      label: "User Rating",
      labelHi: "रेटिंग",
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    { 
      icon: BookOpen, 
      value: "5,000+", 
      label: "Scriptures Used",
      labelHi: "ग्रंथों का ज्ञान",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    { 
      icon: Clock, 
      value: "24/7", 
      label: "Availability",
      labelHi: "उपलब्ध",
      color: "text-green-500",
      bg: "bg-green-500/10"
    },
  ];

  return (
    <section 
      className="py-16 lg:py-20 bg-gradient-to-b from-card/50 to-background"
      aria-labelledby="trust-heading"
    >
      <div className="container mx-auto px-4">
        {/* Main Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
              <div className="text-xs text-primary">{stat.labelHi}</div>
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
          <div className="bg-gradient-to-br from-primary/5 via-card to-accent/5 border border-primary/20 rounded-3xl p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* AI Pandit Avatar */}
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-primary/40 flex items-center justify-center shadow-lg">
                  <span className="text-5xl">🙏</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* AI Pandit Info */}
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <h3 className="text-xl font-semibold text-foreground">
                    BoloAstro AI Pandit
                  </h3>
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <p className="text-primary font-medium mb-3">
                  बोलोएस्ट्रो AI पंडित
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-medium">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    <BookOpen className="w-3 h-3" />
                    5,000+ Scriptures
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-medium">
                    <Clock className="w-3 h-3" />
                    24/7 Available
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                  Our advanced <span className="text-primary font-medium">AI Pandit</span> combines 
                  traditional Vedic knowledge with modern AI to provide instant, accurate predictions.
                  Available round the clock for your questions.
                </p>
                <p className="text-xs text-muted-foreground">
                  हमारा AI पंडित पारंपरिक वैदिक ज्ञान और आधुनिक AI को मिलाकर सटीक भविष्यवाणी देता है।
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* City Trust Indicator */}
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Trusted by users in:</span>
            <span className="font-medium text-foreground">
              {cities.slice(0, 4).join(" • ")}
            </span>
            <span className="text-primary">+ more cities</span>
          </div>
        </motion.div>

        {/* Security Badges */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 border-t border-border/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[
            { icon: "🔒", text: "Encrypted Data", textHi: "सुरक्षित डेटा" },
            { icon: "✓", text: "100% Authentic", textHi: "100% प्रामाणिक" },
            { icon: "🤖", text: "AI Powered", textHi: "AI संचालित" },
            { icon: "📱", text: "WhatsApp Delivery", textHi: "WhatsApp पर" },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="text-lg">{badge.icon}</span>
              <div>
                <span className="font-medium text-foreground">{badge.text}</span>
                <span className="text-primary ml-1">• {badge.textHi}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
