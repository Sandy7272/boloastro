import { MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <ScrollReveal>
          <div className="text-center mb-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-saffron/10 to-gold/5 border border-saffron/20">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to Know Your <span className="text-gradient-saffron">Destiny?</span>
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Start your astrology journey today. Get your free kundali and discover what the stars have in store for you!
            </p>
            <Button variant="whatsapp" size="xl">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp Now
            </Button>
          </div>
        </ScrollReveal>
        
        {/* Footer content */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12" staggerDelay={0.1}>
          {/* Brand */}
          <StaggerItem direction="up">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-gradient-saffron">BoloAstro</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your trusted AI-powered Vedic astrology companion. Get accurate predictions, 
                kundali analysis, and life guidance on WhatsApp.
              </p>
              <p className="text-saffron font-medium text-sm">
                "Astrology Made Simple"
              </p>
            </div>
          </StaggerItem>
          
          {/* Quick Links */}
          <StaggerItem direction="up">
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-saffron transition-colors">Services</a></li>
                <li><a href="#how-it-works" className="hover:text-saffron transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-saffron transition-colors">Pricing</a></li>
                <li><a href="#testimonials" className="hover:text-saffron transition-colors">Testimonials</a></li>
                <li><a href="#faq" className="hover:text-saffron transition-colors">FAQ</a></li>
              </ul>
            </div>
          </StaggerItem>
          
          {/* Services */}
          <StaggerItem direction="up">
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-saffron transition-colors">Free Kundali</a></li>
                <li><a href="#" className="hover:text-saffron transition-colors">Daily Horoscope</a></li>
                <li><a href="#" className="hover:text-saffron transition-colors">Marriage Prediction</a></li>
                <li><a href="#" className="hover:text-saffron transition-colors">Career Guidance</a></li>
                <li><a href="#" className="hover:text-saffron transition-colors">Astrology Blog</a></li>
              </ul>
            </div>
          </StaggerItem>
          
          {/* Contact */}
          <StaggerItem direction="up">
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Contact Us</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-saffron" />
                  <span>WhatsApp: +91 XXXXX XXXXX</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-saffron" />
                  <span>support@boloastro.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-saffron" />
                  <span>Mumbai, India</span>
                </li>
              </ul>
              
              {/* Social icons placeholder */}
              <div className="flex gap-3 pt-2">
                {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                  <div 
                    key={social}
                    className="w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center hover:bg-saffron/20 hover:border-saffron/40 border border-border/40 transition-all cursor-pointer"
                  >
                    <span className="text-xs text-muted-foreground capitalize">{social[0].toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
        
        {/* Bottom bar */}
        <ScrollReveal delay={0.2}>
          <div className="pt-8 border-t border-border/40">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© {currentYear} BoloAstro. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-saffron transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-saffron transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-saffron transition-colors">Refund Policy</a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
