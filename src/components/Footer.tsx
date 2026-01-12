import { MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import logo from "@/assets/logo.png";

const WHATSAPP_LINK = "https://wa.me/919876543210?text=Hi%20BoloAstro!%20I%20want%20to%20know%20my%20horoscope";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <footer className="relative pt-24 pb-8 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* CTA Section */}
        <ScrollReveal>
          <div className="text-center mb-20 p-10 md:p-14 rounded-3xl bg-gradient-to-br from-gold/10 to-saffron/5 border border-gold/15 backdrop-blur-xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Know Your <span className="text-gradient-saffron">Destiny?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-lg">
              Start your astrology journey today. Get your free kundali and discover what the stars have in store for you!
            </p>
            <Button variant="whatsapp" size="xl" className="btn-premium-glow" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp Now
              </a>
            </Button>
          </div>
        </ScrollReveal>
        
        {/* Footer content */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-14" staggerDelay={0.1}>
          {/* Brand */}
          <StaggerItem direction="up">
            <div className="space-y-5">
              <img 
                src={logo} 
                alt="BoloAstro" 
                className="h-12 w-auto object-contain logo-glow"
              />
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your trusted AI-powered Vedic astrology companion. Get accurate predictions, 
                kundali analysis, and life guidance on WhatsApp.
              </p>
              <p className="text-gold font-medium text-sm italic">
                "Chat With Your Destiny"
              </p>
            </div>
          </StaggerItem>
          
          {/* Quick Links */}
          <StaggerItem direction="up">
            <div className="space-y-5">
              <h4 className="font-semibold text-foreground text-lg">Quick Links</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
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
                      className="hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
          
          {/* Services */}
          <StaggerItem direction="up">
            <div className="space-y-5">
              <h4 className="font-semibold text-foreground text-lg">Services</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href={`${WHATSAPP_LINK.replace('horoscope', 'free%20kundali')}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Free Kundali</a></li>
                <li><a href={`${WHATSAPP_LINK.replace('horoscope', 'daily%20rashifal')}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Daily Horoscope</a></li>
                <li><a href={`${WHATSAPP_LINK.replace('horoscope', 'marriage%20prediction')}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Marriage Prediction</a></li>
                <li><a href={`${WHATSAPP_LINK.replace('horoscope', 'career%20guidance')}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Career Guidance</a></li>
                <li><a href={`${WHATSAPP_LINK.replace('horoscope', 'astrology%20questions')}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Ask Questions</a></li>
              </ul>
            </div>
          </StaggerItem>
          
          {/* Contact */}
          <StaggerItem direction="up">
            <div className="space-y-5">
              <h4 className="font-semibold text-foreground text-lg">Contact Us</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gold transition-colors">
                    <MessageCircle className="w-4 h-4 text-gold" />
                    <span>WhatsApp: +91 98765 43210</span>
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold" />
                  <a href="mailto:support@boloastro.com" className="hover:text-gold transition-colors">support@boloastro.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span>Mumbai, India</span>
                </li>
              </ul>
              
              {/* Social icons */}
              <div className="flex gap-3 pt-2">
                {[
                  { name: 'Facebook', letter: 'F', url: 'https://facebook.com/boloastro' },
                  { name: 'Instagram', letter: 'I', url: 'https://instagram.com/boloastro' },
                  { name: 'Twitter', letter: 'X', url: 'https://twitter.com/boloastro' },
                  { name: 'YouTube', letter: 'Y', url: 'https://youtube.com/@boloastro' },
                ].map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted/30 flex items-center justify-center hover:bg-gold/20 hover:border-gold/40 border border-border/40 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <span className="text-sm font-semibold text-muted-foreground">{social.letter}</span>
                  </a>
                ))}
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
        
        {/* Bottom bar */}
        <ScrollReveal delay={0.2}>
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© {currentYear} BoloAstro. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-gold transition-colors">Refund Policy</a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;