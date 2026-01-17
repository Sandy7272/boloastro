/**
 * FinalCTASection Component - Phase 3
 * 
 * Purpose: Strong closing CTA before footer
 * Features:
 * - Large Hinglish headline
 * - WhatsApp button (prominent green)
 * - Simple, clean design for conversion
 */

import { useTranslation } from "react-i18next";
import { MessageCircle, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_CONFIG, getWhatsAppLink } from "@/config/constants";

const FinalCTASection = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppLink("Namaste Pandit ji! 🙏 Mujhe apni kundali aur rashifal chahiye."), "_blank");
  };

  return (
    <section 
      className="py-16 bg-gradient-to-b from-background to-card"
      aria-labelledby="final-cta-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-10 h-10 text-green-600" aria-hidden="true" />
          </div>

          {/* Headline */}
          <h2 
            id="final-cta-heading"
            className="text-3xl sm:text-4xl font-semibold text-foreground mb-3"
          >
            Pandit ji se abhi baat karein
          </h2>
          <p className="text-xl text-primary font-medium mb-2">
            पंडित जी से अभी बात करें
          </p>
          <p className="text-muted-foreground mb-8">
            WhatsApp par instant response • तुरंत जवाब मिलेगा
          </p>

          {/* WhatsApp Button */}
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white text-xl px-10 py-7 rounded-2xl gap-3 shadow-lg hover:shadow-xl transition-all"
          >
            <MessageCircle className="w-7 h-7" aria-hidden="true" />
            WhatsApp par Chat Karein
            <ArrowRight className="w-6 h-6" aria-hidden="true" />
          </Button>

          {/* Phone Number Display */}
          <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground">
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm">+91 {WHATSAPP_CONFIG.number.slice(2)}</span>
          </div>

          {/* Trust Line */}
          <p className="text-xs text-muted-foreground mt-4">
            🔒 100% Free Consultation • मुफ्त परामर्श
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
