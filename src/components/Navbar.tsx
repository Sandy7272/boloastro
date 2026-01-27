/**
 * Navbar Component - Mobile-First Responsive Design
 * 
 * Features:
 * - Fixed header with blur effect
 * - Mobile hamburger menu
 * - Language toggle in both views
 * - Accessible navigation
 */

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageToggle from "@/components/LanguageToggle";
import logo from "@/assets/logo.png";

const WHATSAPP_LINK = "https://wa.me/917261969798?text=Hi%20BoloAstro!%20I%20want%20to%20know%20my%20horoscope";

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.howItWorks'), href: "#how-it-works" },
    { name: t('nav.pricing'), href: "#pricing" },
    { name: t('nav.testimonials'), href: "#testimonials" },
    { name: t('nav.faq'), href: "#faq" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label={t('nav.mainNavigation') || "Main navigation"}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* LOGO */}
            <a 
              href="/" 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg flex-shrink-0"
              aria-label="BoloAstro - Go to homepage"
            >
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
              />
              <span className="sr-only">BoloAstro - AI Vedic Astrology</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8" role="menubar">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
                  role="menuitem"
                  aria-label={`Navigate to ${link.name} section`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Right Side - Language Toggle & CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language Toggle - Always visible */}
              <LanguageToggle className="flex-shrink-0" />
              
              {/* Desktop CTA */}
              <Button 
                className="hidden md:flex btn-gold rounded-lg px-4 lg:px-5 h-10 lg:h-11 text-sm focus:ring-2 focus:ring-primary focus:ring-offset-2"
                asChild
              >
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`${t('nav.chatNow')} - Opens WhatsApp in new tab`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                  {t('nav.chatNow')}
                </a>
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Full screen overlay */}
        <div
          id="mobile-menu"
          className={`lg:hidden fixed inset-0 top-16 sm:top-20 z-40 transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          role="menu"
          aria-hidden={!isMobileMenuOpen}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/95 backdrop-blur-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="relative h-full overflow-y-auto pb-32">
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors py-4 px-4 rounded-xl hover:bg-card font-medium text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  role="menuitem"
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  {link.name}
                </button>
              ))}

              <div className="pt-6 border-t border-border mt-4">
                <Button 
                  className="w-full btn-gold rounded-xl py-6 text-lg focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  asChild
                >
                  <a 
                    href={WHATSAPP_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`${t('nav.chatOnWhatsApp')} - Opens WhatsApp in new tab`}
                    tabIndex={isMobileMenuOpen ? 0 : -1}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                    {t('nav.chatOnWhatsApp')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
