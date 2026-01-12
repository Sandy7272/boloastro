import { MessageCircle, Star, Moon, Sun, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/917261969798?text=Hi%20BoloAstro!%20I%20want%20to%20know%20my%20horoscope";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background decorations */}
      <div className="absolute inset-0 stars-bg opacity-40" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-dark/20 to-cosmic-dark/70" />
      
      {/* Floating elements */}
      <div className="absolute top-28 left-[8%] animate-float-slow">
        <div className="w-2 h-2 rounded-full bg-gold/60" />
      </div>
      <div className="absolute top-44 right-[12%] animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-3 h-3 rounded-full bg-saffron/50" />
      </div>
      <div className="absolute bottom-[35%] left-[5%] animate-twinkle" style={{ animationDelay: '0.5s' }}>
        <Star className="w-3 h-3 text-gold/50" fill="currentColor" />
      </div>
      <div className="absolute top-[50%] right-[6%] animate-twinkle" style={{ animationDelay: '1.5s' }}>
        <Sparkles className="w-4 h-4 text-gold/40" />
      </div>
      <div className="absolute bottom-[25%] right-[15%] animate-float-slow" style={{ animationDelay: '2s' }}>
        <div className="w-2 h-2 rounded-full bg-gold/40" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/10 border border-gold/25 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Star className="w-4 h-4 text-gold" fill="currentColor" />
            <span className="text-sm text-gold font-semibold tracking-wide">AI-Powered Vedic Astrology</span>
          </motion.div>
          
          {/* Headline */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-gradient-saffron">BoloAstro</span>
            <span className="block mt-4 text-foreground text-3xl md:text-4xl lg:text-5xl font-medium">Your Personal AI Astrologer</span>
          </motion.h1>
          
          {/* Tagline */}
          <motion.p 
            className="text-xl md:text-2xl text-gold/80 font-display italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            — Chat With Your Destiny —
          </motion.p>
          
          {/* Subtext */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get accurate kundali, daily horoscope & instant astrology answers on WhatsApp. 
            <span className="text-foreground/90 font-medium"> Apni kismat jaano, ghar baithe!</span>
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button variant="whatsapp" size="xl" className="group btn-premium-glow" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              onClick={() => scrollToSection("#services")}
            >
              <Moon className="w-5 h-5" />
              Generate Free Kundali
            </Button>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div 
            className="flex flex-wrap items-center gap-8 justify-center text-sm text-muted-foreground pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-gold/30 to-saffron/20 border-2 border-cosmic-dark flex items-center justify-center"
                  >
                    <Sun className="w-4 h-4 text-gold/70" />
                  </div>
                ))}
              </div>
              <span className="font-medium">10,000+ Users</span>
            </div>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 text-gold fill-gold" />
              ))}
              <span className="ml-2 font-medium">4.9/5 Rating</span>
            </div>
          </motion.div>
          
          {/* WhatsApp chat indicator */}
          <motion.div 
            className="inline-flex items-center gap-3 bg-glass rounded-2xl px-5 py-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center shadow-md">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">BoloAstro Bot</p>
              <p className="text-xs text-green-400 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Online • Ready to help
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cosmic-dark via-cosmic-dark/80 to-transparent" />
    </section>
  );
};

export default HeroSection;