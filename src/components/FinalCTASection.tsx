/**
 * FinalCTASection - Mobile-First Strong CTA
 * 
 * Features:
 * - Large engaging headline
 * - Mobile-optimized buttons
 * - WhatsApp emphasis
 */

import { useTranslation } from "react-i18next";
import { MessageCircle, ArrowRight, Phone, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { WHATSAPP_CONFIG, getWhatsAppLink } from "@/config/constants";

const FinalCTASection = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppLink("Namaste Pandit ji! 🙏 Mujhe apni kundali aur rashifal chahiye."), "_blank");
  };

  return (
    <section 
      className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-card/50 to-background relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 sm:opacity-30">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Stars */}
          <div className="flex justify-center gap-0.5 sm:gap-1 mb-4 sm:mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 sm:w-6 sm:h-6 fill-primary text-primary" />
            ))}
          </div>

          {/* Main Headline */}
          <h2 
            id="final-cta-heading"
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-3 sm:mb-4 leading-tight"
          >
            Ready to Know
            <span className="text-primary block">Your Destiny?</span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-primary font-medium mb-2 sm:mb-3">
            अपना भाग्य जानने के लिए तैयार हैं?
          </p>
          
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto">
            Join 10,000+ Indians who trust BoloAstro for life guidance. 
            Start your astrology journey today!
          </p>

          {/* CTAs - Stacked on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-8 rounded-xl sm:rounded-2xl gap-2 sm:gap-3 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              Chat on WhatsApp
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-6 sm:py-7 lg:py-8 rounded-xl sm:rounded-2xl border-primary/30 hover:bg-primary/10"
              onClick={() => document.getElementById('birth-details-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {t('hero.cta')}
            </Button>
          </div>

          {/* Phone Number */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            <span className="text-base sm:text-lg font-medium text-foreground">+91 {WHATSAPP_CONFIG.number.slice(2)}</span>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" />
              Available 24/7
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <span>🔒</span>
              100% Secure
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <span>⚡</span>
              Instant Response
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
