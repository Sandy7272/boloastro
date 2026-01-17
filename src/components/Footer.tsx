import { MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const WHATSAPP_LINK = "https://wa.me/917261969798?text=Hi%20BoloAstro!%20I%20want%20to%20know%20my%20horoscope";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <footer className="pt-20 pb-8 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Final CTA */}
        <div className="text-center mb-16 py-12 px-6 rounded-2xl bg-card border border-border">
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Ready to Know Your Destiny?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Start your astrology journey today. Get your free kundali and personalized guidance.
          </p>
          <Button className="btn-gold rounded-lg px-8 py-5" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Generate Free Kundali
            </a>
          </Button>
        </div>
        
        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="BoloAstro" className="h-10 w-auto object-contain" />
            <p className="text-sm text-muted-foreground">
              Your AI-powered Vedic astrology companion. Get accurate predictions on WhatsApp.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { name: "Services", href: "#services" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "Pricing", href: "#pricing" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.href)} 
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Free Kundali</a></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Daily Horoscope</a></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Marriage Prediction</a></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Career Guidance</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span>+91 7261 969798</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:support@boloastro.com" className="hover:text-primary transition-colors">support@boloastro.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Pune, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} BoloAstro. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
              <a href="/refund" className="hover:text-primary transition-colors">Refund</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
