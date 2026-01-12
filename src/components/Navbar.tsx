import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const WHATSAPP_LINK = "https://wa.me/919876543210?text=Hi%20BoloAstro!%20I%20want%20to%20know%20my%20horoscope";

const Navbar = () => {
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
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-cosmic-dark/95 backdrop-blur-2xl border-b border-gold/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-18 md:h-22 py-3">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <img 
                src={logo} 
                alt="BoloAstro - Chat With Your Destiny" 
                className="h-14 md:h-16 lg:h-20 w-auto object-contain logo-glow transition-all duration-300 group-hover:scale-105"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-gold transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-saffron transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Button 
                variant="heroOutline" 
                size="default"
                onClick={() => scrollToSection("#services")}
                className="font-semibold"
              >
                Free Kundali
              </Button>
              <Button 
                variant="whatsapp" 
                size="default"
                asChild
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-cosmic-dark/98 backdrop-blur-2xl border-t border-gold/10">
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-foreground hover:text-gold transition-colors py-3 px-4 rounded-lg hover:bg-gold/5 font-medium"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border/30 mt-4">
                <Button 
                  variant="heroOutline" 
                  className="w-full"
                  onClick={() => scrollToSection("#services")}
                >
                  Free Kundali
                </Button>
                <Button variant="whatsapp" className="w-full" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sticky WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/40 hover:scale-110 hover:shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 animate-pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </>
  );
};

export default Navbar;