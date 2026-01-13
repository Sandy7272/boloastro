import { MessageCircle, Star, Moon, Sparkles } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Nebula background effect */}
      <div className="nebula-bg" />
      
      {/* Stars background */}
      <div className="absolute inset-0 stars-bg opacity-50" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark/40 via-transparent to-cosmic-dark" />
      <div className="absolute inset-0 bg-gradient-to-r from-cosmic-dark/30 via-transparent to-cosmic-dark/30" />
      
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-[15%] left-[8%]"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-gold to-saffron opacity-60 blur-[1px]" />
      </motion.div>
      
      <motion.div 
        className="absolute top-[25%] right-[10%]"
        animate={{ y: [10, -15, 10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Star className="w-4 h-4 text-gold/50" fill="currentColor" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-[30%] left-[5%]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="w-5 h-5 text-gold/40" />
      </motion.div>
      
      <motion.div 
        className="absolute top-[45%] right-[5%]"
        animate={{ y: [-15, 10, -15], x: [-5, 5, -5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-2 h-2 rounded-full bg-saffron/50" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-[25%] right-[12%]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Star className="w-3 h-3 text-gold/30" />
      </motion.div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-5xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Premium Badge */}
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gold/15 to-saffron/10 border border-gold/30 backdrop-blur-xl shadow-lg shadow-gold/10"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Star className="w-4 h-4 text-gold" fill="currentColor" />
            <span className="text-sm text-gold font-semibold tracking-widest uppercase">AI-Powered Vedic Astrology</span>
            <Star className="w-4 h-4 text-gold" fill="currentColor" />
          </motion.div>
          
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold leading-none tracking-tight">
              <span className="text-gradient-saffron glow-text">BoloAstro</span>
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground/90">
              Your Personal AI Astrologer
            </p>
          </motion.div>
          
          {/* Tagline with ornament */}
          <motion.div 
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
            <p className="text-xl md:text-2xl text-gold/90 font-display italic tracking-wide">
              Chat With Your Destiny
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
          </motion.div>
          
          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Get accurate kundali, daily horoscope & instant astrology answers on WhatsApp. 
            <span className="text-foreground font-medium block mt-2">Apni kismat jaano, ghar baithe!</span>
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-5 justify-center pt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button 
              variant="whatsapp" 
              size="xl" 
              className="group btn-premium-glow text-lg px-10 py-7 rounded-2xl" 
              asChild
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              className="text-lg px-10 py-7 rounded-2xl border-2"
              onClick={() => scrollToSection("#services")}
            >
              <Moon className="w-5 h-5" />
              Generate Free Kundali
            </Button>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div 
            className="flex flex-wrap items-center gap-10 justify-center text-base pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-11 h-11 rounded-full bg-gradient-to-br from-gold/40 to-saffron/30 border-3 border-cosmic-dark flex items-center justify-center shadow-lg"
                  >
                    <Sparkles className="w-4 h-4 text-gold/80" />
                  </div>
                ))}
              </div>
              <span className="font-semibold text-foreground">10,000+ Users</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <span className="font-semibold text-foreground ml-2">4.9/5 Rating</span>
            </div>
          </motion.div>
          
          {/* WhatsApp Chat Indicator */}
          <motion.div 
            className="inline-flex items-center gap-4 bg-glass-premium rounded-2xl px-6 py-4 mt-10 border-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 animate-pulse-glow">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-base font-bold text-foreground">BoloAstro Bot</p>
              <p className="text-sm text-green-400 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                Online • Ready to help
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cosmic-dark via-cosmic-dark/90 to-transparent" />
    </section>
  );
};

export default HeroSection;