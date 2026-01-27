/**
 * Footer Component - Mobile-First Responsive Design
 * 
 * Features:
 * - Responsive grid layout
 * - Translated content
 * - Mobile-optimized spacing
 */

import { MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

const WHATSAPP_LINK = "https://wa.me/917261969798?text=Hi%20BoloAstro!%20I%20want%20to%20know%20my%20horoscope";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <footer className="pt-16 sm:pt-20 pb-24 sm:pb-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final CTA */}
        <div className="text-center mb-12 sm:mb-16 py-8 sm:py-12 px-4 sm:px-6 rounded-2xl bg-card border border-border">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-3 sm:mb-4">
            {t("footer.ctaTitle")}
          </h2>
          <p className="text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto text-sm sm:text-base">
            {t("footer.ctaSubtitle")}
          </p>
          <Button className="btn-gold rounded-xl px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {t("footer.ctaButton")}
            </a>
          </Button>
        </div>
        
        {/* Footer content - Simplified grid for mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand - Full width on mobile */}
          <div className="col-span-2 sm:col-span-1 space-y-3 sm:space-y-4">
            <img src={logo} alt="BoloAstro" className="h-8 sm:h-10 w-auto object-contain" />
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-foreground text-sm sm:text-base">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              {[
                { name: t("nav.services"), href: "#services" },
                { name: t("nav.howItWorks"), href: "#how-it-works" },
                { name: t("nav.pricing"), href: "#pricing" },
                { name: t("nav.faq"), href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <button 
                    onClick={() => scrollToSection(link.href)} 
                    className="hover:text-primary transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-foreground text-sm sm:text-base">{t("footer.services")}</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t("footer.freeKundali")}</a></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t("footer.dailyHoroscope")}</a></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t("footer.marriagePrediction")}</a></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t("footer.careerGuidance")}</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-foreground text-sm sm:text-base">{t("footer.contact")}</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  <span>+91 7261 969798</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <a href="mailto:support@boloastro.com" className="hover:text-primary transition-colors truncate">support@boloastro.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <span>Pune, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <p>© {currentYear} BoloAstro. {t("footer.copyright")}</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="/privacy" className="hover:text-primary transition-colors">{t("footer.privacy")}</a>
              <a href="/terms" className="hover:text-primary transition-colors">{t("footer.terms")}</a>
              <a href="/refund" className="hover:text-primary transition-colors">{t("footer.refund")}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
