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
            ? "bg-background/95 backdrop-blur-lg border-b border-border"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label={t('nav.mainNavigation') || "Main navigation"}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* LOGO - Bigger size */}
            <a 
              href="/" 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              aria-label="BoloAstro - Go to homepage"
            >
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className="h-14 md:h-16 lg:h-20 w-auto object-contain"
              />
              <span className="sr-only">BoloAstro - AI Vedic Astrology</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8" role="menubar">
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

            {/* Language Toggle & CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <LanguageToggle />
              <Button 
                className="btn-gold rounded-lg px-5 focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
            </div>

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

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          role="menu"
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="bg-background border-t border-border">
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-card font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  role="menuitem"
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  {link.name}
                </button>
              ))}

              {/* Language Toggle in Mobile */}
              <div className="py-3 px-4">
                <LanguageToggle />
              </div>

              <div className="pt-4 border-t border-border mt-4">
                <Button 
                  className="w-full btn-gold rounded-lg py-5 focus:ring-2 focus:ring-primary focus:ring-offset-2"
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

      {/* Floating WhatsApp - Clean */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Chat on WhatsApp - Opens in new tab"
      >
        <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
      </a>
    </>
  );
};

export default Navbar;